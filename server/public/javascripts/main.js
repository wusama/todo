
document.addEventListener('DOMContentLoaded', init);
function loadData() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      setData(JSON.parse(this.responseText));
    }
  };
  xhr.open("GET", "/todo", true);
  xhr.send();
}

function setData(data) {
  var ul = document.getElementById('todoList');
  var liList = data.map(function (x, i) {
    var checkBox = `<input type="checkbox" ${x.done ? "checked" : ""} />`
    var text = `<span>${x.text}</span>`;
    var li = `<li>${checkBox}${text}</li>`
    return li
  }).join('')
  ul.innerHTML = liList;
}

function addEvent() {
  var submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', handleSubmitClick)
}

function handleSubmitClick() {
  var textInput = document.getElementById('todo');
  var text = textInput.value;
  send(text);
}

function send(text) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      loadData();
    }
  };
  xhr.open("POST", "/todo", true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ text }));
}

function init() {
  loadData();
  addEvent();
}