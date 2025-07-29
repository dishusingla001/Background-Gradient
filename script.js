let btn1 = document.getElementById('mybutton');
let btn2 = document.getElementById('mybutton1');

let copycode = document.querySelector('.copycode');

var hex1 = "#000";
var hex2 = "#fff";

const hexvalue = () => {
  let myhexvalue = "0123456789abcdef";
  let hex1 = "#";
  for(let i=0;i<6;i++){
    let newNum = Math.floor(Math.random() * 16);
    hex1+=`${myhexvalue[newNum]}`;
    
  }
  return (hex1);
};
const handlebutton1 = () => {
  hex1 = hexvalue();
  btn1.innerText = `${hex1}`;

  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  copycode.innerText = `background-color: linear-gradient(to right, ${hex1}, ${hex2}) `;
};

const handlebutton2 = () => {
  hex2 = hexvalue();
  console.log(hex2);
  btn2.innerText = `${hex2}`;
  
  document.body.style.backgroundImage = `linear-gradient(to right, ${hex1}, ${hex2})`;
  copycode.innerText = `background-color: linear-gradient(to right, ${hex1}, ${hex2})`;
};

btn1.addEventListener('click',handlebutton1);
btn2.addEventListener('click',handlebutton2);

copycode.addEventListener('click',()=>{
  let text = copycode.innerText;
  console.log(text);
  navigator.clipboard.writeText(text);
  alert("Copy to Clipboard");
})