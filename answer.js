const primeNumberFromOne = (n)=>{
    if(n==1 ){
        return 0;
    }
    if(n==2){
        return 1;
    }
    if(n==3 || n==4){
        return 2;
    }
    let arr=[2, 3, 5, 7]
    for(let i=5 ; i<n; i++){
        if(i%2 !==0 && i%3 !==0 && i%5 !==0 && i%7 !==0){
arr.push(i)
        }
    }
    // return arr.length
    return arr;
 }

 console.log(primeNumberFromOne(100))
 console.log(primeNumberFromOne(0))
 console.log(primeNumberFromOne(1))
