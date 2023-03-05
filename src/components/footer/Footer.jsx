import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
    <div className="copyright">
      <small>&copy; All rights reserved</small>
    </div>
    <div className='footer__socials'>
    <p className='contact'>⬇️ Contact me on Linkedin ⬇️</p>
        <a href="https://www.linkedin.com/in/pauli-pursiainen-7b2509253/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/p4lee" target="_blank"><BsGithub/></a>
    </div>
    <div className='footer_fill'></div>

  </footer>
  )
}

export default Footer