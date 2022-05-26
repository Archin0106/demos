function AddParagraph() {
    let container = document.getElementById('container');
    let para = document.createElement('p');
    para.innerHTML = 'Welcome to JavaScript DOM';
    para.style.color = 'Red';
    container.appendChild(para);
}