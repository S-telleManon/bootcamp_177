import React from 'react';
import reactLogo from "./react.png"
import "./exercise3.css"
import "./exercise.css"

class Exercise extends React.Component {
    style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

  render() {
    return (
      <>
        <h1 style={this.style_header}>This is a Header</h1>
        <p className="para">This is a paragraph</p>
        <a href="url">This is a Link</a>
        <form>
          <label htmlFor="name">Enter your Name</label><br />
          <input type="text" id="name" name="name" /><br />
        </form><br></br>
        <img src={reactLogo} alt="React design"></img>
        <h3>This is a List</h3>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul><br></br>
      </>
    );
  }
}

export default Exercise;