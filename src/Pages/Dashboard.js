import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-shift'>
        <div className='dashboard-left'>
          <h1>Unified Dashboard</h1>
          <h2>Customizable dashboard for all platforms.</h2>
          <p>Use Twitter and Instagram but not LinkedIn? You can Customize your dashboard to your liking. You can even schedule the same post to individual platforms instead of all platforms</p>
          <button>Start Scheduling</button>
        </div>
        <div className='dashboard-right'>
          <h1>Enhanced Analytics</h1>
          <h2>Real-time data that tells you everythihng.  </h2>
          <p>Get detailed of what's working and what isn't. Engagement rates, impressions, views and muxh more data is available to you through our in-depth dashboard tool.</p>
          <main>View Demo</main>
        </div>
      </div>
    </div>
  )
}

export default Dashboard