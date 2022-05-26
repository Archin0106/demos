const GetData = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(xhttp.responseText);
            let userlist = document.getElementById('userlist');
            let items = '';
            users.map(item => {
                items += `<li class="list-group-item">${item.name}</li>`;
            });
            userlist.innerHTML = items;
            // document.getElementById('result').innerHTML = xhttp.responseText;
        }
    }
}

const GetDataTable = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhttp.send();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var users = JSON.parse(xhttp.responseText);
            let userdata = document.getElementById('userdata');
            let items = '';
            users.map(item => {
                items += `<tr><td>${item.name}<td><td>${item.email}<td><td>${item.phone}<td><td>${item.website}<td><td>${item.company.name}<td></tr>`;
            });
            userdata.innerHTML = items;
            // document.getElementById('result').innerHTML = xhttp.responseText;
        }
    }
}