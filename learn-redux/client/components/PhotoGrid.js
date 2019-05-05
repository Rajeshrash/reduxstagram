import React from 'react'
import { Link } from 'react-router'

import Photo from './Photo'

const PhotoGrid = React.createClass({
    render(){
        console.log("hello")
        console.log(this.props.posts)
        return(
            <div className="photo-grid">
            { this.props.posts.map((post,i)=> <Photo key={i} i={i} {... this.props} post={post} /> ) }
            </div>
        );
    }
})

export default PhotoGrid;