

function sumRange(n, total=0){
    if (n<=0){
        return total;
    }
    sumRange(n-1, total + n);
}

console.log(sumRange(5));    


