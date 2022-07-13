import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-shift'>
        <div className='footer-left'>
          <img src="/Assets/Logo.svg" alt=""/>
          <div className='footer-text'>
            <div className='text'>
              <h1>Product</h1>
              <p>HomePage</p>
              <p>Pricing</p>
              <p>Features</p>
            </div>
            <div className='text'>
              <h1>Help</h1>
              <p>Live Chat</p>
              <p>Send Email</p>
              <p>FAQ</p>
            </div>
            <div className='text'>
              <h1>Company</h1>
              <p>About</p>
              <p>Customers</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <h1>Try TweetNow</h1>
          <div className='form-section'>
            <form action='mailto:olaabiodun157@gmail.com'>
              <div className='form-container'>
                <input type='text' className='box' placeholder='Email Address' />
                <button href='#' type='submit'>Start Scheduling</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
