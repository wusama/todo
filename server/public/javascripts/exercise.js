/*document.addEventListener('DOMContentLoaded', init)

function init() {
    var x = times(8, 7) * 4;
    document.getElementById('demo').innerHTML = x;
}
function times(a, b) {
    return a * b;
}
*/

/*document.addEventListener('DOMContentLoaded', init)
function init() {
    setInterval(showTime, 20);
}

function showTime(){
    var now=new Date();
    var hour=now.getHours();
    var min=now.getMinutes();
    
    if(min<10){min='0'+min}
    if(second<10){second='0'+second}
    
    document.getElementById('date').innerHTML = `${hour}:${min}:${second}.${ms}`;
}
*/
/*document.addEventListener('DOMContentLoaded', init)
function init() {
    function count() {
        var x = 5;
        var y = x + 8;

        document.getElementById('count').innerHTML = y;
    }
   count();
}

document.addEventListener('DOMContentLoaded', init)
function init(){
    document.getElementById('mouseover').addEventListener('mouseover', mouseover)

}
function mouseover(){
    document.getElementById('mouseover').innerHTML="hello";
} 

document.addEventListener('DOMContentLoaded',init)
function init(){
    document.getElementById('mouseover').addEventListener('mouseover',over)
}
function over(){
    document.getElementById('mouseover').innerHTML="hello";
    document.getElementById('mouseover').style.backgroundColor="yellow";
    
}

/*document.addEventListener('DOMContentLoaded', init)
function init() {
    document.getElementById('mycount').addEventListener('mouseover', mycount)
    
}
function mycount(a, b) {
    document.getElementById('mycount').style.backgroundColor="yellow";
    var a=6;
    var b=8;
    result= a*b;
    document.getElementById('mycount').innerHTML=result;
}
//想试试 document,getElementById('mycount').innerHTML=mycount(4.6)

*/
// document.addEventListener('DOMContentLoaded',init)
// function init(){
// document.getElementById('mydate').addEventListener('click',mydate)
// }
// function mydate(){
//     document.getElementById('mydate').innerHTML=Date();
// }

// document.addEventListener('DOMContentLoaded', init)
//document.addEventListener('DOMContentLoaded', init2)
// function init() {
//     //document.getElementById('mycount').addEventListener('mouseover', setBgColorAndShowTimesResult.bind(this,4,6))
//     document.getElementById('mycount').addEventListener('mouseover', function () {
//         setBgColorAndShowTimesResult(5, 8);
//     })

// }
// function setBgColorAndShowTimesResult(a, b) {
// document.getElementById('mycount').style.backgroundColor = "yellow";
//     result = a * b;
//     document.getElementById('mycount').innerHTML = result;
// }



// function init2() {
//     var mycount = $('mycount');
//     mycount.addEventListener('mouseover', function () {
//         setBgColor(mycount, 'yellow');
//         var chngji = times(4, 9);
//         setText(mycount, chngji)
//     })

//     var divTop = $('mouseover');
//     divTop.addEventListener('mouseover', function () {
//         setBgColor(divTop, 'red');

//         setText(divTop, times(9, 9))
//     })
// }

// function mouseoverHandler() {
//     setBgColor(mycount, 'yellow');
//     var chngji = times(4, 9);
//     setText(mycount, chngji)
// }

// function $(id) {
//     return document.getElementById(id)
// }

// function setBgColor(element, color) {
//     element.style.backgroundColor = color;
// }
// function setText(element, text) {
//     element.innerHTML = text;
// }
// function times(a, b) {
//     return a * b;
// }


// var demo1 = $('demo1');
// demo1.addEventListener('mouseover', function () {
//     setBgColor(demo1, 'yellow');

//     setText(demo1, times(6, 2))

//     setBgColor(demo2, 'pink');
// })
// }
// function $(id) {
//     return document.getElementById(id);
// }
// function setBgColor(biaoqian, color) {
//     biaoqian.style.backgroundColor = color;
// }
// function setText(biaoqian, text) {
//     biaoqian.innerHTML = text;
// }
// function times(a, b) {
//     return a * b;
// }


// document.addEventListener('DOMContentLoaded', init1)
// function init1() {
//     var blocks = [
//         { id: 'demo1', bgColor: 'yellow' },
//         { id: 'demo2', bgColor: 'pink' },
//         { id: 'demo3', bgColor: 'green' },
//         { id: 'demo4', bgColor: 'red' },
//         { id: 'demo5', bgColor: 'blue' },
//     ]
// 语法
// array.forEach(function(currentValue, index, arr), thisValue)

//     blocks.forEach(function (block) {
//         var div = document.createElement('div');
//         div.id = block.id;
//         div.classList.add('block')
//         div.addEventListener('click', function (e) {
//             setBgColor(this, block.bgColor);
//             setText(this, block.bgColor)
//         });
//         document.body.appendChild(div)
//     })

// document.addEventListener('DOMContentLoaded', init)
// function init() {
//     var arr = [
//         { id: 'demo1', bgColor: 'orange' },
//         { id: 'demo2', bgColor: 'red' },
//         { id: 'demo3', bgColor: 'purple' },
//         { id: 'demo4', bgColor: 'yellow' },
//         { id: 'demo5', bgColor: 'lightblue' },
//     ]
//     //语法
//     //array.forEach(function(currentValue, index, arr), thisValue)
//     arr.forEach(doSth)

// }
// function doSth(item) {
//     var div = document.createElement('div');
//     div.id = item.id;
//     div.classList.add('block')
//     div.addEventListener('click', function (e) {
//         setBgColor(this, item.bgColor);

//     })
//     document.getElementById('blocks').appendChild(div)
// }
// function setBgColor(element,color){
//     // var a =document.body;
//     element.style.backgroundColor=color
// } 
document.addEventListener('DOMContentLoaded', inita)
document.addEventListener('DOMContentLoaded', init)
function inita() {
    var arr = [
        { id: 'demo1', BgColor: 'orange' },
        { id: 'demo2', BgColor: 'purple' },
        { id: 'demo3', BgColor: 'yellow' },
        { id: 'demo4', BgColor: 'red' },
        { id: 'demo5', BgColor: 'yellowgreen' },
    ]
    arr.forEach(function (item) {
        var divElement = document.createElement('div');
        divElement.id = item.id;
        divElement.classList.add('block')
        divElement.addEventListener('click', function (e) {
            setBgColorForElement(divElement, item.BgColor)
        })
        document.getElementById('arr').appendChild(divElement)
    })

}
function setBgColorForElement(element, color) {
    element.style.backgroundColor = color;
}



function init() {
    // 定义图片数组
    var imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => `./imgs/${x}.jpg`);
    // 创建图片列表容器div
    var listE·lement = document.createElement('div')
    listElement.classList.add('list');

    imgs.forEach(function (path) {

        var itemEle = document.createElement('div'); // 创建每个图片的div
        itemEle.classList.add('item');
        
        itemEle.addEventListener('click', handleSelect) // 给图片容器div添加click事件、】
        function handleSelect() {
            var selected = itemEle.classList.contains('selected');
            if (selected) {
                itemEle.classList.remove('selected')
            } else {
                itemEle.classList.add('selected')
            }
        }

        var img = document.createElement('img');// 创建 图片 标签
        img.src = path; // 设置 图片标签的图片地址

        itemEle.appendChild(img);// 将 图片 放入 图片容器
        listElement.appendChild(itemEle)// 将所有图片容器放入列表容器
    })
    // 将列表容器放入body
    document.body.appendChild(listElement)
    var btnCon = document.createElement('div')
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = '提交'
    btn.addEventListener('click', function () {
        var selectedDivs = listElement.getElementsByClassName('selected');
        var srcs = []
        Array.from(selectedDivs).map(x => x.firstElementChild.src)
        var selectedImgs = srcs.map(x => x.split('/').pop())
        console.log(selectedImgs) //selectedImgs就是当前被选择的图片
    })
    btnCon.appendChild(btn)
    document.body.appendChild(btnCon)

}
// css float排列图片，添加selected类的边框css
document.addEventListener('DOMContentLoaded', initImg)
function initImg() {
    // 把所有img加上click方法
    var elementImgs = document.getElementsByClassName('image');

    Array.from(elementImgs).forEach(function (img) {
        img.addEventListener('click', function () {
            var have = img.classList.contains('selected')
            if (have) {
                img.classList.remove('selected')
            } else {
                img.classList.add('selected')
            }
        })
    })

}


function init() {
    // 定义图片数组
    var imgs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => `./imgs/${x}.jpg`);
    // 创建图片列表容器div
    var listElement = document.createElement('div')
    listElement.classList.add('list');

    imgs.forEach(function (path) {

        var img = document.createElement('img');// 创建 图片 标签
        img.src = path; // 设置 图片标签的图片地址

        var itemEle = document.createElement('div'); // 创建每个图片的div
        itemEle.classList.add('item');
        
        itemEle.addEventListener('click', handleSelect) // 给图片容器div添加click事件、】
        function handleSelect() {
            var selected = itemEle.classList.contains('selected');
            if (selected) {
                itemEle.classList.remove('selected')
            } else {
                itemEle.classList.add('selected')
            }
        }

        itemEle.appendChild(img);// 将 图片 放入 图片容器
        listElement.appendChild(itemEle)// 将所有图片容器放入列表容器
    })
    // 将列表容器放入body
    document.body.appendChild(listElement)
    var btnCon = document.createElement('div')
    var btn = document.createElement('input');
    btn.type = 'button';
    btn.value = '提交'
    btn.addEventListener('click', function () {
        var selectedDivs = listElement.getElementsByClassName('selected');
        var srcs = []
        Array.from(selectedDivs).map(x => x.firstElementChild.src)
        var selectedImgs = srcs.map(x => x.split('/').pop())
        console.log(selectedImgs) //selectedImgs就是当前被选择的图片
    })
    btnCon.appendChild(btn)
    document.body.appendChild(btnCon)

}
// css float排列图片，添加selected类的边框css
document.addEventListener('DOMContentLoaded', initImg)
function initImg() {
    // 把所有img加上click方法
    var elementImgs = document.getElementsByClassName('image');

    Array.from(elementImgs).forEach(function (img) {
        img.addEventListener('click', function () {
            var have = img.classList.contains('selected')
            if (have) {
                img.classList.remove('selected')
            } else {
                img.classList.add('selected')
            }
        })
    })

}
