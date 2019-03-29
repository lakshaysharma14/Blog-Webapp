import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost,fetchPostandUser} from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component 
{
    componentDidMount()
    {
        this.props.fetchPostandUser();
    }

    renderlist=()=>{

        return this.props.posts.map(post =>{
            return(
                <div className="item" key={post.id}>
                    <div>
                        <i className="large middle aligned icon user" />
                         
                        <div className="content">
                            <div className="description">
                                <h2><i><b>{post.title}</b></i></h2>
                                <p><i>{post.body}</i></p>
                            </div>
                        </div>
                        <UserHeader uid={post.userId}/>
                    </div>
                </div>
            )

        })
    }

    render() 
    {
       return (
       <div className="ui relaxxed divided list">
            <h1><i><b>Blogs</b></i></h1>
            {this.renderlist()}
       </div>
       );
            
    }
}

const mapStateToProps = (state)=>
{
    // console.log(state.posts)
    return {posts:state.posts}
}

export default connect(mapStateToProps,{fetchPostandUser:fetchPostandUser})(PostList);