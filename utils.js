function convertToUpperCase(str) {
  // 使用正则表达式将驼峰形式的字符串转为下划线连接的形式
  const convertedStr = str.replace(/[A-Z]/g, match => `_${match}`).toUpperCase();
  return convertedStr;
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

module.exports = {
  convertToUpperCase,
  escapeRegExp
}
