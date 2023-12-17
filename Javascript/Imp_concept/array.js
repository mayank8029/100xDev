let arr = [1 , 2 , 3] ; 
console.log(arr) ; 

arr.push(4) ;
console.log("array after push" + arr) ;

arr.pop() ; 
console.log("array after pop"+arr) ; 

const val = arr.shift() ; 

console.log("array after shift "+arr) ; 
console.log("value it return " + val) ; 

const val2 = arr.unshift(1) ; 

console.log("arr after unshift" + arr) ; 
console.log("value it return " + val2) ; 

let arr2 = [11 , 12 , 13 , 14] ; 

let concarr = arr.concat(arr2) ; 

console.log("array after concatination"+concarr) ; 

arr.map((item)=>{
    console.log(item) ; 
})

const filterarr = arr.filter((item)=>{
    return  item>=2 ; 
})

console.log("new array after applying filter "+filterarr) ; 

filterarr.push(4) ; 
console.log(filterarr)  ;

const arr3 = [5 , 4 , 3 , 2, 1] ; 

arr3.sort(function(a , b){
    return a-b; 
})

console.log(arr3) ;


arr.forEach(function(val , index){
    console.log(val , index) ; 

})


const arrfind = arr.find(function(item){
    return item = 2 ; 
})

console.log(arrfind) ; 
