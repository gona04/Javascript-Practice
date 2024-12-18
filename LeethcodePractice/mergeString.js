function mergeStrings(str1, str2) {
  let mergedStr = "";
  const str1length = str1.length;
  const str2length = str2.length;

  if (str1length === str2length) {
    mergedStr = smallerOneLooped(str1, str2);
  } else if (str1length > str2length) {
    mergedStr = smallerOneLooped(str2, str1);
  } else if (str2length > str1length) {
    mergedStr = smallerOneLooped(str1, str2);
  } else {
    return;
  }

  return mergedStr;
}

function smallerOneLooped(strSmaller, strLarger) {
  let mergedStr = "";

  for (let i = 0; i < strSmaller.length; i++) {
    mergedStr += strSmaller[i] + strLarger[i];
  }

  if (strLarger.length !== strSmaller.length) {
    mergedStr += strLarger.substring(strSmaller.length);
  }

  return mergedStr;
}

console.log(mergeStrings("abc", "123456"));
