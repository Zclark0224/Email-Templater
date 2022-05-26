const emailData = {
    positiveEmail: {
        inputs: ['Email', 'First Name', 'Last Name'],
        emailTemplate: 
            `Hello!

            I am {firstName} {lastName}’s math teacher.  I wanted to update you on the progress{firstName} has made in class.  {firstName} has been very successful in class and has shown great perseverance to learn something new and challenging. I hope you can celebrate their success and help encourage {firstName} to continue to make great progress!

            Thanks and let me know if you have any questions or concerns!

            Zachary Clark`
    },
    
    behaviorProblems: {
        inputs: ['Email', 'First Name', 'Last Name'],
        emailTemplate:
            `Hello!
            
            I am {firstName} {lastName}’s math teacher.  I wanted to update you on the progress{firstName} has made in class. {firstName} has recently been having troubles in class.  I have noticed that {firstName} is having a hard time controlling their behavior and maintaining attention on the math lesson.  I have started to see how their behavior could begin to effect their grade and would like to prevent this.  Please reach out to me when you are able to set up a time to talk about this more.
            
            Thanks and let me know if you have any questions or concerns!
            
            Zachary Clark`        
    },
    
    failingNotice: {
        inputs: ['Email', 'First Name', 'Last Name', 'Grade', 'Number of Missing Assignments'],
        emailTemplate:
            `Hello!
            
            I am {firstName} {lastName}’s math teacher. I wanted to update you on the progress{firstName} has made in class. {firstName} is currently failing with a grade of {grade} and {numberOfMissingAssignments}. There is still time to get the grade up before the end of the quarter. You can view what assignments they are missing on progressbook.
            
            Thanks and let me know if you have any questions or concerns!
            
            Zachary Clark`        
    },
}

export default emailData