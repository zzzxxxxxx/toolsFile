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