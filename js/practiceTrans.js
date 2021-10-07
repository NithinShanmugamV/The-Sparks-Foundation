/*var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var customers = JSON.parse(xhttp.responseText);
    }
    var form = document.getElementById('addForm');
    var btn = document.getElementById('submitbtn');
    form.addEventListener('submit',trans);
    const xhrButtonSuccess = document.querySelector('.xhr.success');
    function handleEvent(e) {
        e.preventDefault();
        console.log(1);
    
    }
    function addListeners(xhr) {
        xhr.addEventListener('submit', handleEvent);
        
    }
    function runXHR(url) {
        const xhr = new XMLHttpRequest();
        addListeners(xhr);
        xhr.open("GET", url);
        xhr.send();
        return xhr;
    }
    xhrButtonSuccess.addEventListener('click', () => {
        console.log('Hi');
    });
    function trans(event){
        event.preventDefault();
        console.log(1);
    }
    function transfer(){
        var acc1 = document.getElementById('item1').value;
        var amount = document.getElementById('item2').value;
        var acc2 = document.getElementById('item3').value;
        console.log(acc1,acc2,amount);
        for(let i=0;i<customers.length;i++){
            if(customers[i].id == acc1) {
              if((customers[i].balance - amount) > 2000){
                var myKey = balance;
                customers[i][myKey] = customers[i][myKey] - amount;
                //console.log(customers[i].id,customers[i].balance);
                //customers[i].balance = customers[i].balance - amount;
                //console.log(customers[i].id,customers[i].balance);
              }
            }
          }
          for(let i=0;i<customers.length;i++){
            if(customers[i].id == acc2) {
              var myKey = balance;
              customers[i][myKey] = customers[i][myKey] + amount;
              //customers[i].balance = customers[i].balance + amount;
              //console.log(customers[i].id,customers[i].balance);
            }
        }
        alert("Transfered");
    }
    //console.log(btn);
    var acc1 = document.getElementById('item1').value;
    var amount = document.getElementById('item2').value;
    var acc2 = document.getElementById('item3').value;
    console.log(acc1,acc2,amount);
};
xhttp.open("GET", "customers.json", true);
xhttp.send();
customers = xhttp.responseText;
console.log(customers);


*/

//Checkpoint
/*
const xhrButtonSuccess = document.querySelector('.xhr.success');

function handleEvent(e) {
    e.preventDefault();
    console.log(1);
}

function addListeners(xhr) {
    xhr.addEventListener('submit', handleEvent);
}

function runXHR(url) {
    const xhr = new XMLHttpRequest();
    addListeners(xhr);
    xhr.open("GET", url);
    xhr.send();
    return xhr;
}

xhrButtonSuccess.addEventListener('click', () => {
    console.log('hi');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var customers = JSON.parse(xhttp.responseText);
            //Object.defineProperties()
            console.log(customers);
            var acc1 = document.getElementById('item1').value;
            var amount = document.getElementById('item2').value;
            var acc2 = document.getElementById('item3').value;
            console.log(acc1,acc2,amount);
            for(let i=0;i<customers.length;i++){
                if(customers[i].id == acc1) {
                    if((customers[i].balance - amount) > 2000){
                        var myKey = "balance";
                        customers[i][myKey] = customers[i][myKey] - amount;
                        console.log(customers[i].id,customers[i].balance);
                        //customers[i].balance = customers[i].balance - amount;
                        //console.log(customers[i].id,customers[i].balance);
                    }
                }
            }
            for(let i=0;i<customers.length;i++){
                if(customers[i].id == acc2) {
                    var myKey = "balance";
                    customers[i][myKey] = customers[i][myKey] + amount;
                    //customers[i].balance = customers[i].balance + amount;
                    //console.log(customers[i].id,customers[i].balance);
                }
            }
            console.log(customers);
            alert("Transfered");
            
        }
    };
    xhttp.open("GET", "customers.json", true);
    xhttp.send();
});
*/
//checkpoint

var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var customers = JSON.parse(xhttp.responseText);
            //Object.defineProperties()
            console.log(customers);
            
            var btn = document.getElementById('submitbtn');
            btn.addEventListener('click',output);
            function output(e){
                e.preventDefault();
                console.log('hello there');
                var acc1 = document.getElementById('item1').value;
                var amount = document.getElementById('item2').value;
                var acc2 = document.getElementById('item3').value;
                console.log(acc1,acc2,amount);
                for(let i=0;i<customers.length;i++){
                    if(customers[i].id == acc1) {
                        if((customers[i].balance - amount) > 2000){
                            var myKey = "balance";
                            customers[i][myKey] = customers[i][myKey] - amount;
                            console.log(customers[i].id,customers[i].balance);
                            //customers[i].balance = customers[i].balance - amount;
                            //console.log(customers[i].id,customers[i].balance);
                        }
                    }
                }
                for(let i=0;i<customers.length;i++){
                    if(customers[i].id == acc2) {
                        var myKey = "balance";
                        customers[i][myKey] = customers[i][myKey] + amount;
                        //customers[i].balance = customers[i].balance + amount;
                        //console.log(customers[i].id,customers[i].balance);
                    }
                }
                console.log(customers);
                alert("Transfered");
                let customersJson = JSON.stringify(customers);
            }   
            
        }
    };
    xhttp.open("GET", "/js/customers.json", true);
    xhttp.send();