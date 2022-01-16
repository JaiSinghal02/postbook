import React,{useState,useEffect} from 'react'
import './Post.css'
import axios from 'axios'
import Pagination from '@material-ui/lab/Pagination';
import Postcard from '../../components/Postcard/Postcard'
import Loader from '../../components/Loader/Loader';
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'

function Post(props){
    // const [postData,setPostData] = useState([])
    const [pageNumber,setPageNumber] = useState(0)
    const [showLoader,setShowLoader] = useState(true)
    const [searchedPost,setSearchedPost] = useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            props.setPostData(res.data)
            setShowLoader(false)
        })
        .catch(err=>console.log(err))
    },[])
    let postData = (props.isSearching?props.searchedData:props.postData)
    let paginationCount = Math.floor(postData.length/4)+(postData.length%4===0?0:1)
    let data= postData.slice(pageNumber*4,Math.min(pageNumber*4+4,postData.length))
    return(
        <div className={`post-container${showLoader?' post-with-loader':''}`}>
            {showLoader?
            <Loader message="Loading posts"/>:
                <div className='post-div'>
                    <div className='post-postcard-container'>
                        <div className='post-postcard-div'>
                            {data.map((post)=>{
                                return(
                                    <Postcard data={post}/>
                                )
                            })}

                        </div>
                    </div>
                    {paginationCount>1?
                        <div className='post-pagination-container'>
                            <div className='post-pagination-div'>
                                {console.log(paginationCount)}
                                <Pagination siblingCount={3} count={paginationCount} color='primary' className='post-pagination' onChange={(e,p)=>setPageNumber(p-1)}/>
                            </div>
                        </div>:null}
                </div>}
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        searchedData: state.searchedData,
        isSearching: state.isSearching,
        postData: state.postData
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        setPostData: (postData)=> 
            dispatch({type: actionTypes.SET_POST_DATA, postData: postData}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)