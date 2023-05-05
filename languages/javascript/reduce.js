let group=[3,5,6,3,7,1,7,9]
let unique=group.reduce(function (accumulator, currentValue){
    if(!accumulator.includes(currentValue)){
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(unique);