/*   const arr=[12,25,20,38,7]
  const arr3=[{num:2,name:'mary'},{num:5,name:'kevin'},{num:2,name:'andy'}] */
const canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
let colorDeg = 0
let lineWidth = 50
let direction = -1
ctx.strokeStyle = `hsl(${colorDeg},100%,50%)`
ctx.lineWidth = lineWidth
ctx.lineCap = 'round'
ctx.lineJoin = 'round'
let x = 0,
  y = 0
let drawing = false
canvas.addEventListener('mousedown', function(e) {
  drawing = true[(x, y)] = [e.offsetX, e.offsetY]
  console.log('mousedown')
})
canvas.addEventListener('mousemove', function(e) {
  if (!drawing) return
  ctx.beginPath()
  colorDeg = colorDeg < 360 ? colorDeg + 1 : 0
  ctx.strokeStyle = `hsl(${colorDeg},100%,50%)`

  if (lineWidth < 1 || lineWidth > 50) {
    direction *= -1
  }
  lineWidth += direction
  ctx.lineWidth = lineWidth
  ctx.moveTo(x, y)
  ctx.lineTo(e.offsetX, e.offsetY)
  ;[x, y] = [e.offsetX, e.offsetY]
  ctx.stroke()
  console.log('mousemove')
})
document.addEventListener('mouseup', function() {
  drawing = false
  console.log('mouseup')
})
/* canvas.addEventListener('mouseleave', function() {
        drawing = false
        console.log('mouseleave')
      }) */
