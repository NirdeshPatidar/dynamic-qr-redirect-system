let message = "Hello, welcome to AASCHARYA!";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

// 2 seconds delay before typing starts
setTimeout(typeWriter, 2000);
