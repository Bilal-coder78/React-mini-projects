import React from 'react'
import "./Form.css"
import Person_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"

function Form() {
    return (
        <div className='d-flex align-items-center justify-content-center flex-column contanier'>
            <div class="Full-form rounded-3">
                <div class="header d-flex flex-column gap-1 w-100 my-3 align-items-center">
                    <h2 className='fs-1 fw-semibold'>Sign Up</h2>
                    <div class="underline"></div>
                </div>
                <form action="" className='d-flex flex-column'>
                    <div class="inputs mt-4 d-flex flex-column gap-4">
                        <div class="input">
                            <img src={Person_icon} alt="" />
                            <input type="text" name="" id="" placeholder='Name' />
                        </div>
                        <div class="input">
                            <img src={email_icon} alt="" />
                            <input type="email" name="" id="" placeholder='Email' />
                        </div>
                        <div class="input">
                            <img src={password_icon} alt="" />
                            <input type="password" name="" id="" placeholder='Password' />
                        </div>
                    </div>
                    <div class="forgot-password">forgot password? <span>Click Here!</span></div>
                    <div class="buttons">
                        <button>Sign Up</button>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form