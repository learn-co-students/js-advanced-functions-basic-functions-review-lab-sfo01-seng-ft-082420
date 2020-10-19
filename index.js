// Your code here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(str = '*') {
    return function(surprise = 'special') {
        return `You are ${str}${surprise}${str}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },

    subtract: function(a, b) {
        return a - b
    },

    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function actionApplyer(startInt, array) {
    for (let ele in array) {
        startInt = array[ele](startInt)
    }
    return startInt
}