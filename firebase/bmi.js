var firebaseConfig = {
  apiKey: 'AIzaSyD1MLqcx_N4ARUYLCyPqTUKfcJ4CXUpXiI',
  authDomain: 'myproject-955e4.firebaseapp.com',
  databaseURL: 'https://myproject-955e4.firebaseio.com',
  projectId: 'myproject-955e4',
  storageBucket: 'myproject-955e4.appspot.com',
  messagingSenderId: '750802029961',
  appId: '1:750802029961:web:add0c4b48df7a167',
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const height = document.querySelector('.height')
const weight = document.querySelector('.weight')
const send = document.querySelector('.send')
const result = document.querySelector('.result')
const direction = document.querySelector('.direction')
let sort = true

const path = firebase.database().ref('bmi')
send.addEventListener('click', e => {
  const bmi = weight.value / Math.pow(height.value / 100, 2)
  path.push({ bmi: bmi })
  height.value = ''
  weight.value = ''
})

direction.addEventListener('click', e => {
  change()
})

let arr = []
path.on('value', snap => {
  let html = ''
  snap.forEach(e => {
    arr.push({ content: e.val(), key: e.key })
  })
  arr.forEach(e => {
    html += `<div data-key="${e.key}">${e.content.bmi}</div>`
  })
  result.innerHTML = html
  arr = []
})

function change() {
  path.once('value', snap => {
    let html = ''
    snap.forEach(e => {
      arr.push({ content: e.val(), key: e.key })
    })
    arr.reverse()
    arr.forEach(e => {
      html += `<div data-key="${e.key}">${e.content.bmi}</div>`
    })
    result.innerHTML = html
    arr = []
  })
}

result.addEventListener('dblclick', e => {
  path.child(e.target.dataset.key).remove()
})
