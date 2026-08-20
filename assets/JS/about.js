document.getElementById('joinForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('userName').value.trim();
    const email = document.getElementById('userEmail').value.trim();
    const interest = document.getElementById('userInterest').value;
    const message = document.getElementById('userMessage').value.trim();

   
    const nameRegex = /^[\p{L}\s]+$/u;
    if (!name || !nameRegex.test(name)) {
        alert('Please enter a valid name (letters only)!');
        return;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address!');
        return;
    }

   
    if (!interest) {
        alert('Please select your interest from the list!');
        return;
    }

    
    const formData = {
        id: Date.now(),
        name: name,
        email: email,
        interest: interest,
        message: message 
    };

  
    let submissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));

    alert('Your data has been saved successfully!');
    this.reset();
});