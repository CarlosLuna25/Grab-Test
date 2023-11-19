import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSatelliteDish, faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'


export function Header(){
    return (
        <>
       
         <header>
            <div>
                <span className="isLive">Live &nbsp;&nbsp;<FontAwesomeIcon icon={faSatelliteDish} /> </span>
                <span> Lorem ipsu dolor sit amet </span>
                <span  className="isJoin"> Join Now &nbsp;&nbsp;<FontAwesomeIcon icon={faCirclePlay} /></span>
            </div>
        </header>
        
        </>
       
    )
}