import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {
  state ={
    firstName : "",
    lastName : "",
    arrJobs: [
        {id:1,name:"Developers",salary:"500$"},
        {id:2,name:"Testers",salary:"400$"},
        {id:3,name:"Project Manager",salary:"1000$"},
    ]
  }
  handleChangeFirstName = (event) => {
      this.setState({
        firstName: event.target.value
      })
  }
  handleChangeLastName = (event) => {
    this.setState({
        lastName: event.target.value
    })
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    console.log("check data in state", this.state)
  }
  render(){
    console.log('>>>>>> call render: ', this.state)
    return (
        <div>
          This is my component
          <form>
            <label htmlFor="fname">First name:</label><br/>
            <input type="text"
                defaultValue={this.state.firstName}
                onChange={(event)=> this.handleChangeFirstName(event)}
            
            />
            <br/>
            <label htmlFor="lname">Last name:</label><br/>
            <input type="text" 
                defaultValue={this.state.lastName}
                onChange={(event)=> this.handleChangeLastName(event)}
            />
            <br/><br/>
            <input type="submit" value="Submit"
                onClick={(event)=>this.handleSubmit(event)}
            />
          </form> 
          <ChildComponent
            name = {this.state.firstName}
            age = {this.state.lastName}
            arrJobs = {this.state.arrJobs}
          />
        </div>
      )
  }
}
export default MyComponent;
