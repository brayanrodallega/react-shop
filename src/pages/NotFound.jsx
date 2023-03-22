import React from 'react'
import '../styles/NotFound.scss'

const NotFound = () => {
  return (
    <div className='container'>
        <div id="sub-container">
            <h1 className='title'>404</h1>
            <h2 className='subtitle'>Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <button to="/" className='primary-button'>
                <a href='/' >Go to Home</a>
            </button>
        </div>
    </div>
  )
}

export default NotFound