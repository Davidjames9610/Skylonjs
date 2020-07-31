const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

import screenObject from './screenObject.js';
import engineerObject from './engineerObject.js';

var myScreen = new screenObject(screen.width, screen.height);
var myeng = new engineerObject();

//local variables
var roll = "null";
var currentTime = 0;


//engineer things
//var fuelBinary = 0;
//var mode = 1; //mode 1

//cofg 


$(document).ready(function () {

    serverCommunication();
    setSizeofDom();
    setButtonsUp();

});

//update step must be called within server communication code

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

        //console.log("update game 20 frames per second")
        //update(gameobj);
        //this will be called every 20 frames per second , we will use it to update the positions of everything. The obj is shared between the engineer and the pilot
        //It wil contain informaiton which allows the displays to be drawn in the right location, how?

    });

    socket.on('time-jump', time_jump => {

        //  myeng.consumefuel(fuelBinary, mode, time_jump)
        //console.log(time_jump);
        //time jump

    });



    socket.on('Timeupdate', gameobj => {

        // this will be called from the server every second

        currentTime = JSON.stringify(gameobj);
        $(".game-timer").html(currentTime);

        //updateEngineer(currentTime);

        myeng.update(currentTime);

    });

    socket.on('startRoomGame', msg => {
        //everyone receievs this after someone starts the game

        alert("The game has started!");

        $(".role-title").css("display", "none");
        $(".game-ready").css("display", "none");

        //remove ability to change role
        $(".role-engineer").css("display", "none");
        $(".role-pilot").css("display", "none");
        $(".chat-enterGame").html("Controls");
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
            //loadEngineerdisplay()       //call this every update step as well?
            myeng.loadEngineer();


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
/*
function updateEngineer(currentTime) {

    //called every second

    //check to see if mode should change
    if (currentTime > 585) {
        mode = 2;
    }       

    //consume fuel 
    myeng.consumefuel(fuelBinary, mode, 1);

    //update screen 
    // [1] update graphs
    updategraphs(currentTime);

    // [2] update cofg
    updatecofg(currentTime);

    // [3] update fuel
    updatefuel();

    //update debug 
    updatedebug(currentTime);


}

/*








function updategraphs(seconds) {

    //console.log("hi");

    var vy = ((100 - ((MachInfoG[seconds] / 4973) * 100)) - 2.5) + "%";
    var vx = (((seconds / MachInfoG.length) * 100) - 1.5) + "%";

    $(".vel-circle").css("top", vy);
    $(".vel-circle").css("left", vx);

    var ay = ((100 - ((HeightInfoG[seconds] / 66704) * 100)) - 2.5) + "%";
    var ax = (((seconds / MachInfoG.length) * 100) - 1.5) + "%";

    $(".alt-circle").css("top", ay);
    $(".alt-circle").css("left", ax);

    // would subtract some sort of offset depending on the pilot.
    //


}

*/