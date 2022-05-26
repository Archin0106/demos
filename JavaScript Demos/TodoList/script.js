const GetItems = () => {
    fetch('http://localhost:3000/todos')
        .then(res => res.json())
        .then(data => {
            let items = '';
            data.map(item => {
                items += `<li class="list-group-item">${item.text} <i onclick="DeleteItem(${item.id})" class="fa-solid fa-trash-can text-danger float-end"></i></li>`;
            });
            document.getElementById('list1').innerHTML = items;
        });
}
GetItems();
const AddItem = () => {
    fetch('http://localhost:3000/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: document.getElementById('txtItem').value,
            isCompleted: false
        })
    }).then(res => {
        GetItems();
    })
}

const DeleteItem = (id) => {
    fetch(`http://localhost:3000/todos/${id}`,{
        method: 'DELETE'
    }).then(res =>{
        GetItems();
    })
}

