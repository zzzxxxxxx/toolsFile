//判断数据类型（封装后的typeof方法）
function type(target) {
  var ret = typeof target;
  var temp = {
    "[object Array]" : "array",
    "[object Object]" : "object",
    "[object Number]" : "number--object",
    "[object String]" : "string--object",
    "[object Boolean]" : "boolean--object",
  }
  if(target === null) {
    return 'null'
  }else if(ret === 'object') {
    var str = Object.prototype.toString.call(target);
    return temp[str];
  }else {
    return ret;
  }
}
//insertAfter： 对该元素的下一个相邻子元素使用insertBefore方法
// 我自己想的
Element.prototype.insertAfter = function (x, y) {
  var nextElem = y.nextSibling;
  var textElem = document.createTextNode('');
  this.insertBefore(x, nextElem);
  this.insertBefore(textElem, x);
  return x;
}
// 另外一种写法
// Element.prototype.insertAfter = function (targetNode, afterNode) {
//   var beforeNode = afterNode.nextElementSibling;
//   if(beforeNode == null) {
//     this.appendChild(targetNode);
//   }else {
//     this.insertBefore(targetNode, beforeNode);
//   }
//   return targetNode;
// }


// getScrollOffset方法： 返回浏览器滚动条滚动距离
function getScrollOffset () {
  if(window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  }else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft,
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}


// 返回可视窗口尺寸
function getViewPortOffset () {
  if(window.innerWidth) {
    return {
      width: window.innerWidth,
      Height: window.innerHeight
    }
  }else {
    if(document.compatMode === "CSS1Compat") {
      return {
        width:  document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }else {
      return {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
    }
  }
}


// 获取元素样式
// 该函数的第二个参数传入的是一个字符串
function getStyle (elem, prop) {
  if(window.getComputedStyle) {
    return window.getComputedStyle(elem, null)[prop];
  }else {
    return elem.currentStyle[prop];
  }
}

// 为元素添加事件
function addEvent (elem, type, handle) {
  if(elem.addEventListener) {
    elem.addEventListener(type, handle, false);
  }else if (elem.attachEvent) {
    elem.attachEvent('on' + type, function(){
      handle.call(elem);
    })
  }else {
    elem['on' + type] = handle;
  }
}


//封装取消冒泡
function stopBubble (event) {
  if(event.stopPropagation) {
    event.stopPropagation();
  }else {
    event.cancelBubble();
  }
}


// 阻止默认事件
function cancelHandle (event) {
  if(event.preventDefault) {
    event.preventDefault();
  }else {
    event.returnValue = false;
  }
}