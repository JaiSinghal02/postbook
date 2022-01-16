import React from 'react'
import Logobar from '../../components/Logobar/Logobar'

function Layout(props){
    return(
        <div>
            <Logobar/>
            <div className='layout-page-content'>{props.children}</div>
        </div>
    )
}

export default Layout