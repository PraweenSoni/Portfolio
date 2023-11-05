const fadeOut = () => {
  const loader = document.querySelector('.full');
  setTimeout(fadefun, 3800);
  function fadefun(){
    loader.classList.add('fade');
  }
}

//window.addEventListener('load', fadeOut);


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
let lines = ["Programmer.", "Youtuber.", "Web Developer.", "Open source contributor."];
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

document.querySelector("#click").onclick = scroll
let CopyRigthYear = document.getElementById('year');
CopyRigthYear.textContent = new Date().getFullYear();
