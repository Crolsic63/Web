// console.log('Привет');
// window.alert('Привет');

function summa(arr){
    let sum =0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    // console.log(sum);
    return sum;
}

let array_1= [1,23,4,5];

let result = summa(array_1);
console.log(result);