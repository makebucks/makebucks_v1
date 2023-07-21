import logo from './assets/logo.png';
import mail from './assets/Vector-1.png';
import insta from './assets/Vector.png';
import twitter from './assets/Vector-2.png';
import threads from './assets/Vector-3.png';
import successIcon from './assets/ri-checkbox-circle-fill.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState('')
  const [isinvalid, setIsInvalid] = useState(false);
  const [isSuccess, setIsSuccess] = useState('hide');
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('Notify me')
  const validateEmail = (e) => {
    
    let email = e.target.value;
    console.log(email)
    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    setTimeout(() => {
      if(regEx.test(email)){
        setIsInvalid(false);
        const obj = {
          'user': email
        }
        setUserData(obj)
      }
      else{
        setIsInvalid(true);
        setErrorMessage('Invalid email')
      }
   }, 500);
  }

  const sendEmailData = async()=>{
    
    if(!isinvalid && userData !==''){
      const response = await fetch(
        'https://makebucks-e7ddd-default-rtdb.firebaseio.com/userData.json',
        {
          method: 'POST',
          body: JSON.stringify(userData),
        }
      );
  
   
    if (!response.ok) {
      setErrorMessage('Something went wrong! :(')
    }
    else{
      
      setIsSuccess('show')
      setSuccessMessage('')
      setTimeout(() => {
        setSuccessMessage('You will get notified when we are live :)')
      }, 350);
    }

    
  }
  }
  return (
    <div className="makebucks">
      <div className="card">
        <div className='brand_logo'>
          <img src={logo} className='makebucks_logo' alt='makebucks'/>
        </div>
        <div className='makebucks_header'>
          <div className='header_name_tag'>
            <p>Coming soon!</p>
            <span className='header_tagline'>We are currently working hard on this page, meanwhile to get notified</span>
            </div>  
        </div>
        <div className='email_input'>
            <input type='email' name='email' className='subscriber_mail' placeholder='Email address' onKeyUp={(e) => validateEmail(e)}/>
            <button type='button' className='email_submit' id={isSuccess} onClick={sendEmailData}>{isSuccess !=='hide' && <img src={successIcon} alt='success'/>}{successMessage}</button>
            <div className='error_message'>
              {isinvalid && <p className='errorMsg'>{errorMessage}</p>}
            </div>
        </div>
        <div className='socialmedia_links'>
            <a className='mail' href='https://makebucks.in@gmail.com' target='_blank' rel='noreference'>
              <img src={mail} className='mail_logo' alt='makebucks'/>
            </a>
            <a className='insta' href='https://instagram.com/makebucks.in?igshid=MzNINGNkZWQ4Mg==' target='_blank' rel='noreference'>
              <img src={insta} className='insta_logo' alt='insta'/>
            </a>
            <a className='twitter' >
              <img src={twitter} className='twitter_logo' alt='twitter'/>
            </a>
            <a className='threads' href='https://www.threads.net/@makebucks.in' target='_blank' rel='noreference'>
              <img src={threads} className='threads_logo' alt='threads'/>
            </a>
        </div>
        
      </div>
      <div className="circle1"></div>
      <div className="circle2"></div>

      
    </div>
  );
}

export default App;
