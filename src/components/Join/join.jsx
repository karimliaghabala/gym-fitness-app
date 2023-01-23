import React,{useRef} from 'react';
import '../Join/join.css'
import emailjs from '@emailjs/browser';
const Join = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jzvmidn', 'template_50z7ro2', form.current, 'Z7DQCa4EOTN-AkwnG')
      .then((result) => {
          console.log(result.text);
          alert('Send...')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='join' id='join-us'>
      <div className='left-j'>
        <hr/>
        <div>
          <span className='stroke-text'>READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='stroke-text'> WITH US?</span>
        </div>
      </div>
      <div className='right-j'>
        <form ref={form} onSubmit={sendEmail} className="email-container">
          <input type="email" name='user_email' placeholder='Enter your Email address' />
          <button className="btn btn-j">Join Nov</button>
        </form>
      </div>
    </div>
  )
}

export default Join
