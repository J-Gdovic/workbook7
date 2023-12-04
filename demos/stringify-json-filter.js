"use strict";
//JSON.stringify() : goes from object/array to a string
let job = {
    title : "Web Designer",
    startDate : "October 2022",
    company : "AT&T",
    minSalary : 52000,
    maxSalary : 86000
    };

    let filter = ["title", "company"];// pick what you want to disply 
    let jsonStr = JSON.stringify(job, filter);
    console.log(jsonStr);