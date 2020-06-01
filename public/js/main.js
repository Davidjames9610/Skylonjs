const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

const eng_display = document.querySelector('.eng-display');

const pilot_display = document.querySelector('.pilot-display');
const pilot_container = document.querySelector('.pil-container');
const chat_display = document.querySelector('.chat-display');
const shared_display = document.querySelector('.shared-display');

const roomTime = document.getElementById('roomTime');
let btn = document.getElementById('sizeButton');


let screenSize = document.querySelector('#screenSize');
let windowSize = document.querySelector('#windowSize ');
let contentSize = document.querySelector('#contentSize');

let eng_container = document.querySelector('.eng-container');

var role = 0;
var time = 0;

var window_width = window.innerWidth;
var window_height = window.innerHeight;


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


//------------------------------------------------------------------------------------- Output message to DOM

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

function outputTime(time) {
    roomTime.innerText = time;
}

//------------------------------------------------------------------------------------------ choose pilot or engineer

document.getElementById("pilot_select").onclick = function () { pilot_function() };

function pilot_function() {
    role = "Pilot";

    const msg = "Pilot";
    socket.emit('chatMessage', msg);

}

document.getElementById("engineer_select").onclick = function () { engineer_function() };

function engineer_function() {
    role = "Engineer";

    const msg = "Engineer";
    socket.emit('chatMessage', msg);
}


function myFunction() {

    if (role === "Engineer") {
        eng_display.style.display = "block";
        chat_display.style.display = "none";
        shared_display.style = "block";

    const msg = "Start game";
        socket.emit('startGame', msg);
        console.log(msg);

        //engContainer.width = window.innerWidth;
        //engContainer.height = window.innerHeight;

    }

    if (role === "Pilot") {
        pilot_display.style.display = "block";
        chat_display.style.display = "none";
        shared_display.style = "block";

        pilot_container.width = window.innerWidth;
        pilot_container.height = window.innerHeight;
    }

}

socket.on('starting', message => {
    console.log("server working");

});

socket.on('update', gameobj => {

    time = JSON.stringify(gameobj.time);
    outputTime(time);
   

});


btn.addEventListener('click', () => {
    screenSize.innerText = `Screen Height: ${screen.height} - Screen Width: ${screen.width}`
    windowSize.innerText = `Window Height: ${window.outerHeight} - Window Width: ${window.outerWidth}`
    contentSize.innerText = `Content Height: ${window.innerHeight} - Content Width: ${window.innerWidth}`
    console.log("button");

    console.log(eng_container.clientHeight);
    console.log(eng_container.clientWidth);

    eng_container.setAttribute("style", "display:block;width:500px");

    var width = '500px';
    var width2 = window.innerWidth + "px";
    //msg = JSON.stringify(width2);
    console.log(width2);

    eng_container.style.width = window.innerWidth + "px";
    eng_container.style.height = window.innerHeight + "px";

})



// --------------------------------------------------- insure the window size is the right size and set up the game world sizes

window.addEventListener("resize", manageWindowSize);

function manageWindowSize() {

    // 1024x768 is the smallest screen size I need to allow for

    //if ((window.innerWidth > 1024) && window.innerHeight > 768) {

        console.log("The window has been resized!");
        screenSize.innerText = `Screen Height: ${screen.height} - Screen Width: ${screen.width}`
        windowSize.innerText = `Window Height: ${window.outerHeight} - Window Width: ${window.outerWidth}`
        contentSize.innerText = `Content Height: ${window.innerHeight} - Content Width: ${window.innerWidth}`
        

        // try resizing the container elements

        //window_width = window.innerWidth;
       // window_height = window.innerHeight;

        //pilot_container.width = window.innerWidth;
        //pilot_container.height = window.innerHeight;

        //eng_container.width = window.innerWidth;
        //eng_container.height = window.innerHeight;

}

window.onload = init;
function init() {
    if (window.Event) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
    document.getElementById('cursorX').value = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    document.getElementById('cursorY').value = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}

