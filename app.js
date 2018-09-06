
require("./css/sixpage.scss");



let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlDom = document.getElementsByTagName('html')[0];
console.log(htmlWidth);
if (htmlWidth >=1024) {
	htmlDom.style.fontSize = 102.4 + 'px';
}else {
	htmlDom.style.fontSize = htmlWidth / 10 + 'px';
}



window.addEventListener('resize',(e) => {

	let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;

	htmlDOM.style.fontSize = htmlWidth / 10 + 'px';
})





