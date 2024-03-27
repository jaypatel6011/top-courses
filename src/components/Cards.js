import { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

  const courses = props.courses;
  // console.log(courses);
  let category = props.category;
  const [likeCourses, setLikeCourses] = useState([]);

  function getCourses() {
    if (category === 'All') {
      let allCourses = [];
      Object.values(courses).forEach(array => {
        array.forEach(courseData => {
          allCourses.push(courseData);
        })
      })
      return allCourses;
    }
    else{
      // Spacific category pass karna hai
      return courses[category]
    }

  }
  return (
    <div className=" flex flex-wrap justify-center gap-4 mb-4">
      {
        getCourses().map((course) => {
          return (
            <Card key={course.id} course={course} likeCourses={likeCourses} setLikeCourses={setLikeCourses} />
          )
        })
      }
    </div>
  )
}

export default Cards