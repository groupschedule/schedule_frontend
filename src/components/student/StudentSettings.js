import SideBar from './SideBar'
import React, { Component, seEffect, useState} from 'react'
import './studentsettings.css'


class StudentSettings extends Component {
  constructor(props) {
      super(props)

      this.state = {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: ""

      }
      this.handleSubmit=this.handleSubmit.bind(this)
  }

  firsthandler = (event) => {
      this.setState({
          firstName: event.target.value
      })
  }
  lasthandler = (event) => {
      this.setState({
          lastName: event.target.value
      })
  }
  emailhandler = (event) => {
      this.setState({
          email: event.target.value
      })
  }
  phonehandler = (event) => {
      this.setState({
          phone: event.target.value
      })
  }
  passwordhandler = (event) => {
      this.setState({
          password: event.target.value
      })
  }

  // useEffect(() =>{
  //   fetch("/sessions")
  //   .then(r => r.json())
  //   .then(response => setCohortSession(response))
  // },[]);

  // const today_date = new Date()
  // console.log(today_date)
  // const display = cohortSession.filter((cohort) => {
  //   return cohort.date === parseInt(today_date)
  // });

  
  handleSubmit = (event) => {
      alert(`${this.state.firstName} ${this.state.lastName}  Update Successfull !!!!`)
      console.log(this.state);
      this.setState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: '',
          
      })
   event.preventDefault()
      
  }
  render() {
      return (
          <div>
            <div className="row">
              <div className="col-md-2 main-sidebar">
                <SideBar />
              </div>
              <div className="col-md-10">
              <form onSubmit={this.handleSubmit} className="student-settings">
                  <h1>Edit Profile</h1>
                  <label className='form-label'>FastName :</label> <input className='form-control' type="text" value={this.state.FirstName} onChange={this.firsthandler} placeholder="FirstName..." /><br />
                  <label className='form-label'>LasName :</label> <input className='form-control' type="text" value={this.state.lastName} onChange={this.lasthandler} placeholder="Last..." /><br />
                  <label className='form-label'>Email :</label> <input className='form-control' type="text" value={this.state.email} onChange={this.emailhandler} placeholder="Email..." /><br />
                  <label className='form-label'>Phone :</label> <input className='form-control' type="text" value={this.state.phone} onChange={this.phonehandler} placeholder="Phone..." /><br />
                  <label className='form-label'>Password :</label> <input className='form-control' type="password" value={this.state.password} onChange={this.passwordhandler} placeholder="Password..." /><br />
                  
                  <input type="submit" value="Submit" />
              </form>
              </div>
              </div>
          </div>
      )
  }
}

export default StudentSettings
