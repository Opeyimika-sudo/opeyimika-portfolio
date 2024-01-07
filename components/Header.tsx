import React from 'react'
import Link from 'next/link'
import {generalSans, supreme} from '../app/fonts/fonts'

function Header() {
  return (
      <div>
        <h2>̣Opéyímiká</h2>
        <div>
            <Link href="">
                <p className={`${generalSans.className}`}>Home</p>
            </Link>  
            <Link href='#about`'>
                <p className={`${supreme.className}`}>About</p>
            </Link>
            <Link href='#projects'>Projects</Link>
            <Link href='#contact'>Contact</Link>
            <Link href='#resume'>Footer</Link>
        </div>
        <button>View Resume</button>
    </div>
    )
}

export default Header