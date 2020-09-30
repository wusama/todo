document.addEventListener('DOMContentLoaded', init)//等待网页加载完，执行init（initialization随便起的）方法
function init() {
    var numberElements = document.getElementsByClassName('number')
    // console.log(one)
    for (var i = 0; i < numberElements.length; i++) {
        var numberElement = numberElements[i];
        numberElement.addEventListener('click', getnumber)
    }

    document.getElementById('ac').addEventListener('click', emptyNumber)
    // 上面这行 等于 下面两行
    // var aaa= document.getElementById('ac');
    // aaa.addEventListener('click', emptyNumber)
}
function getnumber() {
    // 
    var dispalyElement = document.getElementById('value');
    var currentValue = dispalyElement.innerText;

    var clickValue = this.innerText;
    if (currentValue == '0' && clickValue != '.') {
        currentValue = ''
    }
    dispalyElement.innerText = currentValue + clickValue;
    console.log(dispalyElement);

}

function emptyNumber(){
    var dispalyElement = document.getElementById('value');
    dispalyElement.innerText = '0';
}
