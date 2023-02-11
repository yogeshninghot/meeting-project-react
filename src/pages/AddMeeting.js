import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

 const AddMeeting = () => {
  const [submitStatus,SetSubmitStatus]=useState(false);
  const titleInput = useRef();
  const imgInput = useRef();
  const descInput = useRef();
  const dateInput= useRef();
  const navigate = useNavigate();

  function addMeetingHandler(){
     SetSubmitStatus(true);
     const titleData = titleInput.current.value;
     const imgData = imgInput.current.value;
     const descData = descInput.current.value;
     const dateData = dateInput.current.value;
    
     if(titleData!=="" && imgData!=="" && descData!=="" && dateData!=="" ){
      const tempMeeting ={
        title:titleData,
        img:imgData,
        date:dateData,
        desc:descData,
     }

     fetch("https://meeting-project-a6e8d-default-rtdb.firebaseio.com/meetings.json",{
      method:"post",
      body:JSON.stringify(tempMeeting)
     }).then(()=>{
        SetSubmitStatus(false);
        navigate("/")
     })
     }
  else{
    console.log("Hey buddy fill the fields");
    SetSubmitStatus(false);
  }

  }
  
  return (
    <div className="add-meeting-container">
        <h1>Add New Meeting </h1>
        <p>Add new meetings inside Meeting-Port team!!</p>
         <input placeholder='Enter the title' ref={titleInput}/>
         <input placeholder='Enter the image tag' ref={imgInput}/>
         <input placeholder='Enter the date & time' type='datetime-local' ref={dateInput} />
         <textarea rows="5" column="5" ref={descInput}/>
         <button className='btn' onClick={addMeetingHandler}>Create Meeting <div className={submitStatus?"loader":"d-none"}> </div></button>
         <p className='term'>- By creating new meetings you agree to terms & condition of Meeting-Port</p>
    </div>
  )
}

export default AddMeeting;