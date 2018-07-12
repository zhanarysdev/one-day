import React, {Component} from 'react'
import {Accounts} from 'meteor/accounts-base'
import {Link} from 'react-router-dom'
class SignUp extends Component {
    state = {
        userName:'',
        userLastName: '',
        userEmail: '',
        userPassword:'',
        userCity: '',
        userType: ''
    }
    render(){
        if(Meteor.user()){
            console.log(Meteor.user())
            this.props.history.push('/cabinet')
        } else {
            console.log('not user')
        }
        
        const registerUser = () => {
            Accounts.createUser({
                email: this.state.userEmail,
                password: this.state.userPassword,
                profile: {
                    name: this.state.userName,
                    lastName: this.state.userLastName,
                    city: this.state.userCity,
                    type: this.state.userType 
                }
            }, (err, result)=>{
                if(err){
                    console.log(err)
                } else {
                    this.props.history.push('/cabinet')
                }
            })
        }
        return(
            <React.Fragment>
                <div id='login' >
                <aside style={{position: 'relative', margin: '40px auto'}}>
                <figure>
                <a href="index.html"><img src="/img/logo_sticky.png" width="155" height="36" data-retina="true" alt="" className="logo_sticky"/></a>
			</figure>
			<form autocomplete="off">
				<div className="form-group">
					<label>Your Name</label>
					<input className="form-control" type="text"
                        onChange={(e)=>{
                            this.setState({
                                userName: e.target.value
                            })
                        }}
                    />
					<i className="ti-user"></i>
				</div>
				<div className="form-group">
					<label>Your Last Name</label>
					<input className="form-control" type="text"
                        onChange={(e)=>{
                            this.setState({
                                userLastName: e.target.value
                            })
                        }}
                    />
					<i className="ti-user"></i>
				</div>
                <div className="form-group">
					<label>Your city</label>
					<input className="form-control" type="text"
                        onChange={(e)=>{
                            this.setState({
                                userCity: e.target.value
                            })
                        }}
                    />
					<i className="ti-user"></i>
				</div>
                <div className="checkboxes">
						<label className=""> Choose type User
						  <input type="checkbox"
                            onClick={(e)=>{
                                this.setState({
                                    userType: 'User'
                                })
                            }}
                          />
						  
						</label>
                        <label className=""> Choose type Owner
						  <input type="checkbox"
                                                        onClick={(e)=>{
                                                            this.setState({
                                                                userType: 'Owner'
                                                            })
                                                        }}
                          />
						  
						</label>
				</div>
				<div className="form-group">
					<label>Your Email</label>
					<input className="form-control" type="email"
                        onChange={(e)=>{
                            this.setState({
                                userEmail: e.target.value
                            })
                        }}
                    />
					<i className="icon_mail_alt"></i>
				</div>
				<div className="form-group">
					<label>Your password</label>
					<input className="form-control" type="password" id="password1"
                        onChange={(e)=>{
                            this.setState({
                                userPassword: e.target.value
                            })
                        }}
                    />
					<i className="icon_lock_alt"></i>
				</div>
				<div className="form-group">
					<label>Confirm password</label>
					<input className="form-control" type="password" id="password2"/>
					<i className="icon_lock_alt"></i>
				</div>
				<div id="pass-info" className="clearfix"></div>
				<a href="#0" className="btn_1 rounded full-width add_top_30"
                    onClick={(e)=>{
                        e.preventDefault()
                        registerUser()
                    }}
                >Register Now!</a>
				<div className="text-center add_top_10">Already have an acccount? <strong><a href="login.html">Sign In</a></strong></div>
			</form>
			<div className="copy">© 2018 Panagea</div>
            </aside>
            </div>
            </React.Fragment>
        )
    }
}
export default SignUp
