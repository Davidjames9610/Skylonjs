const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

import screenObject from './screenObject.js';

var myScreen = new screenObject(screen.width, screen.height);

//local variables
var roll = "null";
var start = false;
var secondcount = 0;
var seconds = 0;
var time = 0;

//offsets for the svg objects when they move, the must be kept track of


$(document).ready(function () {

    serverCommunication();
    setSizeofDom();
    setButtonsUp();

});

//update step must be called within server communication code
// static code:
function serverCommunication() {

    //  Get username and room from URL
    const { username, room } = Qs.parse(location.search, {
        ignoreQueryPrefix: true
    });


    // Join chatroom
    socket.emit('joinRoom', { username, room });            //this is done at the start as soon as a connection is made

    //get room and users
    socket.on('roomUsers', ({ room, users }) => {
        outputRoomName(room);
        outputUsers(users);

    });


    //message from server
    socket.on('message', message => {
        console.log(message);
        outputMessage(message);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    // Message submit
    chatForm.addEventListener('submit', e => {
        e.preventDefault();

        // Get message text
        const msg = e.target.elements.msg.value;

        // Emit message to server
        socket.emit('chatMessage', msg);

        // Clear input
        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();

    });


    //get room and users
    socket.on('update', gameobj => {

        //this is called every 20 ms for all clients

        time = JSON.stringify(gameobj.time);

        if (start){ updateGame(); }
        //console.log(time);

        //update(gameobj);
        //this will be called every 20 frames per second , we will use it to update the positions of everything. The obj is shared between the engineer and the pilot
        //It wil contain informaiton which allows the displays to be drawn in the right location, how?

    });

    socket.on('startRoomGame', msg => {
        start = true;
    });


    function outputMessage(message) {
        const div = document.createElement('div');
        div.classList.add('message');
        div.innerHTML = `<p class="meta">${message.username} <span>${message.time}</span></p>
  <p class="text">
    ${message.text}
  </p>`;
        document.querySelector('.chat-messages').appendChild(div);
    }

    // Add room name to DOM
    function outputRoomName(room) {
        roomName.innerText = room;
    }

    // Add users to DOM
    function outputUsers(users) {
        userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
    }





    
}

function setSizeofDom() {

    //these are main size operations which can happen once in the background
    setSizeofFont(screen.width);
    setSizeofDomElements();

    function setSizeofFont(width) {

        var fontBody = $(".fontbody");
        console.log(JSON.stringify(width));

        if (width >= 2048) {
            fontBody.css("font-size", "22px");
            $(".fontbutton").html("the font size is 22px");

        } else if ((2048 > width) && (width >= 1920)) {
            fontBody.css("font-size", "20px");
            $(".fontbutton").html("the font size is 20px");


        } else if ((1920 > width) && (width >= 1856)) {
            fontBody.css("font-size", "16px");
            $(".fontbutton").html("the font size is 16px");

        } else if ((1856 > width) && (width >= 1200)) {
            fontBody.css("font-size", "14px");
            $(".fontbutton").html("the font size is 14px");
        }


    }

    function setSizeofDomElements() {

        myScreen.calculateConstants();
        var containerHeight = 100 * myScreen.hc;
        var containerWidth = 100 * myScreen.wc;
        var halfContainerHeight = containerHeight / 2; //+ "px";
        var halfContainerWidth = containerWidth / 2; //+ "px";

        $(".game-container").css("top", "50%");
        $(".game-container").css("left", "50%");
        $(".game-container").css("margin-top", -halfContainerHeight + "px");
        $(".game-container").css("margin-left", -halfContainerWidth + "px");
        $(".game-container").width(containerWidth);
        $(".game-container").height(containerHeight);
        $(".game-container").css("border", "2px solid blue");
        $(".game-container").css("background-color", "white");
        $(".game-container").css("position", "absolute");



    }

}

function setButtonsUp() {

    //chat room 
    $(".chat-enterGame").on("click", () => {

        if (roll == "null") {
            alert("please choose a role!");
        } else if (roll == "Engineer") {
            $(".chat-container").css("display", "none");
            $(".eng-container").css("display", "block");
            loadEngineerdisplay()       //call this every update step as well?


        } else if (roll == "Pilot") {
            $(".chat-container").css("display", "none");
            $(".pilot-container").css("display", "block");
            loadPilotdisplay()
        }

    })

    $(".role-engineer").on("click", () => {
        //alert("role-engineer!");
        roll = "Engineer";
        const msg = "I choose to be a Engineer";
        socket.emit('chatMessage', msg);

    })

    $(".role-pilot").on("click", () => {
        roll = "Pilot";
        const msg = "I choose to be a Pilot";
        socket.emit('chatMessage', msg);
    })


    $(".game-ready").on("click", () => {
        //alert("game ready!");
        var msg = true;

        socket.emit('startRequest', msg); 

        //now emit message to check if the other players are ready...

    })

    //navigation inside game display

    $(".game-brief").on("click", () => {
        $(".brief-display").css("display", "block");

    })

    $(".brief-close").on("click", () => {
        $(".brief-display").css("display", "none");
    })


    $(".chat-return").on("click", () => {
        if (roll == "Engineer") {
            $(".chat-container").css("display", "block");
            $(".eng-container").css("display", "none");
        } else if (roll == "Pilot") {
            $(".chat-container").css("display", "block");
            $(".pilot-container").css("display", "none");
        }

    })

}


function loadEngineerdisplay() {

    //Engineer display
    drawGraphs();

    var fuel_container = $(".fueltank-container").width();
    var fuel_tank = $(".fuel-tanks").width();
    var offset = centerObject(fuel_tank, fuel_container);
    $(".fuel-tanks").css("left", offset + "px");
    $(".fuel-fire").css("width", fuel_tank + "px");
    $(".fuel-fire").css("left", offset + "px");


    function drawGraphs() {

        //Altitude graph 
        var graph = $(".alt-graph");
        var graphwidth = graph.width();
        var graphheight = graph.height();
        var AltCanvas = document.getElementById('AltCanvas');
        AltCanvas.width = graphwidth;
        AltCanvas.height = graphheight;

        var ctx = AltCanvas.getContext("2d");
        var heightInfo = [338, 374, 411, 449, 487, 526, 565, 605, 645, 687, 728, 771, 814, 858, 903, 948, 994, 1041, 1089, 1137, 1186, 1236, 1287, 1339, 1391, 1444, 1499, 1554, 1610, 1667, 1725, 1784, 1844, 1904, 1965, 2027, 2089, 2151, 2213, 2275, 2338, 2400, 2461, 2522, 2583, 2643, 2702, 2761, 2818, 2875, 2931, 2987, 3042, 3096, 3150, 3203, 3256, 3308, 3359, 3410, 3461, 3511, 3561, 3611, 3660, 3709, 3757, 3805, 3854, 3902, 3950, 3997, 4045, 4093, 4140, 4188, 4236, 4284, 4331, 4379, 4427, 4475, 4523, 4570, 4618, 4666, 4713, 4760, 4808, 4855, 4902, 4949, 4996, 5042, 5089, 5136, 5183, 5230, 5277, 5325, 5372, 5421, 5469, 5518, 5568, 5618, 5669, 5720, 5772, 5825, 5878, 5931, 5985, 6039, 6094, 6149, 6204, 6259, 6315, 6371, 6427, 6483, 6540, 6596, 6653, 6710, 6767, 6824, 6881, 6939, 6997, 7055, 7114, 7172, 7232, 7291, 7351, 7411, 7471, 7532, 7593, 7654, 7716, 7778, 7840, 7903, 7965, 8028, 8092, 8155, 8219, 8283, 8347, 8412, 8477, 8542, 8608, 8674, 8741, 8809, 8877, 8945, 9015, 9085, 9155, 9227, 9299, 9373, 9447, 9522, 9597, 9674, 9751, 9830, 9909, 9989, 10069, 10151, 10233, 10316, 10400, 10485, 10570, 10656, 10743, 10830, 10918, 11006, 11095, 11184, 11273, 11362, 11452, 11542, 11631, 11721, 11811, 11900, 11990, 12080, 12170, 12260, 12350, 12440, 12531, 12622, 12714, 12805, 12898, 12991, 13084, 13178, 13272, 13366, 13460, 13554, 13647, 13738, 13829, 13917, 14004, 14089, 14171, 14250, 14326, 14399, 14468, 14535, 14598, 14658, 14716, 14771, 14825, 14876, 14927, 14976, 15024, 15072, 15119, 15167, 15214, 15262, 15310, 15359, 15407, 15456, 15505, 15555, 15604, 15653, 15702, 15751, 15799, 15848, 15896, 15943, 15990, 16036, 16082, 16128, 16173, 16218, 16262, 16307, 16350, 16394, 16437, 16480, 16523, 16566, 16608, 16650, 16693, 16735, 16776, 16818, 16860, 16901, 16943, 16984, 17025, 17066, 17107, 17147, 17188, 17228, 17268, 17308, 17348, 17388, 17427, 17467, 17506, 17545, 17584, 17623, 17662, 17701, 17739, 17778, 17816, 17854, 17892, 17930, 17968, 18006, 18044, 18082, 18120, 18157, 18195, 18232, 18269, 18307, 18344, 18381, 18418, 18455, 18492, 18529, 18566, 18603, 18639, 18676, 18713, 18749, 18786, 18822, 18859, 18895, 18931, 18967, 19003, 19039, 19075, 19111, 19147, 19183, 19219, 19254, 19290, 19326, 19362, 19397, 19433, 19469, 19505, 19541, 19576, 19612, 19648, 19684, 19719, 19755, 19790, 19826, 19861, 19896, 19931, 19966, 20001, 20036, 20070, 20104, 20138, 20172, 20206, 20240, 20274, 20308, 20341, 20375, 20408, 20442, 20475, 20509, 20543, 20576, 20610, 20643, 20677, 20711, 20744, 20778, 20811, 20845, 20879, 20912, 20946, 20979, 21013, 21047, 21080, 21113, 21147, 21180, 21214, 21247, 21281, 21314, 21347, 21381, 21414, 21447, 21481, 21514, 21547, 21581, 21614, 21647, 21681, 21714, 21747, 21781, 21814, 21847, 21881, 21914, 21947, 21981, 22014, 22047, 22081, 22114, 22147, 22181, 22214, 22247, 22281, 22314, 22347, 22381, 22414, 22447, 22481, 22514, 22547, 22581, 22614, 22648, 22681, 22714, 22748, 22781, 22815, 22848, 22882, 22915, 22949, 22982, 23016, 23050, 23083, 23117, 23151, 23184, 23218, 23252, 23286, 23320, 23353, 23387, 23421, 23455, 23488, 23522, 23556, 23589, 23623, 23657, 23690, 23724, 23758, 23792, 23826, 23859, 23893, 23927, 23962, 23996, 24030, 24064, 24099, 24133, 24168, 24203, 24237, 24272, 24306, 24341, 24375, 24410, 24444, 24478, 24512, 24546, 24580, 24613, 24647, 24681, 24714, 24748, 24783, 24817, 24852, 24888, 24924, 24961, 24998, 25037, 25076, 25116, 25157, 25198, 25239, 25280, 25320, 25359, 25396, 25432, 25466, 25497, 25525, 25551, 25573, 25591, 25605, 25616, 25625, 25632, 25638, 25644, 25651, 25659, 25670, 25685, 25703, 25727, 25756, 25792, 25836, 25888, 25946, 26012, 26083, 26159, 26238, 26321, 26405, 26491, 26577, 26663, 26746, 26828, 26906, 26980, 27049, 27113, 27173, 27229, 27281, 27330, 27375, 27418, 27459, 27497, 27534, 27569, 27603, 27637, 27670, 27703, 27738, 27775, 27816, 27861, 27913, 27972, 28040, 28118, 28206, 28307, 28422, 28552, 28697, 28860, 29041, 29239, 29452, 29680, 29919, 30170, 30430, 30699, 30973, 31253, 31535, 31820, 32105, 32389, 32670, 32947, 33221, 33490, 33756, 34019, 34279, 34537, 34792, 35045, 35296, 35545, 35793, 36040, 36286, 36532, 36777, 37022, 37266, 37510, 37754, 37996, 38238, 38479, 38720, 38959, 39198, 39436, 39672, 39908, 40142, 40375, 40607, 40838, 41067, 41295, 41523, 41749, 41974, 42198, 42422, 42644, 42865, 43086, 43305, 43524, 43742, 43959, 44175, 44391, 44606, 44820, 45033, 45246, 45458, 45669, 45879, 46088, 46297, 46506, 46713, 46920, 47126, 47331, 47536, 47740, 47944, 48147, 48349, 48551, 48752, 48952, 49152, 49352, 49551, 49749, 49947, 50144, 50341, 50538, 50734, 50929, 51125, 51319, 51514, 51708, 51901, 52095, 52287, 52480, 52672, 52864, 53055, 53247, 53437, 53628, 53818, 54008, 54198, 54388, 54577, 54766, 54955, 55144, 55333, 55521, 55709, 55897, 56085, 56273, 56460, 56648, 56835, 57022, 57210, 57397, 57583, 57770, 57957, 58143, 58330, 58516, 58703, 58889, 59075, 59262, 59448, 59634, 59820, 60006, 60192, 60378, 60564, 60750, 60936, 61122, 61308, 61494, 61680, 61866, 62052, 62238, 62424, 62610, 62796, 62983, 63169, 63355, 63541, 63727, 63913, 64099, 64285, 64471, 64657, 64843, 65030, 65216, 65402, 65588, 65774, 65960, 66146, 66332, 66518, 66704];
        //66704 = heightInfo[765]

        var len = heightInfo.length;
        var xincrement = graphwidth / len;
        var currentx = 0;
        var currenty = 0;

        ctx.moveTo(0, graphheight);   //zero 
        for (var i = 0; i < len; i++) {
            currentx = Math.round(xincrement * i);
            currenty = (heightInfo[i] / 66704) * graphheight;
            ctx.lineTo(currentx, graphheight - currenty);
        }
        ctx.stroke();

        //Velocity graph 
        var graphv = $(".vel-graph");
        var graphwidthv = graphv.width();
        var graphheightv = graphv.height();
        var VelCanvas = document.getElementById('VelCanvas');
        VelCanvas.width = graphwidthv;
        VelCanvas.height = graphheightv;

        var ctx = VelCanvas.getContext("2d");
        var MachInfo = [215, 217, 219, 221, 223, 225, 227, 229, 231, 234, 236, 238, 240, 242, 244, 246, 248, 250, 252, 255, 257, 259, 261, 263, 266, 268, 270, 273, 275, 278, 280, 283, 285, 288, 290, 293, 295, 298, 301, 303, 306, 308, 311, 313, 316, 318, 320, 323, 325, 327, 329, 331, 333, 335, 337, 339, 341, 343, 345, 347, 349, 351, 353, 355, 357, 358, 360, 362, 364, 366, 368, 370, 372, 373, 375, 377, 379, 381, 382, 384, 386, 388, 389, 391, 393, 395, 396, 398, 400, 401, 403, 405, 406, 408, 409, 411, 413, 414, 416, 418, 419, 421, 423, 424, 426, 428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 474, 476, 479, 481, 483, 485, 487, 489, 491, 493, 495, 498, 500, 502, 504, 507, 509, 511, 514, 516, 518, 521, 523, 525, 528, 530, 533, 535, 538, 540, 543, 546, 548, 551, 554, 556, 559, 562, 565, 568, 571, 574, 577, 580, 583, 586, 590, 593, 596, 600, 603, 606, 610, 614, 617, 621, 625, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 684, 688, 693, 697, 701, 705, 710, 714, 718, 723, 727, 732, 737, 741, 746, 751, 756, 761, 766, 771, 776, 781, 786, 791, 796, 802, 807, 812, 818, 823, 828, 834, 839, 844, 850, 855, 861, 866, 871, 876, 882, 887, 892, 897, 903, 908, 913, 918, 923, 928, 933, 938, 943, 948, 952, 957, 962, 967, 971, 976, 981, 986, 990, 995, 999, 1004, 1008, 1013, 1018, 1022, 1027, 1031, 1035, 1040, 1044, 1049, 1053, 1058, 1062, 1066, 1071, 1075, 1079, 1083, 1088, 1092, 1096, 1100, 1104, 1108, 1112, 1116, 1120, 1124, 1128, 1132, 1136, 1140, 1144, 1147, 1151, 1155, 1159, 1163, 1166, 1170, 1174, 1177, 1181, 1185, 1188, 1192, 1196, 1199, 1203, 1206, 1210, 1214, 1217, 1221, 1224, 1227, 1231, 1234, 1238, 1241, 1244, 1248, 1251, 1254, 1258, 1261, 1264, 1267, 1271, 1274, 1277, 1280, 1283, 1286, 1290, 1293, 1296, 1299, 1302, 1305, 1308, 1311, 1314, 1317, 1320, 1323, 1326, 1329, 1332, 1335, 1338, 1341, 1343, 1346, 1349, 1352, 1355, 1358, 1360, 1363, 1366, 1368, 1371, 1374, 1376, 1379, 1382, 1384, 1387, 1389, 1392, 1395, 1397, 1400, 1402, 1405, 1407, 1410, 1412, 1414, 1417, 1419, 1422, 1424, 1427, 1429, 1431, 1434, 1436, 1439, 1441, 1443, 1446, 1448, 1450, 1453, 1455, 1457, 1459, 1462, 1464, 1466, 1468, 1471, 1473, 1475, 1477, 1480, 1482, 1484, 1486, 1488, 1490, 1493, 1495, 1497, 1499, 1501, 1503, 1506, 1508, 1510, 1512, 1514, 1516, 1519, 1521, 1523, 1525, 1527, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 1545, 1547, 1549, 1551, 1553, 1555, 1557, 1559, 1561, 1563, 1565, 1567, 1569, 1571, 1573, 1575, 1576, 1578, 1580, 1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1597, 1599, 1601, 1603, 1605, 1607, 1609, 1610, 1612, 1614, 1616, 1618, 1620, 1621, 1623, 1625, 1627, 1629, 1630, 1632, 1634, 1636, 1638, 1639, 1641, 1643, 1645, 1647, 1648, 1650, 1652, 1654, 1656, 1657, 1659, 1661, 1663, 1665, 1666, 1668, 1670, 1672, 1674, 1676, 1677, 1679, 1681, 1683, 1685, 1687, 1689, 1691, 1693, 1695, 1697, 1699, 1701, 1703, 1705, 1708, 1710, 1712, 1714, 1716, 1719, 1721, 1723, 1726, 1728, 1731, 1733, 1735, 1738, 1740, 1743, 1745, 1748, 1750, 1753, 1756, 1758, 1761, 1763, 1766, 1768, 1771, 1774, 1776, 1779, 1781, 1784, 1786, 1789, 1791, 1794, 1796, 1799, 1801, 1804, 1807, 1809, 1811, 1814, 1816, 1819, 1821, 1824, 1827, 1829, 1832, 1834, 1837, 1840, 1842, 1845, 1848, 1851, 1854, 1857, 1860, 1864, 1867, 1871, 1875, 1879, 1884, 1889, 1894, 1900, 1906, 1913, 1920, 1928, 1936, 1944, 1952, 1961, 1971, 1980, 1990, 1999, 2009, 2019, 2029, 2039, 2049, 2059, 2069, 2079, 2088, 2098, 2108, 2118, 2127, 2137, 2147, 2157, 2167, 2177, 2187, 2197, 2207, 2218, 2228, 2239, 2249, 2260, 2271, 2282, 2293, 2303, 2314, 2325, 2336, 2347, 2358, 2369, 2380, 2391, 2402, 2413, 2424, 2435, 2446, 2458, 2469, 2481, 2493, 2505, 2518, 2531, 2544, 2558, 2572, 2586, 2600, 2614, 2629, 2644, 2659, 2674, 2690, 2705, 2721, 2736, 2752, 2768, 2783, 2799, 2815, 2831, 2847, 2864, 2880, 2897, 2914, 2931, 2948, 2966, 2984, 3002, 3021, 3039, 3058, 3078, 3098, 3117, 3138, 3158, 3178, 3199, 3220, 3241, 3262, 3284, 3305, 3327, 3348, 3370, 3392, 3414, 3435, 3458, 3480, 3502, 3524, 3547, 3570, 3592, 3615, 3638, 3661, 3684, 3708, 3731, 3755, 3779, 3803, 3827, 3852, 3877, 3902, 3928, 3954, 3980, 4007, 4034, 4062, 4090, 4118, 4147, 4177, 4206, 4236, 4267, 4297, 4328, 4360, 4392, 4424, 4456, 4489, 4522, 4555, 4588, 4622, 4656, 4691, 4725, 4760, 4795, 4830, 4866, 4901, 4937, 4973];
        //MachInfo[i] / 4973

        var len = MachInfo.length;
        var xincrement = graphwidthv / len;
        var currentx = 0;
        var currenty = 0;

        ctx.moveTo(0, graphheight);   //zero 
        for (var i = 0; i < len; i++) {
            currentx = Math.round(xincrement * i);
            currenty = (MachInfo[i] / 4973) * graphheight;
            ctx.lineTo(currentx, graphheight - currenty);
        }
        ctx.stroke();

    }
}

function loadPilotdisplay() {

    //pilot display
    var hudWidth = $(".pilot-ihud").width();
    var offset = centerObject(($(".hud-outer").width()), hudWidth);
    $(".hud-outer").css("left", offset + "px");
    $(".hud-detail").css("left", offset + "px");
    $(".hud-titles").css("left", offset + "px");

    //position sky container and sky
    var skyw = $(".hud-outer").width() * 0.7;
    $(".hud-sky").width(skyw);
    var offset = centerObject(skyw, hudWidth);
    $(".hud-sky").css("left", offset + "px");
    var offset = centerObject($(".sky-SVG").width(), skyw);
    $(".sky-SVG").css("left", offset + "px");

}

function centerObject(objectWidth, containerWidth) {
    return (containerWidth - objectWidth) / 2;
}

//dynamic code

function updateGame() {
    //update positions and times
    secondcount = secondcount + 1;

    if (secondcount > 20) {
        secondcount = 0;
        seconds = seconds + 1;
        $(".game-timer").html(seconds);

        console.log(JSON.stringify(seconds));
    }


    



}