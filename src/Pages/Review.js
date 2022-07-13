import React from 'react'

const Review = () => {
  return (
    <div className='review'>
      <div className='review-shift'>
        <div className='review-left'>
          <h1>TimeNow is used by the most influence people.</h1>
          <div className='review-image'>
            <img src='/Assets/UA1.png' alt=''/>
            <img src='/Assets/UA2.png' alt=''/>
            <img src='/Assets/UA3.png' alt=''/>
            <img src='/Assets/UA4.png' alt=''/>
            <img src='/Assets/UA5.png' alt=''/>
            <img src='/Assets/UA6.png' alt=''/>
            <img src='/Assets/UA7.png' alt=''/>
            <img src='/Assets/UA8.png' alt=''/>
          </div>
        </div>
        <div className='review-right'>
          <p className='right-first'>The most influential people on Facebook, Twitter andInstagram are using TweetNow to schedule posts when their followers are mot active</p>
          <p className='right-second'>They generally receive 23% more engagement than people who do not.</p>
        </div>
      </div>
    </div>
  )
}

export default Review