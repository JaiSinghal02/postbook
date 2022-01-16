import React from 'react'
import './Logobar.css'
import Banner from '../../assets/ter-banner.png'
function Logobar(){
    return(
        <div>
            <div className='logobar-div'>
                <img src={Banner} alt="Banner"/>
            </div>
        </div>
    )
}

export default Logobar