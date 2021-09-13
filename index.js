// Your code here
function mapToNegativize(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(-sourceArray[i])
    }
    return newArray
}

function mapToNoChange(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i] * sourceArray[i])
    }
    return newArray
}

// filter like functions

// -`reduceToTotal(sourceArray, startingPoint)`
// - `reduceToAllTrue(sourceArray)`
// - `reduceToAnyTrue(sourceArray)`

function reduceToTotal(sourceArray, startingPoint = 0) {
    let value = startingPoint;
    for (let i = 0; i < sourceArray.length; i++) {
        value += sourceArray[i];
    }
    return value
}

function reduceToAllTrue(sourceArray) {
    let boolean;
    for (let i = 0; i < sourceArray.length; i++) {
        boolean = Boolean(sourceArray[i])
        if(!boolean) break;
    }
    return boolean
}

function reduceToAnyTrue(sourceArray) {
    let boolean;
    for (let i = 0; i < sourceArray.length; i++) {
        boolean = !!sourceArray[i]
        if(boolean === true) break;
    }
    return boolean
}