// Get Element
document.getElementById('resumeForm')?.addEventListener('submit',function(event){
    event.preventDefault();
    //Type Assertion
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillElement = document.getElementById('skill') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skill = skillElement.value;
    
    // Create Resume Output
    const resumeOutput = `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>
    
    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skill}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput
    }else {
        console.error('The Resume Output Elements Are Missing')
    }
    
}else{
    console.error('One OR More Output Elements Are Missing!')
}
})
