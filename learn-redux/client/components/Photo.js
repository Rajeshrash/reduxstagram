import React from  'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import comments from '../reducers/comments';

const Photo = React.createClass({
    render(){
        return(
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`view/${this.props.post.code }`}><img src={this.props.post.display_src} alt="" className="grid-photo" /></Link>
                    <CSSTransitionGroup transitionName="like"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <span key={this.props.post.likes} className="likes-heart">{this.props.post.likes}</span>
                    </CSSTransitionGroup>
                    <figcaption>
                        <p>{this.props.post.caption}</p>
                        <div className="control-buttons">
                            <button className="likes">&hearts; {this.props.post.likes}</button>
                            <Link className="button" to={`view/${this.props.post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-bubble">
                                    </span>
                                    {comments[this.props.post.code] ? comments[this.props.post.code].length : '0' }
                                </span>
                            </Link>
                        </div>
                    </figcaption>
                </div>
            </figure>
        );
    }
})

export default Photo;