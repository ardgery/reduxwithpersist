import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts , resetNewPost, setNewPosts} from '../../helpers/redux/actions/postActions';

export class Posts extends Component { 
    constructor(props){
        super(props);
        this.state={
            datas:[]
        }
    }

    componentWillMount(){
        this.props.resetNewPost();
    }

    componentDidMount(){
        console.log("PROPS FROM DIDMOUNT = ",this.props);
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        console.log("PROPS BEFORE UNSHIFT = ",this.props);
        if (nextProps.newPost) {
            
            this.props.posts.unshift(nextProps.newPost);


        }

        this.setState({
            datas:this.props.posts
        },()=>{
            // this.props.setNewPosts(this.state.datas);
            console.log("PROPS AFTER UNSHIFT = ",this.props);
            console.log("STATE AFTER SETSTATE = ",this.state);
        })
    }
    

    render() {
        const {datas} = this.state;
        console.log("STATES FROM RENDER =",this.state);
        return (
            <div>
                <h1>Posts</h1>
                {
                    datas !== undefined || datas.length !== 0?
                        datas.map((item,idx)=>
                            <div key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                            </div>
                        )
                    : null
                }
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    resetNewPost:PropTypes.func.isRequired,
    setNewPosts:PropTypes.func.isRequired,
    posts:PropTypes.array.isRequired ,
    newPost: PropTypes.object ,
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps,{fetchPosts,resetNewPost,setNewPosts})(Posts);
