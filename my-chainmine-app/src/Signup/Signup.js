import React from 'react'
import './Signup.css'
import {Link} from 'react-router-dom'

const Signup = ({handleFooterVisibility}) => {
  const HandleLogin = () => {
    handleFooterVisibility();
  };
  return (
    <div className='signupBigContainer'>
    {/* LOGIN BG IMAGE */}

    <div className='signupbg'>
      <div className='signupbgText'>
        <h3>Sign up</h3>
      </div>
     </div>

     {/* FORM ASPECT */}
     <div className='signupForm'>
       <div className='signupformContent'>
        <form className='form'>
          <div className='signupname'>
          <img src='/images/logo.png' alt='O'/>
          <input type='text'id='signupname' name='signupname' placeholder='New Username'/>
          </div>

          <div className='signupemail'>
          <img src='/images/logo.png' alt='O'/>
          <input type='email'id='signupemail' name='signupemail' placeholder='Your Email'/>
          </div>

          <div className='signuppassword'>
            <img src='/images/logo.png' alt='O'/>
            <input type='password' id='signuppassword' name='signuppassword' placeholder=' New Password'/>
          </div>

          <div className='signupcontinuebtn'>
          <Link to='/Homepage' style={{ textDecoration: 'none' }}><button onClick={HandleLogin}> Continue</button></Link>
          </div>
        </form>

          {/* UPDATE */}

     <div className='signuptermsofservice'>
      <div className='signuptermsofserviceContent'>
        <p>By clicking Sign Up, you are indicating that you have read and acknowledge our <span style={{color: 'rgb(25, 202, 158)'}}>Terms of Service.</span></p>
      </div>
     </div>
      </div>
     </div>
     <div className='signupSmallContainer'>

</div>


    </div>
    
  )
}

export default Signup