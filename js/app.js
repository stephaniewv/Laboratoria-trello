window.addEventListener('load', begin);

var addList = document.getElementById('addList');
var form = document.getElementById('form');
var listName = document.getElementById('name-list');
var button = document.getElementById('button-id');

function newList(event) {
  event.target.classList.toggle('display-none');
  form.classList.toggle('display-none');
}

function createList(event) {
  event.preventDefault();

  if(listName.value) {
    form.classList.toggle('display-none');

    var title = listName.value.toUpperCase();
    var titleElement = document.createElement('div');

    titleElement.textContent = title;

    form.parentElement.insertBefore(titleElement, form);

    var link = document.createElement("a");
    link.setAttribute("href", "#");

    var linkText = document.createTextNode("Añadir una tarea...");
    link.appendChild(linkText);

    link.addEventListener("click", newTask);
    titleElement.parentElement.appendChild(link);

    var containerRight = document.createElement('div');
    containerRight.classList.add('container-form');
    form.parentElement.parentElement.appendChild(containerRight);
    containerRight.appendChild(addList);
    addList.classList.toggle('display-none');

    containerRight.insertBefore(form, containerRight.firstElementChild);

    listName.value = '';
  }
}

function newTask(event) {
  event.preventDefault();

  // oculta el link
  event.target.classList.toggle('display-none');

  var subForm = document.createElement('form');
  event.target.parentElement.appendChild(subForm);

  var taskName = document.createElement('textarea');
  taskName.classList.add('name-list');
  subForm.appendChild(taskName);

  var taskBtn = document.createElement('button');
  taskBtn.setAttribute('type', 'submit');
  taskBtn.textContent = 'Añadir';
  taskBtn.classList.add('button-id');
  taskBtn.disabled = true;

  taskName.addEventListener('keyup', enableButton);

  subForm.appendChild(taskBtn);

  taskName.focus();

  taskBtn.addEventListener('click', createTask);
}

function enableButton(event) {
  var text = event.target.value.trim();

  if(text.legth)
    event.target.nextElementSibling.disabled = true;
  else
  event.target.nextElementSibling.disabled = false;
}

function createTask(event) {
  event.preventDefault();

  var textDiv = event.target.previousSibling.value.trim();
  var div = document.createElement('div');

  div.textContent = textDiv;

  var parentButton = event.target.parentElement;
  
  parentButton.classList.toggle('display-none');  
  parentButton.parentElement.appendChild(div);

  div.parentElement.appendChild(parentButton.previousElementSibling);

  // muestra el link, para desplegar el formulario
  parentButton.parentElement.lastElementChild.classList.toggle('display-none');
}

function begin() {
  addList.addEventListener('click', newList);
  button.addEventListener('click', createList);
}
