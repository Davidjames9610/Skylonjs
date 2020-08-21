const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

import screenObject from './screenObject.js';
import engineerObject from './engineerObject.js';
import pilotObject from './pilotObject.js';

var myScreen = new screenObject(screen.width, screen.height);
var myEngineerObject = new engineerObject(socket);
var myPilotObject = new pilotObject;

//local variables
var roll = "null";
var currentTime = 0;



$(document).ready(function () {

    serverCommunication();
    setSizeofDom();
    setButtonsUp();

});


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
    socket.on('update', () => {

        if (roll == "Pilot") {
            myPilotObject.fpsUpdate();
        } 

    });

    socket.on('time-jump', time_jump => {

        myEngineerObject.updatefuel2(time_jump)
        console.log(time_jump);
        //time jump

    });


    socket.on('Timeupdate', gameobj => {

        // this will be called from the server every second

        currentTime = JSON.stringify(gameobj);
        $(".game-timer").html(currentTime);


        //update the correct role only

        if (roll == "Pilot") {
            myPilotObject.secondUpdate(currentTime);
        } else if (roll == "Engineer") {
            myEngineerObject.update(currentTime);
        }

        //end the game if the time is above 870 seconds 

        if (currentTime >= 870) {
            //generate server message // is this working for the pilot at the moment?
            socket.emit('time-end');
        }

    });

    socket.on('end-event', () => {

        //display a new screen, overlay the previous screen;
        console.log("end-event");
        //working so far
        $(".end-container").css("display", "block");
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
            console.log("The font size if 22px");

        } else if ((2048 > width) && (width >= 1920)) {
            fontBody.css("font-size", "20px");
            $(".fontbutton").html("the font size is 20px");
            console.log("The font size if 20px");

        } else if ((1920 > width) && (width >= 1856)) {
            fontBody.css("font-size", "16px");
            $(".fontbutton").html("the font size is 16px");
            console.log("The font size if 16px");

        } else if ((1856 > width) && (width >= 1200)) {
            fontBody.css("font-size", "14px");
            $(".fontbutton").html("the font size is 14px");
            console.log("The font size if 14px");
            $(".GameButtton").css("font-size", "14px");
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
            //myeng.loadEngineer();
            myEngineerObject.load();

        } else if (roll == "Pilot") {
            $(".chat-container").css("display", "none");
            $(".pilot-container").css("display", "block");

            myPilotObject.load();
            //loadPilotdisplay()
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


    // consider moving this code into respective roles?

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

    //navigation within game-end display 
    $(".end-footer").on("click", () => {

        //disconnect 
        console.log("the game has ended, disconnect now ")
        window.location.href = "index.html";

    })





}

