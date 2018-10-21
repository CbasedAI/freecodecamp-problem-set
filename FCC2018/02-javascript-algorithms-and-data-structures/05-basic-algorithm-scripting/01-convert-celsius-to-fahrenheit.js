// 将摄氏度转换为华氏度的算法为：摄氏度 × 9/5 + 32
// 输入参数 celsius 代表一个摄氏温度值。请你根据上述转换公式，将已定义好的 fahrenheit 变量赋值为对应的华氏温度的值。

function convertToF(celsius) {
    let fahrenheit = (celsius * (9/5)) + 32;

    if (typeof fahrenheit !== 'undefined'){
        return fahrenheit;
    }else{
        return 'fahrenheit not defined';
    }
}

// test code
convertToF(0);
convertToF(-30);
convertToF(-10);
convertToF(0);
convertToF(20);
convertToF(30);