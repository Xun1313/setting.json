/* TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app */

// Your web app's Firebase configuration
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


const path = firebase.database().ref('/drink/green_tea/price')
const home = firebase.database().ref()
//const path2 = firebase.database().ref('/drink/green_tea').child('/price')

/* home.once('value', snapshot => {
  document.querySelector('pre').textContent = JSON.stringify(snapshot.val(),null,3);
}); */

/* path.on('value',(snapshot)=>{
  console.log(snapshot.val());
  //document.querySelector('p').textContent = snapshot.val();
}) */
//path.push({content:123})

/* var kao = [
  {
    father: 'Tom',
    age: 30,
  },
  {
    father: 'John',
    age: 35,
  },
]; */
/* var todos = {
  num1: {
    content: '123',
  },
  num2: {
    content: '456',
  },
}; */

/* for (const key in todos) {
  console.log(todos[key].content);
} */
/* for (const key of kao) {
  console.log(key.father);
} */
/* kao.forEach(element => {
  console.log(element.father);
}); */

const txt = document.querySelector('#txt')
const send = document.querySelector('#btn')
const list = document.querySelector('#list')

const todos = firebase.database().ref('/todos')

send.addEventListener('click', e => {
  todos.push({ content: txt.value })
  txt.value=''
})

todos.on('value', snapshot => {
  let arr=[]
  snapshot.forEach(e => {
    arr.push({ key: e.key, content: e.val() })
  })
  arr.reverse()
  console.log(arr);
  let html=''
  arr.forEach(e => {
    html += `<li data-key='${e.key}'>${e.content.content}</li>`
  });
  list.innerHTML = html
})

//只要改資料就好
/* list.addEventListener('dblclick',e=>{
  if (e.target.nodeName==='LI') {
    todos.child(e.target.dataset.key).remove()
  }
}) */
var people = {
  mike: {
    length: 12.5,
    weight: 5000,
  },
  casper: {
    length: 9,
    weight: 4500,
  },
  bob: {
    length: false,
    weight: 3500,
  },
  john: {
    length: 9,
    weight: 3500,
  },
  josh: {
    length: 9,
    weight: 2500,
  },
}


/* firebase.database().ref('people').set(people)
var portfolioRef = firebase.database().ref('people')
portfolioRef.orderByChild('height').once('value', snap => {
  snap.forEach(element => {
    console.log(element.val())
  })
}) */

/* firebase.database().ref('people').set(people)
var portfolioRef = firebase.database().ref('people')
portfolioRef.orderByChild('weight').startAt(3400).limitToLast(1).once('value', snap => {
  snap.forEach(element => {
    console.log(element.key)
    console.log(element.val())
  })
}) */

/* document.querySelector('.senddd').addEventListener('click',()=>{
  console.log(new Date(document.querySelector('.time').value))
}) */