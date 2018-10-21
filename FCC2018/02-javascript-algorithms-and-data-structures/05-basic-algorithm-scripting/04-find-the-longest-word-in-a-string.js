// 返回给出的句子中最长的单词的长度。

// 你的返回应该是一个数字。

function findLongestWordLength(str){
    let words = str.split(' ');
    let maxLength = 0;

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
          maxLength = words[i].length;
        }
      }
    
      return maxLength;
}