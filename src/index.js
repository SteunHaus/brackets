module.exports = function check(str, bracketsConfig) {
  let bracketString = '';
  let lengthCheck = 0;
  for (let i = 0; i < bracketsConfig.length; i++) {
    lengthCheck = str.length;
    bracketString = bracketsConfig[i][0] + bracketsConfig[i][1];
    while (str.includes(bracketString)) str = str.replace(bracketString, '');
    if (str.length != lengthCheck && str.length != 0) i = -1;
  }
  if (str.length == 0) return true;
  else return false;
}
