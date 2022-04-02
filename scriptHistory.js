
let names = ["first-name", "last-name", "email", "phone", "company", 'address'];

let index = localStorage.getItem('index');

let buttons_delete = document.getElementById("")

window.onload = () => {

    createNodes();

    setInterval(ifUpdate, 100);

}

function createNodes() {
    for (let i = 0; i < index; i++) {
        let array = JSON.parse(localStorage.getItem(('arrayItemsNumber' + i)));
        let divBlock = document.createElement('div');
        divBlock.classList.add('submit-history-card');
        divBlock.classList.add(i);

        for (let j in names) {
            let boldName = document.createElement('p');
            boldName.classList.add('name');
            let bold = document.createElement('b');
            let boldText = document.createTextNode(names[j][0].toUpperCase() + names[j].slice(1));
            bold.appendChild(boldText);
            boldName.appendChild(bold);
            divBlock.appendChild(boldName);

            let p = document.createElement('p');
            p.classList.add('card-' + names[j]);
            let text = document.createTextNode(array[j]);
            p.appendChild(text);
            divBlock.appendChild(p);

        }
        document.getElementById('container').appendChild(divBlock);

        let button = document.createElement('button');
        button.classList.add('delete-button');
        button.classList.add('id-' + i);
        let buttonText = document.createTextNode("Delete");
        button.appendChild(buttonText);

        divBlock.appendChild(button);
    }

    let buttons = document.getElementsByClassName('delete-button');

    for (let i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', deleteNode);

    }
}

function ifUpdate() {
    let numbersOfNodes = document.getElementsByClassName('submit-history-card').length;
    if (Number(numbersOfNodes) !== Number(index)) {
        let nodes = document.getElementsByClassName('submit-history-card');
        for (let i = 0; i < nodes.length; i++) {
            nodes[i].remove();
        }
        createNodes();
    }
}


function deleteNode(ev) {
    let deleteIndex = this.parentNode.classList[1];
    localStorage.setItem('deletedIndex', deleteIndex);
    for (let i = Number(deleteIndex); i < index; i++) {
        let next = localStorage.getItem('arrayItemsNumber' + (i + 1));
        localStorage.setItem('arrayItemsNumber' + i, next);
    }
    --index;
    localStorage.removeItem('arrayItemsNumber' + (index));
    localStorage.setItem('index', index);
    this.parentNode.remove();
}
