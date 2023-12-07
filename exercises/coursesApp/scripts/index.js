"use strict";

let coursesTbody = document.querySelector("#coursesTbody");

function loadCourseTable() {
  fetch("http://localhost:8081/api/courses")
    .then((response) => response.json())
    .then((coursesArray) => {
      //   console.log(data);
      for (let course of coursesArray) {
        let tableRow = coursesTbody.insertRow(-1);

        let td1 = tableRow.insertCell(0);
        td1.innerText = course.dept;

        let td2 = tableRow.insertCell(1);
        td2.innerText = course.courseNum;

        let td3 = tableRow.insertCell(2);
        td3.innerText = course.courseName;

        let td4 = tableRow.insertCell(3);
        let anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`;
        anchor.text = "See details";
        td4.appendChild(anchor);
      }
    });
}
loadCourseTable();
