// nextapp.ts
var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs //
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture  //
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output //
        var resumeOutput = "\n        <h2>Resume</h2>\n        ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n        <p><strong id =\"editable-name>  Name:</strong> ").concat(name_1, "</p>\n        <p><strong id =\"editable-email> Email:</strong> ").concat(email, "</p>\n        <p><strong id =\"editable-phone>Phone Number:</strong> ").concat(phone, "</p>\n        <p><strong id =\"editable-address>Address:</strong> ").concat(address, "</p>\n        <h3>Education</h3>\n        <p> <span id =\"edit-education\">").concat(education, " </span></p>\n        <h3>Work Experience </h3>\n        <p><span id =\"edit-experience\">").concat(experience, " </span></p>\n        <h3>Skills</h3>\n        <p><span id =\"edit-skills\">").concat(skills, "</span></p>\n        ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error(' resume output element is missing !');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
