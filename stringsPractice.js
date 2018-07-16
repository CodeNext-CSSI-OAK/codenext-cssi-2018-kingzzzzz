function makeAbba(a,b) {


 return a+b+b+a;
}
//console.log(makeAbba( "hey","yo"));


function comboString(a,b) {
  if ( b.length > a.length) {
    return a + b +a;
  }
  else if ( a.length > b.length){
  return b + a + b
}
}
 console.log(comboString("hello", "bro"))


function lastTwo(a) {
if( a.length <= 2) {
  let lastChar = a.charAt(a.length -1)
  let secondlastChar =a.charAt(a.length-2)
  let firstPart = str.substring(0, a.length -2)
  return firstPart + lastChar + secondlastChar;
}
else if ( a.length < 2 )

return a

}


  }

  console.log(lastTwo(" "));
