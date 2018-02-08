const regExForEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const validator = (data) => {
    console.log('data given to validator', data);
    const updated = {};
    if (data.name !== undefined) {
        if (data.name !== '' && typeof data.name === 'string') {
            updated.isNameValid = true;
        } else {
            updated.fullNameErrorMessage = 'Enter valid first name';
        }
    } else {
        updated.fullNameErrorMessage = 'Please enter first name';
    }
    //    // LAST NAME ERROR MESSAGE
    //    if (data.lastName !== undefined) {
    //     if (data.lastName !== '' && typeof data.lastName === 'string') {
    //         updated.lastNameIsValid = true;
    //     } else {
    //         updated.lastNameErrorMessage = 'Enter valid last name';
    //     }
    // } else {
    //     updated.lastNameErrorMessage = 'Please enter last name';
    // }

    // EMAIL ERROR MESSAGE
    if (data.email !== undefined) {
        const enteredEmail = regExForEmail.test(data.email);
        if (enteredEmail && data.email !== "") {
            updated.emailIsValid = true;
        } else {
            updated.emailErrorMessage = "Please enter a valid email";
        }
    } else {
        updated.emailErrorMessage = "Please enter your email. "
    }

    // PASSWORD VALIDATION
    if (data.password !== undefined) {
        if (data.password !== '' && data.password.length >= 6) {
            updated.passwordIsValid = true;
        } else if (data.password.length < 6) {
            updated.passwordErrorMessage = 'Size of password must be greater then 6.'
        } else {
            updated.passwordErrorMessage = 'Please enter a valid password';
        }
    } else {
        updated.passwordErrorMessage = "Please enter password";
    }
    // FILE VALIDATION
    if (data.resume !== undefined) {
        let allowedExtensions = /(\.pdf|\.doc)$/i
        if (allowedExtensions.exec(data.resume.name)) {
            updated.fileIsValid = true;
        } else {
            updated.fileErrorMessage = 'Please Upload doc, Pdf file';
        }
    } else {
        updated.fileErrorMessage = "Please upload file";
    }

    // WORK PROFILE VALIDATION
    if (data.workProfileUrl !== undefined) {
        if (data.workProfileUrl !== '') {
            updated.workProfileUrlIsValid = true;
        } else {
            updated.workProfileUrlErrorMessage = 'Please enter valid work profile';
        }
    } else {
        updated.workProfileUrlErrorMessage = 'Please enter work profile.';
    }

    return updated;
};

export default validator;
