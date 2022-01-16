import React from 'react'
import './Postcard.css'
import Paper from '@material-ui/core/Paper';

function Postcard(props){
    return(
        <div className={`postcard-div`}>
            <Paper elevation={2} className='postcard'>
                <div className='postcard-head-container'>
                    <div className='postcard-head-div'>
                        <p>User ID: {props.data.userId}</p>
                    </div>
                    <div className='postcard-head-div'>
                        <p>ID: {props.data.id}</p>
                    </div>
                </div>
                <div className='postcard-title-div'>
                    <p>{props.data.title}</p>
                </div>
                <div className='postcard-body-div'>
                    <p>{props.data.body}</p>
                </div>
            </Paper>
        </div>
    )
}

export default Postcard