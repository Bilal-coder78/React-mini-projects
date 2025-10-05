import React, { useState } from 'react'
import "./Form.css"
import Person_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"

function Form() {
    const [action,setAction] = useState("Sign Up");
    return (
        <div className='d-flex align-items-center justify-content-center flex-column contanier'>
            <div className="Full-form rounded-3">
                <div className="header d-flex flex-column gap-1 w-100 my-3 align-items-center">
                    <h2 className='fs-1 fw-semibold'>{action}</h2>
                    <div className="underline"></div>
                </div>
                <form action="" className='d-flex flex-column'>
                    <div className="inputs mt-4 d-flex flex-column gap-4">
                        {action==="Login"?<div></div>:
                        <div className="input">
                            <img src={Person_icon} alt="" />
                            <input type="text" name="" id="" placeholder='Name' />
                        </div>}
                        <div className="input">
                            <img src={email_icon} alt="" />
                            <input type="email" name="" id="" placeholder='Email' />
                        </div>
                        <div className="input">
                            <img src={password_icon} alt="" />
                            <input type="password" name="" id="" placeholder='Password' />
                        </div>
                    </div>
                    {action==="Sign Up"?<div></div>:
                    <div className="forgot-password">forgot password? <span>Click Here!</span></div>}
                    <div className="buttons">
                        <button type='button' className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
                        <button type='button' className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form