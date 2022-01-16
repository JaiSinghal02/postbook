import React from 'react'
import './Loader.css'
import CircularProgress from '@mui/material/CircularProgress';

function Loader(props){
    return(
        <div className='loader-div'>
            <div className='loader-container'>
                <CircularProgress style={{color: 'brown '}}/>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Loader