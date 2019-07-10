import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts , resetNewPost, setNewPosts} from '../../helpers/redux/actions/postActions';
import {store} from '../../helpers/redux/store';

export class Posts extends Component { 
    constructor(props){
        super(props);
        this.state={
            datas:[],
            loadedData:false
        }
    }

    componentWillMount(){
        this.props.resetNewPost();
    }

    componentDidMount(){
        console.log("PROPS FROM DIDMOUNT = ",this.props);
        console.log("WITH NEW DATA = ",this.props.withNewData);
        if(!this.props.withNewData){
            console.log("MASUK FETCH POSTTT");
            this.props.fetchPosts();
        }
        
        // if(this.props.withNewData){
        //     this.setState({
        //         loadedData:true,
        //         datas:this.props.posts
        //     })
        // }
    }

    componentWillReceiveProps(nextProps) {
        console.log("PROPS BEFORE UNSHIFT = ",this.props);
        // if (nextProps.newPost) {
            
        //     this.props.posts.unshift(nextProps.newPost);


        // }
        
        
        this.setState({
            loadedData:true,
        },()=>{
            // this.props.setNewPosts(this.state.datas);
            console.log("PROPS AFTER UNSHIFT = ",this.props);
            console.log("STATE AFTER SETSTATE = ",this.state);
            this.setState({datas:this.props.posts})
        })
    }
    

    render() {
        const {datas} = this.state;
        console.log("PROPS FROM RENDER =",this.props);
        console.log("STORE GETSTATE = ",store.getState());
        return (
            <div>
                <h1>Posts</h1>
                {
                        datas.map((item,idx)=>{
                            if(item!==undefined && item!==null){
                                return(
                                    <div key={idx}>
                                        <h3>{item.title}</h3>
                                        <p>{item.body}</p>
                                    </div>
                                )
                            }
                        })
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
    withNewData: PropTypes.bool
}

const mapStateToProps = state => ({
    posts:state.posts.items,
    newPost: state.posts.item,
    withNewData:state.posts.withNewData
})

export default connect(mapStateToProps,{fetchPosts,resetNewPost,setNewPosts})(Posts);
