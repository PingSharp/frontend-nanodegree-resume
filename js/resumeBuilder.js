/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    name : string,
    role : string,
    contacts: { 
          mobile: string,
          email: string ,
          github: string,
          twitter: string ,
          location: string},
    welcomeMessage: string ,
    skills: [],
    biopic:  url,
    display: function (){}}
var education = {
    schools: [{name: string,
        location: string,
        degree: string,
        majors: [],
        dates: string,
        url: string }],
         
    onlineCourses: [{title: string,
        school: string,
        dates: string ,
        url: string}],
         
    display: function (){}
}
var work = {
    jobs: [{employer: string, 
        title: string, 
        location: string ,
        dates: string ,
        description: string }],
    
display: function (){}}
var projects = {
    projects: [{title: string ,
        dates: string ,
        description: string,
        images: [url]}],
          
    display: function (){}
}