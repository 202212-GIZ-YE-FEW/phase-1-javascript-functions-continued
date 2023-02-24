function saturdayFun(activety){
    return `This Saturday, I want to ${activety}!`
}

function mondayWork(activety){
     return `This Saturday, I want to ${activety}!`
}

let wrapAdjective = function(style="*") {
  return function(adjective="special") {
    return `You are ${style}${adjective}${style}!`
  }
}
