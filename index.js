// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(outer="*"){
    return function(inner="special"){
        return `You are ${outer}${inner}${outer}!`
    }
}