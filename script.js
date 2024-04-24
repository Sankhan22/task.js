let str=" komputerlerin daxili element bazasi"
if (str.length>=10 & str.length<=20){
    console.log(true)

}
else{
    console.log(false)
}



function cem (array) {
     sum=0;
    for ( i=0; i<array.length; i++) {
        sum = (sum + array[i]);
    } 
    sum=sum/(array.length)
    return sum;
}
console.log(cem([1,2,3,4,5,9,8]));


 let string1="telet";
 let string2=string1.split('').reverse().join( );
 if ( string1===string2){
    console.log(true);
 }
 else{
    console.log(true)
 }