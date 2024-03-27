import React from 'react'
// import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import {useState} from 'react'

const Card = (props) => {

  let course = props.course;
  let likeCourses = props.likeCourses;
  let setLikeCourses = props.setLikeCourses;

  function clickHandler(){
    // like -> logic
    if(likeCourses.includes(course.id)){
      //pahle se like hua pada hai 
      setLikeCourses((prev) => prev.filter((cid) => (cid !== course.id)))
      // toast.warning("like remove")
    }
    else{
      // course pahle se like nahi hai
      // course ko insert karna padenga 
      if(likeCourses === 0){
        setLikeCourses([course.id])

      }else{
        // non-empty pahle se
        setLikeCourses( (prev) => [...prev, course.id])
        

      }
      // toast.success("Liked SuccessFully")
    }
  }

  return (
    <div className='w-[300px] bg-gray-900 bg-opacity-80 rounded-md overflow-hidden'>
      <div className=' relative'>
        <img src={course.image.url} />  

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {/* use icon for react icon */}
            {/* {
              likeCourses.includes(course.id) ?  (<FcLike fontSize='1.75rem'/>) : (<FcLikePlaceholder fontSize='1.75rem'/>)
            } */}
          </button>
        </div>
      </div>


      <div className='p-4'>
        <p className=' text-white font-semibold text-lg leading-6 '>{course.title}</p>
        <p className=' text-white mt-2 '>
          {
            course.description.length>100 ? (course.description.substr(0,100)) + "..." : (course.description)
          }
        </p>
      </div>
    </div>
  )
}

export default Card