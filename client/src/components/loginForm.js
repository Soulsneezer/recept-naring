import React from "react";

class LogInForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameErrorBox: 'none',
            passwordErrorBox: 'none',
            loginBox: 'block',
            loggedInSucceededBox: 'none'
        }
    }

    async onChangeUserName(e){
        await this.setState({
            username: e.target.value
        });
    }
    
    async onChangePassword(e){
        await this.setState({
            password: e.target.value
        });
    }

    async onSubmit(e){

        e.preventDefault();

        await this.setState({
            passwordErrorBox: 'none',
            usernameErrorBox: 'none',
        });

        let regularx = /^[\w ]+$/;

        if(this.state.username.length < 6){                     
            await this.setState({
                usernameErrorBox: 'block'
            });
        }
        else if(!regularx.test(this.state.username)){
            await this.setState({
                usernameErrorBox: 'block'
            });
        }
        else if(this.state.password.length < 6){         
            await this.setState({
                passwordErrorBox: 'block'
            });
        }
        else if(!regularx.test(this.state.password)){
            await this.setState({
                passwordErrorBox: 'block'
            });
        }  
        else{
            await this.setState({
                loginBox: 'none',
                loggedInSucceededBox: 'block'
            });
        }
        
    }

    render(){
        return (
            <div className="login-component">
                <form onSubmit={this.onSubmit.bind(this)}>

                    <div className="form-group login-box" style={{display:this.state.loginBox}}>

                        <label>Användarnamn:</label>
                        <input
                            type="text"
                            className="form-control"
                            onChange={this.onChangeUserName.bind(this)}
                        >                       
                        </input>
                        <div className="username-error-box" style={{display: this.state.usernameErrorBox}}>
                            <p style={{color:'red',fontSize:'11px'}}>
                                Användarnamn får bara innehålla bokstäver och siffror, 
                                samt måste vara minst 6 tecken långt !
                            </p>
                        </div>

                        <label className="mt-3">Lösenord:</label>
                        <input
                            type="password"
                            className="form-control"
                            onChange={this.onChangePassword.bind(this)}
                        >
                        </input>
                        <div className="password-error-box" style={{display: this.state.passwordErrorBox}}>
                            <p style={{color:'red',fontSize:'11px'}}>
                                Lösenord får bara innehålla bokstäver och siffror, 
                                samt måste vara minst 6 tecken långt !
                            </p>
                        </div>

                        <button 
                            type="submit"
                            className="form-control loginform-loginbutton btn-outline-secondary"
                            style={{width:'120px', margin:'auto', marginTop: '30px'}}
                        >
                            Logga in
                        </button>

                    </div>                      
                </form>

                <div className="login-succeeded-box" style={{display: this.state.loggedInSucceededBox}}>
                <h4> Inloggad som <span style={{color:'green'}}> {this.state.username} </span> </h4>
                <h3 style={{color:'red'}}> Obs! Inloggning under utveckling </h3>
                </div>

            </div>           
        )
    }
}
    
export default LogInForm;

