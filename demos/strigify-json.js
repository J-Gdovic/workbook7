"use strict";

let job = {
    title : "Web Designer",
    startDate : "October 2022",
    company : "AT&T",
    minSalary : 52000,
    maxSalary : 86000
    };
   
 let jsonStr = JSON.stringify(job)// converts arrays and objects into JSon "string" 
console.log(jsonStr);