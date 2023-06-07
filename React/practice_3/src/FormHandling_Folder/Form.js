import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic:'SQL'
      }
    }
    handleUserNameChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange=(event)=>{
        this.setState({
            comments:event.target.value
        })
    }
    handleChangeTopic=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    handleSubmit=event=>{
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>User Name : </label>
            <input type='text' value={this.state.username} onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleChangeTopic}>
                <option value="Java">Java</option>
                <option value="SQL">SQL</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form
