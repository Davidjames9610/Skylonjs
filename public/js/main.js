const chatForm = document.getElementById('chat-form');
const socket = io();
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const eng_display = document.querySelector('.eng-display');
const pilot_display = document.querySelector('.pilot-display');
const chat_display = document.querySelector('.chat-display');
const shared_display = document.querySelector('.shared-display');
const roomTime = document.getElementById('roomTime');
var role = 0;
var time = 0;




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
    }

    if (role === "Pilot") {
        pilot_display.style.display = "block";
        chat_display.style.display = "none";
        shared_display.style = "block";
    }

}

socket.on('starting', message => {
    console.log("server working");

});

socket.on('update', gameobj => {

    time = JSON.stringify(gameobj.time);
    outputTime(time);
   

});







