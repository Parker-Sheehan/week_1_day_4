function maxMin(array){
    let max = array[0]
    let min = array[0]
    for (let i = 0; i < array.length; i++){
        if
        (array[i] > max){
            max = array[i]
        } else if
        (array[i] < min){
            min = array[i]
        }
        else{}
    }
    return [min, max]
}

let numb = [1, 4, 11, 2, 37, -4]

console.log(maxMin(numb))