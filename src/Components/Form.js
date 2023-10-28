import React, { useState } from 'react';
import './Form.css';


const Form = () => {

    const [user, setUser] = useState({
        name: "", username: "", email: "", phone: "", checkbox: false
    });

const [errors,setErrors] = useState({
    name:false,
    username:false,
    email:false,
    phone:false,
    signup:false,
});

    let name, value, type;

    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;
        type = e.target.type;
        if (type === 'tel' && !/^\d{0,10}$/.test(value)) {
            return;
          }
        setUser((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? e.target.checked : value,
        }));
    };
        const handleSubmit = (e) => {
            e.preventDefault();
            let valid = true;
            const newErrors = {};

            if (!user.name.trim().length > 0) {
                newErrors.name = true;
                valid = false;
            } else {
                newErrors.name = false;
            }

            if (!user.username.trim().length > 0) {
                newErrors.username = true;
                valid = false;
            } else {
                newErrors.username = false;
            }

            if (!user.email.trim().length > 0) {
                newErrors.email = true;
                valid = false;
            } else {
                newErrors.email = false;
            }

            if (!user.phone.trim().length > 0) {
                newErrors.phone = true;
                valid = false;
            } else {
                newErrors.phone = false;
            }

            if (!user.checkbox) {
                newErrors.signup = true;
                valid = false;
            } else {
                newErrors.signup = false;
            }

            setErrors(newErrors);

            if (valid) {
                window.localStorage.setItem('userData', JSON.stringify(user));
                console.log(user);
            }
        };

    return (
        <>
            <div className='right'>
                <p className='super'>Super App</p>
                <p className='text'>Create your new account</p>
                <form onSubmit={handleSubmit}>
                    <div className='Forms'>
                        <label htmlFor="name">
                            <input type='text' value={user.name} onChange={handleInputs} placeholder='Name' name='name' id='name' />
                            {errors.name && <span className='error'>Name is required.</span>}
                        </label>

                        <label htmlFor="username">
                            <input type='text' value={user.username} onChange={handleInputs} placeholder='UserName' name='username' id='username' />
                            {errors.username && <span className='error'>Username is required.</span>}
                        </label>

                        <label htmlFor="email">
                            <input type='email' value={user.email} onChange={handleInputs} placeholder='Email' name='email' id='email' />
                            {errors.email && <span className='error'>Email is required.</span>}
                        </label>

                        <label htmlFor="phone">
                            <input type='tel' value={user.phone} onChange={handleInputs} placeholder='Mobile' name='phone' id='phone' />
                            {errors.phone && <span className='error'>Mobile Number is required.</span>}
                        </label>
                    </div>
                    {/* <div className="check"> */}
                        <label htmlFor="checkox">
                            <input type="checkbox" name="checkbox" value={user.checkbox} onChange={handleInputs} className="check" id='checkbox' />
                        </label>
                    {/* </div> */}
                    <span className='checktext'>Share my registration data with Superapp</span>
                            {errors.signup && <span className='errmod'>Check this box if you want to proceed.</span>}
                    <button type='submit'>SIGN UP</button>
                </form>
                <p className='btmTxt'>By clicking on Sign up. you agree to Superapp <span className='conditions'>Terms and Conditions of Use</span> </p>
                <p className='btmTxt two'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='conditions'>Privacy Policy</span> </p>
            </div>
        </>
    )
}

export default Form
