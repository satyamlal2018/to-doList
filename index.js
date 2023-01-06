var btn1 = document.getElementById('btn');

function todoList() {
  var newElement = document.createElement('li');
  newElement.innerHTML = document.getElementById('user').value;
  document.getElementById('container').appendChild(newElement);
  document.getElementById('user').value = '';
}

btn1.addEventListener("click", todoList);
