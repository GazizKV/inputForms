
let index = localStorage.getItem('index');

if (index) {
    let index = Number(localStorage.getItem('index'));
} else {
    let index = 0;
    localStorage.setItem('index', index);
}

let button = document.getElementById('submit-button');

let form = document.getElementById('input-form');

let elements = form.getElementsByTagName('input');

window.onload = () => {

    for (let i = 0; i < elements.length; i++) {
        if (localStorage.hasOwnProperty(elements[i].name)) {
            elements[i].valueOf().value = localStorage.getItem(elements[i].name);
        }
    }

    for (let i = 0; i < elements.length; i++) {
        elements[i].oninput = function () {
            localStorage.setItem(elements[i].name, elements[i].value);
        }

    }

    button.onclick = function () {
        let array = new Array(6);
        for (let i = 0; i < elements.length; i++) {
            array[i] = elements[i].value;
            elements[i].valueOf().value = "";
            localStorage.setItem(elements[i].name, "");
        }
        let JSON_Array = JSON.stringify(array);
        localStorage.setItem(('arrayItemsNumber' + index++), JSON_Array);
        localStorage.setItem('index', index);
    };

    setInterval(inputUpdate, 100);

}

function inputUpdate() {
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].valueOf().value !== localStorage.getItem(elements[i].name)) {
            elements[i].valueOf().value = localStorage.getItem(elements[i].name);
        }
    }
}
