 const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        const phonePattern = /^[0-9]{11,}$/; 
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const namePattern = /^[a-zA-Z\u0621-\u064A]{3,}$/;
        const subjectPattern = /^[a-zA-Z\u0621-\u064A\s]{3,}$/; 

        const successColor = "#00FF7F"; 
        const errorColor = "#FF1744";   

        function setStyle(element, isValid) {
            if (isValid) {
                element.style.border = `2px solid ${successColor}`;
                element.style.boxShadow = `0 0 10px ${successColor}`;
            } else {
                element.style.border = `2px solid ${errorColor}`;
                element.style.boxShadow = `0 0 10px ${errorColor}`;
            }
            element.style.outline = "none";
        }
        
        contactForm["firstName"].addEventListener("input", function (event) {
            const val = event.target.value; 
            setStyle(event.target, namePattern.test(val));
        });

        contactForm["lastName"].addEventListener("input", function (event) {
            const val = event.target.value;
            setStyle(event.target, namePattern.test(val));
        });

        contactForm["email"].addEventListener("input", function (event) {
            const val = event.target.value.trim();
            setStyle(event.target, emailPattern.test(val));
        });

        contactForm["phone"].addEventListener("input", function (event) {
            const val = event.target.value.trim();
            setStyle(event.target, phonePattern.test(val));
        });
        
        contactForm["subject"].addEventListener("input", function (event) {
            const val = event.target.value; 
            setStyle(event.target, subjectPattern.test(val));
        });

        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
            
            const isFirstNameValid = namePattern.test(contactForm["firstName"].value);
            const isLastNameValid = namePattern.test(contactForm["lastName"].value);
            const isEmailValid = emailPattern.test(contactForm["email"].value.trim());
            const isPhoneValid = phonePattern.test(contactForm["phone"].value.trim());
            const isSubjectValid = subjectPattern.test(contactForm["subject"].value.trim());

            if (isFirstNameValid && isLastNameValid && isEmailValid && isPhoneValid && isSubjectValid) {
                alert("Thank you! Your message has been sent successfully.");
                contactForm.reset();
                
                const inputs = ["firstName", "lastName", "email", "phone", "subject"];
                inputs.forEach(id => {
                    contactForm[id].style.border = "";
                    contactForm[id].style.boxShadow = "";
                    contactForm[id].style.outline = "";
                });
            } else {
                alert("Please fill all required fields correctly before submitting.");
                
                setStyle(contactForm["firstName"], isFirstNameValid);
                setStyle(contactForm["lastName"], isLastNameValid);
                setStyle(contactForm["email"], isEmailValid);
                setStyle(contactForm["phone"], isPhoneValid);
                setStyle(contactForm["subject"], isSubjectValid);
            }
        });
    }