// spotlights.js
const numCircles = 3;
const colors = ['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)'];
const body = document.body;

function createCircle(idx){
  const c = document.createElement('div');
  c.className='spotlight';
  c.style.background=colors[idx % colors.length];
  body.appendChild(c);
  // initial position
  const init = randomPos();
  c.style.transform = `translate(${init.x}px,${init.y}px)`;
  animate(c);
}

function randomPos(){
  const w = window.innerWidth;
  const h = window.innerHeight;
  return {
    x: Math.random()*w,
    y: Math.random()*h
  };
}

// Simple physics: each circle has a velocity; we update its position every frame
const circles = [];
function createCircle(idx){
  const c = document.createElement('div');
  c.className='spotlight';
  c.style.background=colors[idx % colors.length];
  body.appendChild(c);
  const pos = randomPos();
  const vel = {x: (Math.random()-0.5)*4, y: (Math.random()-0.5)*4};
  circles.push({el:c, pos, vel});
}
function update(){
  const w = window.innerWidth;
  const h = window.innerHeight;
  circles.forEach(c=>{
    // update position
    c.pos.x += c.vel.x;
    c.pos.y += c.vel.y;
    // bounce on edges
    if(c.pos.x<0||c.pos.x>w){c.vel.x*=-1;}
    if(c.pos.y<0||c.pos.y>h){c.vel.y*=-1;}
    c.el.style.transform = `translate(${c.pos.x}px,${c.pos.y}px)`;
  });
  requestAnimationFrame(update);
}
requestAnimationFrame(update);

for(let i=0;i<numCircles;i++) createCircle(i);