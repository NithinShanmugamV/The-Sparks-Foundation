console.log("Hello");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var customers = JSON.parse(xhttp.responseText);
       console.log(customers[0].id);
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
          tbod.appendChild(tr);
        }
    }
};
xhttp.open("GET", "/js/customers.json", true);
xhttp.send();
customers = xhttp.responseText;
console.log(customers);