const fadeOut = () => {
  const loader = document.querySelector('.full');
  setTimeout(fadefun, 3800);
  function fadefun(){
    loader.classList.add('fade');
  }
}

window.addEventListener('load', fadeOut);


const update_bar = document.querySelector('.progress_bar');
console.log(update_bar);

function update() {
  update_bar.style.width = `${((window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100)}%`
  requestAnimationFrame(update)
}
update();
// scroll top button code
const scroll = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};

const box = document.getElementById("box");
let lines = ["Programmer.", "Web Developer.", "BCA Student"];
//computer science engineering
//software developer
//web/app developer 
// open source contributor 
let i = 0,
  j = 0,
  wait = 6;
setInterval(() => {
  if (wait-- > 0) return;
  if (wait == -1) box.innerHTML = "";
  if (i < lines.length)
    if (j < lines[i].length)
      box.innerHTML += lines[i][j++];
    else
      wait = 8, j = 0, i++;
  else
    wait = 8, i = j = 0;
}, 50);

let sections = document.querySelectorAll('.sect');
window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 180;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animation');
     }
    // else {
    //   sec.classList.remove('show-animation');
    // }
  })
}

function resume() {
  alert("Resume not uploaded yet.");
}
// function contact() {
//   alert("Error!! Please Click on email and connect with us.");
// }

let cnt_from = document.getElementById('cnt_from'),
from_btn = document.getElementById('from_btn'),
from_msg = document.querySelector('.msg_container'),
show_from_btn = document.getElementById('show_from_btn'),
counter = 4;

from_msg.style.display="none";

function show_msg(){
  from.style.display="none";
  from_msg.style.display="flex";
  let timeout = setInterval(()=>{
    show_from_btn.innerText = counter;
    counter--;
  },1000);
  setTimeout(()=>{
    clearInterval(timeout);
    show_from_btn.innerText = "OK";
    cnt_from.reset();
  },5000)
}
cnt_from.addEventListener("click",()=>{
  show_msg();
})

function show_from(){
  from.style.display="block";
  from_msg.style.display="none";
}

document.querySelector("#click").onclick = scroll
let CopyRigthYear = document.getElementById('year');
CopyRigthYear.textContent = new Date().getFullYear();
