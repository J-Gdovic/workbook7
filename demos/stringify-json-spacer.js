"use strict"
let job = {
    title : "Web Designer",
    startDate : "October 2022",
    company : "AT&T",
    minSalary : 52000,
    maxSalary : 86000
    };
//using <pre> tag and this spacer helps debug website
    let jsonStr = JSON.stringify(job, null,1);// displays listed data instead of one row "makes it more readable"
    console.log(jsonStr);