// JavaScript source code

function graphObject() {

    //Data
    this.heightData = [338, 375, 412, 449, 487, 526, 565, 605, 645, 686, 728, 771, 814, 858, 902, 948, 994, 1041, 1088, 1137, 1186, 1236, 1287, 1339, 1391, 1445, 1499, 1554, 1610, 1667, 1725, 1784, 1844, 1904, 1965, 2027, 2089, 2151, 2213, 2276, 2338, 2400, 2461, 2522, 2583, 2643, 2702, 2761, 2818, 2875, 2931, 2987, 3042, 3096, 3150, 3203, 3256, 3308, 3359, 3410, 3461, 3511, 3561, 3611, 3660, 3709, 3757, 3806, 3854, 3902, 3950, 3998, 4045, 4093, 4141, 4188, 4236, 4284, 4332, 4379, 4427, 4475, 4523, 4570, 4618, 4666, 4713, 4760, 4808, 4855, 4902, 4949, 4995, 5042, 5089, 5136, 5183, 5230, 5277, 5324, 5372, 5420, 5469, 5518, 5568, 5618, 5669, 5720, 5772, 5824, 5877, 5931, 5985, 6039, 6093, 6148, 6204, 6259, 6315, 6371, 6427, 6483, 6539, 6596, 6652, 6709, 6766, 6823, 6881, 6939, 6997, 7055, 7113, 7172, 7231, 7291, 7350, 7410, 7471, 7532, 7593, 7654, 7716, 7778, 7840, 7902, 7965, 8028, 8091, 8155, 8219, 8283, 8347, 8412, 8477, 8542, 8608, 8674, 8741, 8809, 8877, 8945, 9015, 9085, 9156, 9227, 9300, 9373, 9447, 9522, 9598, 9675, 9752, 9830, 9909, 9989, 10070, 10151, 10233, 10317, 10400, 10485, 10570, 10656, 10743, 10830, 10918, 11006, 11095, 11184, 11273, 11362, 11452, 11542, 11631, 11721, 11811, 11900, 11990, 12080, 12170, 12260, 12350, 12440, 12531, 12622, 12713, 12805, 12898, 12990, 13084, 13178, 13272, 13366, 13460, 13554, 13647, 13738, 13829, 13917, 14004, 14089, 14171, 14250, 14326, 14399, 14469, 14535, 14598, 14658, 14716, 14771, 14825, 14877, 14927, 14976, 15024, 15072, 15119, 15167, 15214, 15262, 15310, 15358, 15407, 15456, 15505, 15554, 15604, 15653, 15702, 15751, 15799, 15847, 15895, 15943, 15990, 16036, 16082, 16128, 16173, 16218, 16262, 16306, 16350, 16394, 16437, 16480, 16523, 16566, 16608, 16650, 16693, 16735, 16777, 16818, 16860, 16901, 16943, 16984, 17025, 17066, 17107, 17147, 17188, 17228, 17268, 17308, 17348, 17388, 17427, 17467, 17506, 17545, 17584, 17623, 17662, 17700, 17739, 17778, 17816, 17854, 17892, 17930, 17968, 18006, 18044, 18082, 18120, 18157, 18195, 18232, 18270, 18307, 18344, 18381, 18418, 18455, 18492, 18529, 18566, 18603, 18639, 18676, 18713, 18749, 18786, 18822, 18858, 18895, 18931, 18967, 19003, 19039, 19075, 19111, 19147, 19183, 19219, 19255, 19290, 19326, 19362, 19398, 19434, 19469, 19505, 19541, 19577, 19613, 19648, 19684, 19719, 19755, 19790, 19826, 19861, 19896, 19931, 19966, 20001, 20035, 20070, 20104, 20138, 20172, 20206, 20240, 20274, 20307, 20341, 20375, 20408, 20442, 20476, 20509, 20543, 20576, 20610, 20643, 20677, 20711, 20744, 20778, 20811, 20845, 20879, 20912, 20946, 20979, 21013, 21046, 21080, 21113, 21147, 21180, 21214, 21247, 21280, 21314, 21347, 21380, 21414, 21447, 21480, 21514, 21547, 21580, 21614, 21647, 21680, 21714, 21747, 21780, 21814, 21847, 21880, 21914, 21947, 21980, 22014, 22047, 22080, 22114, 22147, 22180, 22214, 22247, 22280, 22314, 22347, 22381, 22414, 22447, 22481, 22514, 22548, 22581, 22614, 22648, 22681, 22715, 22748, 22782, 22815, 22849, 22882, 22916, 22949, 22983, 23016, 23050, 23084, 23117, 23151, 23185, 23218, 23252, 23286, 23319, 23353, 23387, 23420, 23454, 23488, 23522, 23555, 23589, 23623, 23656, 23690, 23724, 23758, 23792, 23826, 23860, 23894, 23928, 23962, 23996, 24030, 24065, 24099, 24134, 24168, 24203, 24238, 24272, 24307, 24341, 24376, 24410, 24444, 24478, 24512, 24546, 24580, 24614, 24647, 24681, 24715, 24749, 24783, 24817, 24852, 24888, 24924, 24961, 24999, 25037, 25076, 25116, 25157, 25198, 25239, 25280, 25320, 25359, 25396, 25432, 25465, 25497, 25525, 25550, 25572, 25591, 25605, 25616, 25624, 25631, 25637, 25643, 25650, 25659, 25670, 25685, 25703, 25727, 25756, 25793, 25836, 25888, 25947, 26012, 26083, 26159, 26238, 26321, 26406, 26491, 26577, 26663, 26747, 26828, 26906, 26980, 27049, 27113, 27173, 27229, 27281, 27330, 27375, 27418, 27458, 27497, 27534, 27569, 27603, 27637, 27670, 27703, 27738, 27775, 27816, 27861, 27913, 27972, 28040, 28118, 28206, 28307, 28422, 28552, 28697, 28860, 29041, 29239, 29452, 29679, 29919, 30170, 30430, 30698, 30973, 31252, 31535, 31820, 32105, 32388, 32670, 32947, 33220, 33490, 33756, 34019, 34279, 34536, 34791, 35044, 35295, 35545, 35793, 36040, 36286, 36532, 36777, 37022, 37266, 37510, 37753, 37996, 38238, 38479, 38719, 38959, 39198, 39435, 39672, 39907, 40142, 40375, 40606, 40837, 41067, 41295, 41522, 41748, 41974, 42198, 42421, 42643, 42865, 43085, 43305, 43524, 43741, 43959, 44175, 44391, 44606, 44820, 45033, 45246, 45457, 45668, 45879, 46088, 46297, 46506, 46713, 46920, 47126, 47331, 47536, 47740, 47944, 48147, 48349, 48551, 48752, 48952, 49152, 49352, 49551, 49749, 49947, 50144, 50341, 50538, 50734, 50929, 51125, 51319, 51514, 51708, 51901, 52095, 52287, 52480, 52672, 52864, 53055, 53247, 53437, 53628, 53818, 54008, 54198, 54388, 54577, 54766, 54955, 55144, 55333, 55521, 55709, 55897, 56085, 56273, 56461, 56648, 56835, 57023, 57210, 57397, 57583, 57770, 57957, 58143, 58330, 58516, 58702, 58888, 59074, 59260, 59446, 59632, 59818, 60004, 60190, 60376, 60562, 60749, 60935, 61122, 61308, 61495, 61682, 61868, 62055, 62242, 62428, 62615, 62801, 62987, 63173, 63358, 63544, 63728, 63913, 64096, 64280, 64463, 64647, 64830, 65014, 65198, 65382, 65568, 65754, 65941, 66130, 66320, 66511, 66704, 66898, 67093, 67290, 67486, 67681, 67876, 68069, 68259, 68447, 68631, 68811, 68986, 69156, 69320, 69479, 69630, 69774, 69913, 70045, 70173, 70295, 70412, 70525, 70634, 70739, 70842, 70941, 71038, 71133, 71226, 71318, 71407, 71495, 71579, 71661, 71738, 71812, 71880, 71943, 72001, 72052, 72097, 72135, 72164, 72186, 72199, 72204, 72201, 72190, 72172, 72146, 72114, 72076, 72031, 71980, 71924, 71863, 71797, 71727, 71652, 71573, 71491, 71405, 71316, 71223, 71127, 71029, 70928, 70825, 70719, 70612, 70502, 70391, 70278, 70165, 70049, 69933, 69816, 69698, 69579, 69459, 69338, 69217, 69094, 68972, 68848, 68724, 68599, 68474, 68349, 68223, 68097, 67971, 67844, 67718, 67591, 67464, 67337, 67210, 67084, 66957, 66831, 66705, 66579, 66454];
    this.speedData = [215, 217, 219, 221, 223, 225, 227, 229, 231, 233, 235, 237, 239, 242, 244, 246, 248, 250, 252, 255, 257, 259, 261, 264, 266, 268, 271, 273, 275, 278, 280, 283, 285, 288, 290, 293, 295, 298, 301, 303, 306, 308, 311, 313, 315, 318, 320, 322, 325, 327, 329, 331, 333, 336, 338, 340, 342, 344, 346, 347, 349, 351, 353, 355, 357, 359, 361, 362, 364, 366, 368, 370, 371, 373, 375, 377, 378, 380, 382, 384, 385, 387, 389, 391, 392, 394, 396, 398, 399, 401, 403, 404, 406, 408, 409, 411, 413, 415, 416, 418, 420, 421, 423, 425, 427, 428, 430, 432, 434, 436, 438, 440, 442, 444, 446, 448, 450, 452, 454, 456, 458, 460, 462, 464, 466, 468, 470, 472, 474, 476, 478, 480, 482, 485, 487, 489, 491, 493, 495, 498, 500, 502, 504, 507, 509, 511, 514, 516, 518, 521, 523, 525, 528, 530, 533, 535, 538, 540, 543, 545, 548, 551, 553, 556, 559, 562, 564, 567, 570, 573, 576, 579, 583, 586, 589, 592, 596, 599, 602, 606, 610, 613, 617, 621, 624, 628, 632, 636, 640, 644, 648, 652, 656, 660, 664, 668, 672, 676, 680, 685, 689, 693, 697, 701, 706, 710, 714, 719, 723, 728, 732, 737, 741, 746, 751, 756, 761, 766, 771, 776, 781, 786, 791, 796, 801, 807, 812, 817, 822, 828, 833, 839, 844, 849, 855, 860, 865, 871, 876, 881, 887, 892, 897, 902, 907, 912, 917, 922, 927, 932, 937, 942, 947, 952, 957, 962, 966, 971, 976, 981, 985, 990, 995, 999, 1004, 1009, 1013, 1018, 1022, 1027, 1031, 1036, 1040, 1045, 1049, 1053, 1058, 1062, 1066, 1071, 1075, 1079, 1083, 1087, 1092, 1096, 1100, 1104, 1108, 1112, 1116, 1120, 1124, 1128, 1132, 1136, 1140, 1144, 1148, 1151, 1155, 1159, 1163, 1167, 1170, 1174, 1178, 1181, 1185, 1189, 1192, 1196, 1199, 1203, 1207, 1210, 1214, 1217, 1221, 1224, 1227, 1231, 1234, 1238, 1241, 1244, 1248, 1251, 1254, 1258, 1261, 1264, 1267, 1271, 1274, 1277, 1280, 1283, 1286, 1289, 1293, 1296, 1299, 1302, 1305, 1308, 1311, 1314, 1317, 1320, 1323, 1326, 1329, 1332, 1335, 1338, 1341, 1343, 1346, 1349, 1352, 1355, 1357, 1360, 1363, 1366, 1368, 1371, 1373, 1376, 1379, 1381, 1384, 1386, 1389, 1392, 1394, 1397, 1399, 1402, 1404, 1407, 1409, 1412, 1414, 1417, 1419, 1422, 1424, 1426, 1429, 1431, 1434, 1436, 1438, 1441, 1443, 1445, 1448, 1450, 1452, 1455, 1457, 1459, 1462, 1464, 1466, 1468, 1471, 1473, 1475, 1477, 1480, 1482, 1484, 1486, 1488, 1491, 1493, 1495, 1497, 1499, 1501, 1504, 1506, 1508, 1510, 1512, 1514, 1516, 1518, 1520, 1523, 1525, 1527, 1529, 1531, 1533, 1535, 1537, 1539, 1541, 1543, 1545, 1547, 1549, 1551, 1553, 1555, 1557, 1559, 1561, 1563, 1565, 1567, 1569, 1571, 1573, 1575, 1577, 1578, 1580, 1582, 1584, 1586, 1588, 1590, 1592, 1594, 1596, 1597, 1599, 1601, 1603, 1605, 1607, 1609, 1610, 1612, 1614, 1616, 1618, 1620, 1621, 1623, 1625, 1627, 1629, 1631, 1632, 1634, 1636, 1638, 1639, 1641, 1643, 1645, 1647, 1648, 1650, 1652, 1654, 1655, 1657, 1659, 1661, 1663, 1664, 1666, 1668, 1670, 1672, 1673, 1675, 1677, 1679, 1681, 1683, 1685, 1687, 1688, 1690, 1692, 1695, 1697, 1699, 1701, 1703, 1705, 1707, 1710, 1712, 1714, 1717, 1719, 1721, 1724, 1726, 1729, 1731, 1733, 1736, 1738, 1741, 1743, 1746, 1748, 1750, 1753, 1755, 1758, 1760, 1763, 1765, 1768, 1771, 1773, 1776, 1778, 1781, 1783, 1786, 1789, 1791, 1794, 1796, 1799, 1802, 1804, 1807, 1809, 1812, 1814, 1817, 1819, 1822, 1824, 1827, 1829, 1832, 1834, 1837, 1839, 1842, 1845, 1848, 1851, 1854, 1857, 1860, 1864, 1867, 1871, 1875, 1880, 1884, 1889, 1895, 1901, 1907, 1913, 1920, 1928, 1936, 1944, 1953, 1962, 1971, 1980, 1990, 1999, 2009, 2019, 2029, 2039, 2049, 2059, 2069, 2079, 2088, 2098, 2108, 2118, 2127, 2137, 2147, 2157, 2167, 2177, 2187, 2197, 2207, 2218, 2228, 2239, 2249, 2260, 2271, 2282, 2293, 2303, 2314, 2325, 2336, 2347, 2358, 2369, 2380, 2390, 2401, 2412, 2424, 2435, 2446, 2458, 2469, 2481, 2493, 2506, 2518, 2531, 2545, 2558, 2572, 2586, 2600, 2615, 2629, 2644, 2659, 2674, 2690, 2705, 2721, 2736, 2752, 2767, 2783, 2799, 2815, 2831, 2847, 2864, 2880, 2897, 2914, 2931, 2948, 2966, 2984, 3002, 3020, 3039, 3058, 3078, 3097, 3117, 3137, 3158, 3178, 3199, 3220, 3241, 3262, 3284, 3305, 3327, 3348, 3370, 3392, 3414, 3436, 3458, 3480, 3502, 3525, 3547, 3570, 3593, 3615, 3638, 3661, 3685, 3708, 3731, 3755, 3779, 3803, 3827, 3852, 3877, 3902, 3928, 3953, 3980, 4007, 4034, 4061, 4089, 4118, 4147, 4176, 4205, 4235, 4266, 4297, 4328, 4359, 4391, 4423, 4456, 4489, 4522, 4555, 4589, 4623, 4658, 4692, 4727, 4762, 4797, 4832, 4867, 4902, 4938, 4973, 5009, 5044, 5080, 5116, 5153, 5190, 5228, 5266, 5305, 5346, 5387, 5429, 5472, 5516, 5562, 5609, 5657, 5706, 5755, 5805, 5853, 5901, 5948, 5993, 6036, 6077, 6115, 6150, 6181, 6209, 6233, 6252, 6268, 6280, 6289, 6294, 6297, 6296, 6293, 6287, 6279, 6269, 6257, 6243, 6228, 6211, 6194, 6174, 6154, 6134, 6112, 6089, 6067, 6043, 6020, 5996, 5972, 5948, 5925, 5901, 5879, 5856, 5834, 5812, 5790, 5769, 5748, 5727, 5707, 5686, 5666, 5645, 5625, 5605, 5584, 5564, 5544, 5523, 5503, 5482, 5462, 5442, 5421, 5401, 5380, 5360, 5340, 5320, 5299, 5279, 5259, 5239, 5219, 5199, 5179, 5160, 5140, 5121, 5101, 5082, 5063, 5044, 5025, 5006, 4988];

    this.currentTime;

    //speed 
    this.speedgreen = 200;
    this.speedyellow = 1200;
    this.speedred = 2200;
    this.speedDelta = 50;

    //height
    this.heightred = 22000;
    this.heightyellow = 12000;
    this.heightgreen = 2000;
    this.heightDelta = 1000;

    //Offsets 
    this.heightOffset = 0;
    this.speedOffset = 0;
  
}

graphObject.prototype.load = function(){

    //load buttons 
    $(".debug-hu").on("click", () => {
        this.heightOffset += this.heightDelta;
    })

    $(".debug-hd").on("click", () => {
        this.heightOffset += -this.heightDelta;
    })

    $(".debug-vu").on("click", () => {
        this.speedOffset += this.speedDelta;
    })

    $(".debug-vd").on("click", () => {
        this.speedOffset += -this.speedDelta;
    })

    //load the graphs

    //[1] Altitude graph

    var graph = $(".alt-graph");
    var graphwidth = graph.width();
    var graphheight = graph.height();
    var AltCanvas = document.getElementById('AltCanvas');
    AltCanvas.width = graphwidth;
    AltCanvas.height = graphheight;

    var ctx = AltCanvas.getContext("2d");

    var len = this.heightData.length;
    var xincrement = graphwidth / len;
    var currentx = 0;
    var currenty = 0;

    ctx.moveTo(0, graphheight);   //zero 
    for (var i = 0; i < len; i++) {
        currentx = Math.round(xincrement * i);
        currenty = (this.heightData[i] / 75000) * graphheight;
        ctx.lineTo(currentx, graphheight - currenty);
    }
    ctx.stroke();

    //[2] Velocity graph 

    var graphv = $(".vel-graph");
    var graphwidthv = graphv.width();
    var graphheightv = graphv.height();
    var VelCanvas = document.getElementById('VelCanvas');
    VelCanvas.width = graphwidthv;
    VelCanvas.height = graphheightv;

    var ctx = VelCanvas.getContext("2d");
    //this.speedData[i] / 4973

    var len = this.speedData.length;
    var xincrement = graphwidthv / len;

    var currentx = 0;
    var currenty = 0;

    ctx.moveTo(0, graphheight);   //zero 
    for (var i = 0; i < len; i++) {
        currentx = Math.round(xincrement * i);
        currenty = (this.speedData[i] / 6500) * graphheight;
        ctx.lineTo(currentx, graphheight - currenty);
    }

    ctx.stroke();

}

graphObject.prototype.updateOffset = function (offsetObject){

    //update the values of the offsets using from main, updated when pilot sends them...

    this.heightOffset = offsetObject.height;
    this.speedOffset = offsetObject.speed;

}


graphObject.prototype.update = function (time) {

    this.currentTime = time;

    this.updateGraphPositions();
    this.updateArrowsHeight();
    this.updateArrowsSpeed(); 

}

graphObject.prototype.updateGraphPositions = function () {

    //update the position of the pointers on the speed and velocity graphs

    //[1] update the velocity graph
    var time = this.currentTime;

    var vy = ((100 - (((this.speedData[time] + this.speedOffset) / 6500) * 100)) - 2.5) + "%";
    var vx = (((time / this.speedData.length) * 100) - 1.5) + "%";

    $(".vel-circle").css("top", vy);
    $(".vel-circle").css("left", vx);

    //[2] update the height graph

    var ay = ((100 - (((this.heightData[time] + this.heightOffset) / 75000) * 100)) - 2.5) + "%";
    var ax = (((time / this.heightData.length) * 100) - 1.5) + "%";

    $(".alt-circle").css("top", ay);
    $(".alt-circle").css("left", ax);

}

graphObject.prototype.updateArrowsHeight = function () {

    //height graph first...

    var heightoffset = Math.abs(this.heightOffset);
    var sign = Math.sign(this.heightOffset);
    var stringsign = "+";

    var color;
    var red;
    var green;
    var blue;
    var temp = 0;

    if (heightoffset < this.heightgreen) {

        // make arrows invisible if the offset is within the minimum range 

        $(".alt-up-arrow").css("display", "none");
        $(".alt-down-arrow").css("display", "none");

    } else if (heightoffset < this.heightyellow) {

        //offset is within the lowest range, change from green to yellow

        //find relative distance into green - yellow window
        temp = Math.round((((heightoffset - this.heightgreen) / (this.heightyellow - this.heightgreen)) * 255));

        //define and set color
        red = temp;
        green = 255;
        blue = 0;
        color = rgb(red, green, blue);

        //set color of arrows 
        $(".alt-up-arrow").css("background-color", color);
        $(".alt-down-arrow").css("background-color", color);
        console.log(heightoffset, "start change to yellow");

        //only make the correct arrow visible
        if (sign > 0) {
            $(".alt-down-arrow").css("display", "block");
        } else {
            $(".alt-up-arrow").css("display", "block");
        }

    } else if (heightoffset < this.heightred) {

        //offset is within the larger range, change from yellow to red

        //define relative 
        temp = Math.round((((heightoffset - this.heightyellow) / (this.heightred - this.heightyellow)) * 255));

        //define and set colors
        red = 255;
        green = 255 - temp;
        blue = 0;
        color = rgb(red, green, blue);

        $(".alt-up-arrow").css("background-color", color);
        $(".alt-down-arrow").css("background-color", color);

    } else {
        // if offset is above maximum, then arrows are red

        color = rgb(255, 0, 0);
        $(".alt-up-arrow").css("background-color", color);
        $(".alt-down-arrow").css("background-color", color);
    }


    if (sign > 0) {
        stringsign = "+";
    } else {
        stringsign = "-";
    }

    //set the inner html of both arrows to the absolute offset 
    $(".aubv").html(stringsign + heightoffset);
    $(".adbv").html(stringsign + heightoffset);
}

graphObject.prototype.updateArrowsSpeed = function () {

    //Draw warning arrows in the speed graph depending on the current speed offset 

    var absSpeedOffset = Math.abs(this.speedOffset);
    var sign = Math.sign(this.speedOffset);
    var stringsign = "+";

    var color;
    var red;
    var green;
    var blue;
    var temp = 0;

    if (absSpeedOffset < this.speedgreen) {

        // make arrows invisible if the offset is within the minimum range 

        $(".vel-up-arrow").css("display", "none");
        $(".vel-down-arrow").css("display", "none");

    } else if (absSpeedOffset < this.speedyellow) {

        //offset is within the lowest range, change from green to yellow

        //find relative distance into green - yellow window
        temp = Math.round((((absSpeedOffset - this.speedgreen) / (this.speedyellow - this.speedgreen)) * 255));

        //define and set color
        red = temp;
        green = 255;
        blue = 0;
        color = rgb(red, green, blue);

        //set color of arrows 
        $(".vel-up-arrow").css("background-color", color);
        $(".vel-down-arrow").css("background-color", color);
        console.log(absSpeedOffset, "start change to yellow");

        //only make the correct arrow visible
        if (sign > 0) {
            $(".vel-down-arrow").css("display", "block");
        } else {
            $(".vel-up-arrow").css("display", "block");
        }

    } else if (absSpeedOffset < this.speedred) {

        //offset is within the larger range, change from yellow to red

        //define relative 
        temp = Math.round((((absSpeedOffset - this.speedyellow) / (this.speedred - this.speedyellow)) * 255));

        //define and set colors
        red = 255;
        green = 255 - temp;
        blue = 0;
        color = rgb(red, green, blue);

        $(".vel-up-arrow").css("background-color", color);
        $(".vel-down-arrow").css("background-color", color);

    } else {
        // if offset is above maximum, then arrows are red

        color = rgb(255, 0, 0);
        $(".vel-up-arrow").css("background-color", color);
        $(".vel-down-arrow").css("background-color", color);
    }


    if (sign > 0) {
        stringsign = "+";
    } else {
        stringsign = "-";
    }

    //set the inner html of both arrows to the absolute offset 
    $(".vubv").html(stringsign + absSpeedOffset);
    $(".vdbv").html(stringsign + absSpeedOffset);
}


//helper functions
function rgb(r, g, b) {
    return "rgb(" + r + "," + g + "," + b + ")";
}



export default graphObject;