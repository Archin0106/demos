// const AddItem = () => {
//     let text = document.getElementById('txt1').value;
//     const li = document.createElement('li');
//     li.className = 'list-group-item';
//     li.innerHTML = text;
//     const list = document.getElementById('list1');
//     list.appendChild(li);
// }
let items = [];
const AddItem = () => {
    let list = document.getElementById('list1');
    let text = document.getElementById('txt1').value;
    items.push(text);
    list.innerHTML += `<li class="list-group-item">${text} <i class="fa-solid fa-trash-can float-end text-danger" onclick="DeleteItem('${text}')"></i></li>`;
}

const DeleteItem = (item) => {
    let i = items.indexOf(item);
    let list = document.getElementById('list1');
    items.splice(i, 1);
    list.innerHTML = '';
    for (const x of items) {
        list.innerHTML += `<li class="list-group-item">${x} <i class="fa-solid fa-trash-can float-end text-danger" onclick="DeleteItem('${x}')"></i></li>`;
    }
}