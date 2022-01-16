import React,{useState} from 'react'
import Searchbar from '../../components/Searchbar/Searchbar'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'
function Navigation(props){
    const search = function(e){
        console.log(e.target.value)
    }
    return(
        <div>
            <Searchbar setSearchedData={props.setSearchedData}/>
        </div>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        setSearchedData: (text)=>
            dispatch({type: actionTypes.SET_SEACRHED_DATA,searchText: text}),
    };
}

export default connect(null,mapDispatchToProps)(Navigation)