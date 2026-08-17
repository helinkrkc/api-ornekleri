import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3001";
function App() {
  
    const getAllCourses = async()=>{
      const response = await axios.get(BASE_URL + "/courses");
      console.log(response.data);
    }


    // const getCoursesById = async(courseId) => {
    //   const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
    //   console.log(response.data)
    // }
    
    const creatCourse = async (newCourse) => {
      //POST: veri eklemek için kullanılır.
      const response = await axios.post(`${BASE_URL}/courses`,newCourse);
      console.log("response",response.data);
    }

   const updateCourse = async (courseId,updatedCourse) => {
      //PUT:veri güncellemek için kullanılır.
      await axios.put(`${BASE_URL}/courses/${courseId}`,updatedCourse);
      
   }
    
   const deleteCourseById = async(courseId)=>{
     await axios.delete(`${BASE_URL}/courses/${courseId}`)
   }


   

   //? Vereceğimiz id ile gidip post adresini getirecek gelen post ile de jsonplaceholderın sitesindeki bilgileri getirecek

   const getCoursesById = async(courseId)=>{
     const response = await axios.get(`${BASE_URL}/courses/${courseId}`);
     return response.data.postId;
   }
  

  const getPostById = async(postId)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/" + postId);
    return response.data;
  }


  const getPost = async()=>{
    const postId = await getCoursesById(1);
    const postData = await getPostById(postId);
    console.log(postData);
  }




    useEffect(()=>{
      //getAllCourses();
      //getCoursesById(1)
      // const newCourse = {
      //   "title" : "Python Dersleri","price" : "150"
      // }
      // creatCourse(newCourse);
      // updateCourse("4",{
      //   "title": "C++ Dersleri",
      //   "price": "160"
      // })

      //deleteCourseById("2");



     getPost();


    },[])

    return(
      <div>

      </div>
    )
}

export default App
