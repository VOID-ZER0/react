// import React from 'react'
// // import Card from './components/Card'

// const App = () => {
//   return (
//     <>

//     </>
//   )
// }

// export default App

import Card from "./components/Card";


const App = () => {

const jobs = [
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    company: "Apple",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    company: "Google",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    company: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Architect",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    company: "Amazon",
    datePosted: "3 weeks ago",
    post: "SDE I",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    company: "Meta",
    datePosted: "6 days ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Intermediate",
    pay: "$40/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    company: "Netflix",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    company: "Tesla",
    datePosted: "12 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    company: "NVIDIA",
    datePosted: "1 week ago",
    post: "AI Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$95/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/oracle.com",
    company: "Oracle",
    datePosted: "8 days ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Intermediate",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    company: "OpenAI",
    datePosted: "3 days ago",
    post: "Research Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  }
];

console.log(jobs);



  return (

    <div className="cards-container">
      {/* <Card user = "Apple"/>
      <Card user = "AWS"/>
      <Card user = "Microsoft"/>  */}

      {jobs.map(function(elem){
        return <Card Company={elem.company} post={elem.post} pay={elem.pay} tag1={elem.tag1} tag2={elem.tag2} datePosted={elem.datePosted} brandLogo={elem.brandLogo}></Card>
      })}
       
      
    </div>

    
  );
};

export default App;
