import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
    <div className="container">
    <div className="team-container">
        <div className="team-container-2">
        <div className="team">
            <div className="team-content">
                <div className="team-header">
                    <h1>Join our team</h1>
                    <p>Over 1,000 job opportunities and counting</p>
                </div>
                <div className="team-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin 
                    consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet 
                    etLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur 
                    </p>
                </div>
                <div>
                  <Link to='/about' href="" className='btn-transparent btn-team'>Learn more</Link> 
                </div>

            </div>

        </div>
        <div className="invest" id='invest'>
        <div className="team-content">
                <div className="team-header">
                    <h1>Invest with us</h1>
                    <p>Over 1,000 investors from different countries</p>
                </div>
                <div className="team-text">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin 
                    consectetur justo quis euismod vehicula. Quisque diam dui, imperdiet 
                    etLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur 
                    </p>
                </div>
                <div>
                  <Link to='/invest' href="" className='btn-transparent btn-team'>Learn more</Link> 
                </div>
            </div>
        </div>
        </div>

    </div>
</div>
  )
}

export default Team
