
require("./css/sixpage.scss");



let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];

htmlDom.style.fontSize = htmlWidth / 10 + 'px';


window.addEventListener('resize',(e) => {

	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

	htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
})





