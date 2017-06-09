var userSubmit = document.querySelector('#user-submit');
var toDoList = document.querySelector('#to-do-list');

function addToDo(event){
  event.preventDefault();

  var userInput = document.querySelector('#user-input');

  if(userInput.value === ''){
    return false;
  }

  // toDoList.innerHTML += '<li>' + userInput.value + '</li>';
  toDoList.innerHTML = '<li>' + userInput.value + '<i class="fa fa-window-close close-to-do" aria-hidden="true"></i></li>' + toDoList.innerHTML;

  userInput.value = '';
}

function removeToDo(event) {
  if (event.target.classList.contains('close-to-do')){
    var li = event.target.parentElement;
    toDoList.removeChild(li);
  }
}


userSubmit.addEventListener('click', addToDo, false);
toDoList.addEventListener('click', removeToDo, false);
