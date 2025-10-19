import React from "react"
import "./BlogArticle.css"

class BlogArticle extends React.Component{
    render(){
        return <article style ={
        {backgroundColor:""}
        }className="box">
            <h2>{this.props.title}</h2>
            <p>{this.props.author}</p>
            {/* <p>Step 1 - create a class in another js File  </p> 
            <p>Step 2 - export the class </p> 
            <p>Step 3 - import the JS into index.js </p>
            <p>Step 4 - add it in the React Stritc mode</p> */}
        </article>
    }
}
export default BlogArticle