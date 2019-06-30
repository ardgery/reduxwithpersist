import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from '../../helpers/redux/actions/postActions';


export class Posts extends Component { 
    componentWillMount(){
        this.props.fetchPosts();
        console.log("PROPS = ",this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    

    render() {
        console.log("PROPTYPES FETCHPOST = ",this.props.fetchPosts);
        console.log("PROPTYPES NEWPOST = ",this.props.newPost);
        console.log("PROPTYPES POSTS = ",this.props.posts);
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.props.posts.map((item,idx)=>
                        <div key={item.id}>
                            <h3>{item.title}</h3>
                            <p>{item.body}</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired ,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Posts);
