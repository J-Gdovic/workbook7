"use strict";
const urlParams = new URLSearchParams(location.search);
// location.search is the way you access
// the query string portion of the URL
const courseInfoTbody = document.querySelector("#courseInfoTbody");

function displayCourseInfo() {
  let id = -1;
  if (urlParams.has("courseid") === true) {
    id = urlParams.get("courseid");

    fetch(`http://localhost:8081/api/courses/${id}`)
      .then((response) => response.json())
      .then((course) => {
        console.log(course);

        let tableRow = courseInfoTbody.insertRow(-1);

        let td1 = tableRow.insertCell(0);
        td1.innerText = course.instructor;

        let td2 = tableRow.insertCell(1);
        td2.innerText = course.startDate;

        let td3 = tableRow.insertCell(2);
        td3.innerText = course.numDays;
      });
  }
}
displayCourseInfo();
