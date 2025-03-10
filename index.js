


// const fs=require("fs")
// const read=(err,data)=>{
//     console.log(data)
// }
// const a=fs.readFile("a.txt","utf-8",read)

// console.log(a);
// const b=fs.readFile("b.txt","utf-8",read)

// console.log(b);
// console.log("jji")

console.log("hii") //will go in callstack in very frist

function timeout(){
    console.log('time');
}
setTimeout(timeout,5000)// this will go in callstack but it is taking time so it will be managed by "WEB API"{it is a async}

console.log('done!'); //Tin second num this line will run ,and in the very last settimeout will run 

first it will go in call stack ,then if it is async then it will go in web api ,and call stack will do its work ,then web api-->callstach queuq -->callback




To,
   PAWAN SINGH THAKUNI
   VILLAGE-KHATYARI,RAGHUNATH CITY MALL
   DISTRICT-ALMORA,
   STATE-UTTARAKHAND,INDIA
   PINCODE-263601,
   MOBILE-8279831158
