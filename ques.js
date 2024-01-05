//1. Write a JavaScript function that reverses a number.

 function reverses(a){
    let b,num=0;
    while(a>0){
        b=a%10;
        num=(num * 10)+b;
        a=parseInt(a/10);
    }
return num;
}

let x=prompt("enter no.");
if(x==reverses(x)){
    console.log("true");
} else{
    console.log("false");
}
