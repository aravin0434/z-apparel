import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

function SignUpForm() {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
  
    console.log(formFields)
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // confirm password match
        if(password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocFromAuth(user);
            console.log(userDocRef);
        } catch (error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('Email already in use');
            } else {
                console.log('Error creating user', error.message);
            }
        }
        // reset form fields
        setFormFields(defaultFormFields);

    }
    
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="displayName">Display Name</label>
                <input type="text" id="displayName" required name="displayName" onChange={handleChange} value={displayName}/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" required name="email" onChange={handleChange} value={email}/>

                <label htmlFor="password">Password</label>  
                <input type="password" id="password" required name="password" onChange={handleChange} value={password}/>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" required name="confirmPassword" onChange={handleChange} value={confirmPassword}/>

                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUpForm;