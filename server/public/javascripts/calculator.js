document.addEventListener('DOMContentLoaded', init)//等待网页加载完，执行init（initialization随便起的）方法
function init() {
    var numberElements = document.getElementsByClassName('number')//（Q：numberelements 都有哪些？0，1，2，3，4，5，6，7，8，9，. 他们的长度length是‘11’？？？）
    // 给每一个class是number的，都添加一个“click”event 事件 先触发事件，后执行方法。
    for (var i = 0; i < numberElements.length; i++) {
        var numberElement = numberElements[i];
        numberElement.addEventListener('click', getnumber)
        
        numberElements[i].addEventListener('click', getnumber)
    }

    document.getElementById('ac').addEventListener('click', emptyNumber)

    document.getElementById('x').addEventListener('change', calcTimes)
    document.getElementById('y').addEventListener('change', calcTimes)
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

function emptyNumber() {
    var dispalyElement = document.getElementById('value');
    dispalyElement.innerText = '0';
}
function calcTimes(){
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var szX = parseInt(x);
    var szY = parseInt(y);
    if(isNaN(szX) || isNaN(szY)){
        console.log('error');
        return
    }
    var result = count(szX, szY);
    document.getElementById('count').innerText = result;
}

function count(x, y) {
    return x*y;
}