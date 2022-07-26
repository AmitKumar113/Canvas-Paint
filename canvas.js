const canvas = document.querySelector('#draw');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight*0.8;

  ctx.strokeStyle = '#BADA55';
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = 30;

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;
  let saturation = 100;
  let lightness = 50;
//   let lastWidth

  function draw(e){
    if(!isDrawing) return;
    ctx.beginPath();
    ctx.strokeStyle = `hsl(${hue} , ${saturation}% , ${lightness}%)`;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX,lastY] = [e.offsetX,e.offsetY];
  }
  
  // function
  canvas.addEventListener('mousemove',draw);
  canvas.addEventListener('mouseup',()=>{isDrawing=false});
  canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
    [lastX,lastY] = [e.offsetX,e.offsetY];});
  canvas.addEventListener('mouseout',()=>{isDrawing=false});
  const colors = document.querySelectorAll('.color');
  const collection = document.querySelectorAll('.color');
  const allElements = document.querySelectorAll('.color');
  
  function setHue(e){
              const element = document.elementFromPoint(e.clientX,e.clientY);
              if(element.classList.contains('color1')) {hue=18*1; saturation=100; lightness=50;}
              else if(element.classList.contains('color2')) {hue=18*2; saturation=100; lightness=50;}
              else if(element.classList.contains('color3')) {hue=18*3; saturation=100; lightness=50;}
              else if(element.classList.contains('color4')) {hue=18*4; saturation=100; lightness=50;}
              else if(element.classList.contains('color5')) {hue=18*5; saturation=100; lightness=50;}
              else if(element.classList.contains('color6')) {hue=18*6; saturation=100; lightness=50;}
              else if(element.classList.contains('color7')) {hue=18*7; saturation=100; lightness=50;}
              else if(element.classList.contains('color8')) {hue=18*8; saturation=100; lightness=50;}
              else if(element.classList.contains('color9')) {hue=18*9; saturation=100; lightness=50;}
              else if(element.classList.contains('color10')){hue=18*10; saturation=100; lightness=50;}
              else if(element.classList.contains('color11')) {hue=18*11; saturation=100; lightness=50;}
              else if(element.classList.contains('color12')) {hue=18*12; saturation=100; lightness=50;}
              else if(element.classList.contains('color13')) {hue=18*13; saturation=100; lightness=50;}
              else if(element.classList.contains('color14')) {hue=18*14; saturation=100; lightness=50;}
              else if(element.classList.contains('color15')) {hue=18*15; saturation=100; lightness=50;}
              else if(element.classList.contains('color16')) {hue=18*16; saturation=100; lightness=50;}
              else if(element.classList.contains('color17')) {hue=18*17; saturation=100; lightness=50;}
              else if(element.classList.contains('color18')) {hue=18*18; saturation=100; lightness=50;}
              else if(element.classList.contains('color19')) {hue=18*19; saturation=100; lightness=50;}
              else if(element.classList.contains('color20')){hue=18*20; saturation=100; lightness=50;}
            };

function setWidth(){
  ctx.lineWidth= this.value;
}

function eraser(){
  const width = document.querySelector('#widthBar').value;
  ctx.lineWidth = width;
  lightness = 100; }
  
  function pencil(){
      lightness = 0;
      ctx.lineWidth = 1; }
      
      function marker(){
          lightness = 50;
          const width = document.querySelector('#widthBar').value;
          ctx.lineWidth = width;}

       function clearPage(){
         console.log('clear');
         ctx.clearRect(0,0,canvas.width, canvas.height);
       }   

const features = document.querySelectorAll('.box');
function selectedFeature(){
  // console.log('hlw');
  features.forEach((e)=>{e.style.backgroundColor = "white"});
  this.style.backgroundColor = "tomato";
}

function selectedcolor(e){
  console.log('hlw');
  colors.forEach((e)=>{e.style.boxShadow = "2px 3px"});
  // this.style.borderColor ="red";
  this.style.boxShadow ="2px 3px 10px #87CEEB";
  // this.style.backgroundColor = "tomato";
}

  colors.forEach(color=>color.addEventListener('click',setHue));
  
  for(let i=0;i<collection.length; i++){
    collection[i].style.backgroundColor = `hsl(${18*(i+1)} , 100% , 50%)`;
  }

  const bar = document.getElementById('widthBar');
  const pencilDiv = document.querySelector('.pencil');
  const eraserDiv = document.querySelector('.eraser');
  const markerDiv = document.querySelector('.marker');
  const clearDiv = document.querySelector('.clear');
  bar.addEventListener('change',setWidth);
  pencilDiv.addEventListener('click',pencil);
  eraserDiv.addEventListener('click',eraser);
  markerDiv.addEventListener('click',marker);
  clearDiv.addEventListener('click',clearPage);
  features.forEach(box => box.addEventListener('click',selectedFeature));
  colors.forEach(color => color.addEventListener('click',selectedcolor));
