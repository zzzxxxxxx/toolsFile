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