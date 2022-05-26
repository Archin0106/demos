// new Promise((resolve, reject) => {
//     let isCompleted = true;
//     if (isCompleted) {
//         resolve('Task Completed');
//     } else {
//         reject('Error Occurred');
//     }
// }).then(msg => console.log(msg))
// .catch(err => console.log(err));

var items = ['Item1', 'Item2'];
const AddItem = (item) => {
    let isCompleted = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isCompleted) {
                items.push(item);
                return resolve();
            }
            else {
                return reject('Error Occurred');
            }
        }, 2000);
    });
}

const GetItems = () => {
    items.map(item => {
        console.log(item);
    });
}

// AddItem('Item3').then(data => GetItems()).catch(err => console.log(err));
const ExecuteTasks = async () => {
    await AddItem('Item3').catch(err => console.log(err));
    GetItems();
}

ExecuteTasks();