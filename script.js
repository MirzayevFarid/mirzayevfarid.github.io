const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Farid Mirzayev. I’m a 21 yr old, currently living in Turkey",
  skills:
    '<span class="code">Languages:</span> Java, C/C++, JavaScript, Dart<br><span class="code">Technologies:</span> Flutter, Android, HTML/CSS, React, MySql, Firebase, Git/Github, Sketch, AdobeXD',
  education:
    "Bilkent University, Turkey<br>Bachelor's Degree — Computer Science",
  resume: "<a href='https://github.com/MirzayevFarid/1A-SS/files/4314944/MirzayevFaridCV.pdf' class='success link'>resume.pdf</a>",
  experience: '<p>Radity</p><p>Oct 2019 &ndash; Jan 2020 &nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp; Zurich,&nbsp; Switzerland</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Worked on a project with 3K+ downloads&nbsp;</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Coordinated with 6 senior software engineers</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Developed a cross platform mobile app using Flutter, Firebase and Algolia</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Added a location sensitive language support to the app</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Fixed multiple bugs that were creating bottleneck for the project</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Took full lead of the project after 2 months of an introductory period</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Reported progress directly to senior management on a weekly basis</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Ultralab</p><p>Feb 2019 &ndash; May 2019 &nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp; Ankara, Turkey</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Developed an android application using Java, Android and Firebase</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Teamed up with 6 software engineers</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Set up a system to handle data coming from a medical device</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Analyzed SDK to connect hardware and software via Bluetooth</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Created a data visualization system to deliver images representing data</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Bilkent Mechanical Engineering Society</p><p>Sep 2018 &ndash; May 2019 &nbsp;&nbsp; &nbsp;|&nbsp;&nbsp; &nbsp; Ankara, Turkey</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Worked within an engineering team of 12&nbsp;</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Led the software sub-team consisting of 5 people</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Incorporated an image processing software into a robot</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Used YOLO - Deep Learning library to do real time object detection</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Facilitated communication between Arduino and Raspberry-Pi</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>Projects</p><p>◇&nbsp;&nbsp; &nbsp;Done&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;| &nbsp;&nbsp; &nbsp;Aug 2019 &ndash; Sep 2019</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Developed a cross platform to-do list app using Flutter</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Configured a database system using Firebase and Firestore</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Built&nbsp;a notification system for reminding tasks&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>◇&nbsp;&nbsp; &nbsp;Callist &nbsp;&nbsp; &nbsp;| &nbsp;&nbsp; &nbsp;Sep 2018 &ndash; Jan 2019</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Developed a calendar app for desktop using Java, JavaFX and Jfoenix</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Worked with a team of 5 people</p><p>&nbsp;&nbsp; &nbsp;▶&nbsp;&nbsp; &nbsp;Set up a MySql database system to store user&#39;s data</p>',
  contact:
    "You can contact me on any of following links:<br><a href='https://www.linkedin.com/in/faridmirzayev/' class='success link'>LinkedIn</a>,  <a href='https://www.instagram.com/feridmrzyv/' class='success link'>Instagram</a>, <a href='https://www.facebook.com/profile.php?id=100009398548445' class='success link'>Facebook</a>",
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
    }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);