console.log('yunxingle');
document.addEventListener('DOMContentLoaded', function () {
  var loginBtn = document.getElementById('login');
  loginBtn.addEventListener('click', function () {
    var userInput = document.getElementById('user');
    var passwordInput = document.getElementById('pwd');
    var user = userInput.value;
    var password = passwordInput.value;
    post('/api/login', { user, password }, function (data) {
      if (data.succeed) {

      } else if (data.userNotExist) {

      }
    });

    post('/api/my-info', {}, function (data) {

    });

  });
});

function post(url, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(JSON.parse(this.responseText));
    }
  };
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.send(data);
  // xhr.open("", url, true);
  // xhr.send();
}
