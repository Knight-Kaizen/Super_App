import React from "react"
import styles from "./RegisterForm.module.css"

export default
    function RegisterForm() {

    const [formData, setFormData] = React.useState(
        { fullName: '', userName: "", email: "", mobileNumber: "", canShare: '' }
    )

    // error state handler 
    const [errors, setErrors] = React.useState({});


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type == "checkbox" ? checked : value
            }
        });
        // console.log(formData)   Doubt ?? why is it lagging!!!
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log("final Form Data: ", formData)

        //Perform Validation

        setErrors(validate(formData));

        
        console.log("erros ", errors);

        // Doubt ?? Showing errrors on second click only

    }

    function validate(formData){
        const errors = {};

        if(!formData.fullName){
            errors.fullName = 'Name is required';
        }
        if(!formData.email){
            errors.email = 'Email is required';
        }
        else if(!/\S+@\S+\.\S+/.test(formData.email)){
            errors.email = 'Email is invalid';
        }

        if(!formData.userName){
            errors.userName = "userName is required";
        }
        if (!formData.mobileNumber) {
            errors.mobileNumber = 'Mobile number is required';
        } else if (!/^[0-9]{10}$/.test(formData.mobileNumber)) {
            errors.mobileNumber = 'Mobile number is invalid';
        }

        if (!formData.canShare) {
            errors.canShare = 'Required';
          }
        
        return errors;

    }

    return (
        <div className={styles.registerForm}>

            <div className={styles.top}>
                <h1>
                    <span>Super App</span>
                </h1>
                <h4>
                    Create your new account
                </h4>
                <h3>
                    Email  <span>|</span> Google
                </h3>
            </div>

            <div className={styles.bottom}>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.input1}>
                        <input
                            type="text"
                            placeholder="Name"
                            onChange={handleChange}
                            name="fullName"
                            value={formData.fullName}
                        />
                        {errors.fullName && <span className={styles.error}>{errors.fullName}</span>}

                        <input
                            type="text"
                            placeholder="UserName"
                            onChange={handleChange}
                            name="userName"
                            value={formData.userName}
                        />
                        {errors.userName && <span className={styles.error}>{errors.userName}</span>}
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                        />
                        {errors.email && <span className={styles.error}>{errors.email}</span>}
                        <input
                            type="text"
                            placeholder="Mobile"
                            onChange={handleChange}
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            // className = {styles.mobileNumber}
                        />
                        {errors.mobileNumber && <span className={styles.error}>{errors.mobileNumber}</span>}
                    </div>
                    <div className={styles.input2}>
                        <input
                            type="checkbox"
                            id="canShare"
                            onChange={handleChange}
                            name="canShare"
                            checked={formData.canShare}
                        />
                        <label htmlFor="canShare" className={styles.tc}>Share my registration data with Superapp</label>
                    </div>
                    
                    {errors.canShare && <span className={styles.error2}>{errors.canShare}</span>}
                    <button className={styles.submitBtn}>SIGN UP</button>
                </form>
                <div className={styles.tc1}>
                    <p>By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span></p>
                </div>
                <div className={styles.tc2}>
                    <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
                </div>
            </div>

        </div>
    )

}
