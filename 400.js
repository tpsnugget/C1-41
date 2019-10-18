function outer(){
   var data = "closures are"
   return function inner(){
      var innerData = "awesome"
      return data + innerData
   }
   console.log(data)
}

console.log(outer()())

function outer(a){
   return function inner(b){
      return a + b
   }
}