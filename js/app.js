window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var nameList = document.getElementById('name-list');
var button = document.getElementById('button-id');

function newList(event) {
  event.target.classList.toggle('display-none');
  form.classList.toggle('display-none');
}

function createList(event) {
  event.preventDefault();

  if(nameList.value) {
    form.classList.toggle('display-none');

    var title = nameList.value.toUpperCase();
    var titleElement = document.createElement('div');

    titleElement.textContent = title;

    form.parentElement.insertBefore(titleElement, form);

    var link = document.createElement("a");
    link.setAttribute("href", "#");

    var linkText = document.createTextNode("Añadir una tarea...");
    link.appendChild(linkText);

    /* link.addEventListener("click", createCard); */
    titleElement.parentElement.appendChild(link);
  }
}

function begin() {
  addList.addEventListener('click', newList);
  button.addEventListener('click', createList);
}
