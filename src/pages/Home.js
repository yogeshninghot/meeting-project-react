import React from 'react'
import { useEffect,useState } from 'react';
import MeetingCard from '../components/MeetingCard';
 const Home = () => {
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [meetings,setMeetings]=useState([]);
    const [loadingStatus,setLoadingStatus]= useState(true)

    useEffect(()=>{
      fetch ("https://meeting-project-a6e8d-default-rtdb.firebaseio.com/meetings.json").then(response=>response.json()).then(data=>{
        console.log(data)
        const tempMeetings= [];
         for (const key in data){
          const meeting = {
            id:key,
            ...data[key]
          }
          tempMeetings.push(meeting);
          setMeetings(tempMeetings)
          setLoadingStatus(false);
          
         }
    
        
    })
    
    },[])
  
  
  return (
    <div>
      <div className={loadingStatus?"main-loader":"d-none"}></div>
    <div className='meeting-container'>
      
      
     { 
        meetings.sort((a,b)=>{
           let dateA= new Date(a.date);
           let dateB= new Date(b.date);
          if(dateA < dateB)
            return -1;
          else if( dateA > dateB)
           return 1;
           else 
           return 0;
          
          }).filter((meeting)=>{
            let today = new Date();
            return (new Date(meeting.date)>today);
          }).map((meeting)=>{
           let date = new Date(meeting.date);
           const Fdate = date.toLocaleDateString("en",options);
           const Ftime = date.toLocaleTimeString('en-US');
           const fMeeting = Ftime + " " + Fdate
        return <MeetingCard title={meeting.title} img={meeting.img} desc={meeting.desc} date={fMeeting}/>
      })
      
    }
    </div>
    </div>
  )
}

export default Home;