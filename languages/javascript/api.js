let array=[
    {
      "userId": 1,
      "id": 1,
      "title": "mobile",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "laptop",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "headset",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "bluetooth",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "charger",
      "completed": false}]
      
let array2=JSON.parse(JSON.stringify(array))
array.map((element)=>{
    let h1=document.createElement('h1')
    h1.innerHTML=element.title;
    let div=document.getElementById('root')
    div.appendChild(h1)
})