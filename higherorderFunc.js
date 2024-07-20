function func1 (a,b){

    return function func2(){
        let c = a+b;
        console.log(c);
    }
}


let variable = func1(3,5);

variable();