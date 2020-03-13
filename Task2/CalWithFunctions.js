/*
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3



*/
function zero(operationFunction) {

    return operationFunction ? operationFunction(0) : 0;
}
function one(operationFunction) {
    return operationFunction ? operationFunction(1) : 1;
}
function two(operationFunction) {
    return operationFunction ? operationFunction(2) : 2;
}
function three(operationFunction) {
    return operationFunction ? operationFunction(3) : 3;
}
function four(operationFunction) {
    return operationFunction ? operationFunction(4) : 4;
}
function five(operationFunction) {
    return operationFunction ? operationFunction(5) : 5;
}
function six(operationFunction) {
    return operationFunction ? operationFunction(6) : 6;
}
function seven(operationFunction) {
    return operationFunction ? operationFunction(7) : 7;
}
function eight(operationFunction) {
    return operationFunction ? operationFunction(8) : 8;
}
function nine(operationFunction) {
    return operationFunction ? operationFunction(9) : 9;
}

function plus(value2) {
    return function (value1) {
        return value1 + value2;
    }
}
function minus(value2) {
    return function (value1) {
        return value1 - value2;
    }
}
function times(value2) {
    return function (value1) {
        return value1 * value2;
    }
}
function dividedBy(value2) {
    return function (value1) {
        return Math.floor(value1 / value2);
    }
}
