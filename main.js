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

document.querySelector("#click").onclick = scroll
let CopyRigthYear = document.getElementById('year');
CopyRigthYear.textContent = new Date().getFullYear();
