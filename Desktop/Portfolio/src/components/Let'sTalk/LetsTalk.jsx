import React from 'react'
import './LetsTalk.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function LetsTalk() {
  return (
    <div>
        <Link to ='/Contact'>
            <div class="contact-me">
                <p>LET'S TALK</p>
                <a><button>Contact Me</button></a>
            </div>
        </Link>
    </div>
  )
}
