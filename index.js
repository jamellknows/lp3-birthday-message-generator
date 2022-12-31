var messages = ["Happy Birthday Star Boi!", "Happy Birthday 22", "Happy Birthday 11", "Happy Birthday Jamell", "Happy Birthday Young O'G"]

var i = messages.length;

var s = Math.floor(Math.random() * i)

document.getElementById("msg").innerHTML = `<div>" ${messages[s]} "</div>`