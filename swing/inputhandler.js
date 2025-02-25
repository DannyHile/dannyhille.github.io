window.mouse??=[0,0,0];
window.keys??={};
const clamp = (n, low, high) => Math.max(Math.min(n, high), low);

onkeydown=e=>window.keys[e.code]=1;
onkeyup=e=>delete window.keys[e.code];


onpointerdown=ontouchstart=e=>{
  e.preventDefault();
  window.mouse[2]=1;
};
onpointerup=ontouchend=e=>window.mouse[2]=0;
onpointermove=ontouchmove=e=>{
  e.preventDefault();
  const cor = canvas.getBoundingClientRect();
  const {x,y} = (e.touches&&e.touches[0])||e;
  //const scaleX = cor.width/canvas.width;
  //const scaleY = cor.height/canvas.height;
  window.mouse[0] = x;
  window.mouse[1] = y;
};