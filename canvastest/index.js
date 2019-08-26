const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');

//fill填滿
ctx.fillStyle = 'red';
ctx.globalAlpha = 0.5;
ctx.fillRect(50, 50, 100, 100);

ctx.globalAlpha = 1;

//stroke描邊
ctx.strokeStyle = 'blue';
ctx.strokeRect(200, 200, 50, 50);

//path路徑
ctx.beginPath()//一定要給個開始
ctx.moveTo(200,100)//畫面一加載要先從哪裡開始
ctx.lineTo(300,300)//從moveTo移到這裡
ctx.closePath()//一定要給個結束
ctx.stroke()//或是ctx.fill()

//多邊形
ctx.beginPath()
ctx.moveTo(300,300)
ctx.lineTo(400,350)
ctx.lineTo(250,400)//可以直接連到下一個
ctx.closePath()
ctx.fill()
//只要兩條線,最後會連到起始點moveTo的地方