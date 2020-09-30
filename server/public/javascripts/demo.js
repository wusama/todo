// 等待网页加载完成后，执行 自定义的init方法
document.addEventListener('DOMContentLoaded', init)
// 当前的钱
var sum = 0
// 当前所在位置
var place = 'home';

// 自己定义的方法，当网页加载完后需要执行的方法
function init() {
    // 网页元素已加载完成

    // 在网页里面找到ID是home的标签（元素）
    var home = document.getElementById('home')
    // 给home元素添加鼠标点击事件
    // 当home被点击后执行 自定义的 handleHome 方法
    home.addEventListener('click', handleHome)
    home.addEventListener('mousedown', handleMouseDown.bind(home))


    // 在网页里面找到ID是company的标签（元素）
    var company = document.getElementById('company')
    // 给company元素添加鼠标点击事件
    // 当company被点击后执行 自定义的 handleCompany 方法
    company.addEventListener('click', handleCompany)
    company.addEventListener('mousedown', handleMouseDown.bind(company))


    // 在网页里面找到ID是bar的标签（元素）
    var bar = document.getElementById('bar')
    // 给bar元素添加鼠标点击事件
    // 当bar被点击后执行 自定义的 handleBar 方法
    bar.addEventListener('click', handleBar)
    bar.addEventListener('mousedown', handleMouseDown.bind(bar))

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
}

// 自己定义的方法，当home div被点击后需要执行的方法
function handleHome() {
    var placeEle = document.getElementById('place');
    placeEle.innerText = 'home';
    console.log('home div was clicked')
}

// 自己定义的方法，当 company div被点击后需要执行的方法
function handleCompany() {
    sum = sum + 10;
    var sumEle = document.getElementById('sum');
    sumEle.innerText = sum;

    var placeEle = document.getElementById('place');
    placeEle.innerText = 'company';
    console.log('company div was clicked')
}

// 自己定义的方法，当bar div被点击后需要执行的方法
function handleBar() {
    if (sum < 5) {
        return;
    }
    sum = sum - 5;
    var sumEle = document.getElementById('sum');
    sumEle.innerText = sum;

    var placeEle = document.getElementById('place');
    placeEle.innerText = 'bar';
    console.log('bar div was clicked')
}

var mouseDownDiv = document.body;
// var startRect = mouseDownDiv.getBoundingClientRect();
var startRect = null;
var mouseDownX = 0;
var mouseDownY = 0;

function handleMouseDown(e) {
    mouseDownX = e.clientX;
    mouseDownY = e.clientY;
    mouseDownDiv = this;
    startRect = mouseDownDiv.getBoundingClientRect();
}

function handleMouseMove(e) {
    if (!mouseDownDiv || !startRect) {
        return;
    }
    var left = e.clientX - mouseDownX;
    var top = e.clientY - mouseDownY;
    var afterX = startRect.left + left;
    if (afterX < 0) {
        afterX = 0;
    }
    var afterY = startRect.top + top;
    if (afterY < 0) {
        afterY = 0;
    }
    mouseDownDiv.style.left = afterX + 'px';
    mouseDownDiv.style.top = afterY + 'px';
}


function handleMouseUp(e) {
    if (mouseDownDiv) {
        mouseDownDiv = null
    }
    if (startRect) {
        startRect = null
    }
}









// var a=1;
// var b=2;
// var c=a+b;


// var from = 1;
// var end = 100;
// var sum = (from+end)*100/2;

// var x = 5;
// var y = 20;
// var z = (x+y)*(y-x+1)/2


// function qiuhe(start, end){
//     var sum = (start+end)*(end-start+1)/2;
//     return sum;
// }

// var result = qiuhe(1,2);
// // result