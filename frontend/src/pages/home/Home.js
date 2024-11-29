import React from 'react'
import './Home.css'

function Home() {
    return (

        <div className='home-global'>
            <h1>Home</h1>
            <section className = "center-position">
                <p>Hello and Welcome to PEEP FEED. PF is an Social-Media platform to communicate with people online.
                   PF allows to interact people of similar interests.  
                </p>
            </section>
            <section className = "center-position">
                <img src="https://unsplash.it/600/400" alt="" />
            </section>
            <section className="center-position">
                <p>To start, first create an account with us and start creating POST of your interest. To create an account first Register! 
                   You can chose your topics from your area of interest.
                </p>
            </section>
        </div>
    )
}

export default Home
