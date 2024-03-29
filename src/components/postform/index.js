import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost,setNewPosts } from '../../helpers/redux/actions/postActions';

export class postform extends Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            body:''
        }
    }

    onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const post = {
            title:this.state.title,
            body:this.state.body
        }
        this.props.createPost(post);
        // this.props.setNewPosts(post);
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title :</label><br/>
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br/>
                    <div>
                        <label>Body :</label><br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange}></textarea>
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

postform.propTypes = {
    createPost: PropTypes.func.isRequired,
    setNewPosts: PropTypes.func.isRequired,
  };
  
  export default connect(null, { createPost,setNewPosts })(postform);
