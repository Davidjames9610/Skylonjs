const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

import screenObject from './screenObject.js';
var myScreen = new screenObject(screen.width, screen.height);



$(document).ready(function () {

    serverCommunication();
    setSizeofDom();


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

    setSizeofFont(screen.width);
    setSizeofDomElements();
    setButtonsUp();


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

    function setButtonsUp(){



       // $(".chat-leave").on("click", () => {
        //    "index.html"
       // })



    }

    function centerObject(objectWidth, containerWidth) {
        return (containerWidth - objectWidth) / 2;
    }
}



