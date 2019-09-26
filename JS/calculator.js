function calculator(firstNum, secondNum, symbol){
if (symbol=="+"){
    return firstNum + secondNum;
}
else if (symbol=="-"){
    return firstNum - secondNum;
}
else if (symbol=="*"){
    return firstNum * secondNum;
}
else  if(symbol=="/"){
    return firstNum / secondNum;
}
else{
    return (null);
}
}

