function calculate(){
    let a=document.querySelector("#data1").value;
    let b=document.querySelector("#data2").value;
    let op=document.querySelector("#select").value;
    let res=0;
    switch(op){
        case 'add':
            res=a+b;
            break;
        case 'sub':
            res=a-b;
            break;
        case 'mul':
            res=a*b;
            break;
        case 'div':
            res=a/b;
            break;
        default:
            res=-1;
    }
    document.querySelector("#res").innerText=`Result is ${res}`;
}