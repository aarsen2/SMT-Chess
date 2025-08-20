export function equalArrays(array1, array2) {
    //array lenght check
    
    if (array1.length != array2.length) {
        //console.log("length Error")
        return false
    }



    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            //console.log("Equality Error at index " + i)
            return false;
        }
    }

    //console.log("These are equal")
    return true;
}