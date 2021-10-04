let customers = [
  {
    id: 10001,
    name: "Nithin",
    email: "nithin@gmail.com",
    balance: 5000000
  },
  {
    id: 10002,
    name: "Shanmugam",
    email: "shanmugam8@gmail.com",
    balance: 5000000
  },
  {
    id: 10003,
    name: "Nithin Shanmugam",
    email: "nithinshanmugamedu@gmail.com",
    balance: 5000000
  },
  {
    id: 10004,
    name: "Gautham Gopan",
    email: "gauthamgopan@gmail.com",
    balance: 5000000
  },
  {
    id: 10005,
    name: "Karthikeyan A",
    email: "karthi@gmail.com",
    balance: 5000000
  },
  {
    id: 10006,
    name: "Mahinder P M",
    email: "mahinderpm2001@gmail.com",
    balance: 5000000
  },
  {
    id: 10007,
    name: "Jaya Ananth",
    email: "ananth@gmail.com",
    balance: 5000000
  },
  {
    id: 10008,
    name: "Sohail",
    email: "sohail@gmail.com",
    balance: 5000000
  },
  {
    id: 10009,
    name: "hemanth",
    email: "hemanth@gmail.com",
    balance: 5000000
  },
  {
    id: 10010,
    name: "abijith",
    email: "abijith@gmail.com",
    balance: 5000000
  }
];


function addElement(){
  tbod = document.getElementById('tableBody');
  for(let i=0;i<customers.length;i++){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    td1.appendChild(document.createTextNode(customers[i].id));
    tr.appendChild(td1);
    let td2 = document.createElement('td');
    td2.appendChild(document.createTextNode(customers[i].name));
    tr.appendChild(td2);
    let td3 = document.createElement('td');
    td3.appendChild(document.createTextNode(customers[i].email));
    tr.appendChild(td3);
    let td4 = document.createElement('td');
    td4.appendChild(document.createTextNode(customers[i].balance));
    tr.appendChild(td4);
    let td5 = document.createElement('td');
    let but = document.createElement("button");
    but.classList = "btn btn-success";
    //let buttonEvent = document.querySelector(button);
    //buttonEvent.onClick = greet(1);
    //but.onclick(greet(i+1));
    but.appendChild(document.createTextNode("Transfer"));
    td5.appendChild(but);
    tr.appendChild(td5);
    tbod.appendChild(tr);
  }
}

var number;
function greet(num){
  global.number = num;
  console.log(num);
}

function trans(){
  let out = document.getElementById('output');
  //out.innerText = number;
  console.log(number);
}