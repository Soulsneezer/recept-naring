import React from "react";
import { Modal, Dialog, Header, Title, Body, Footer, Button } from 'react-bootstrap';
import closeButton from '../images/close-button.png';


class LogIn extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameErrorBox: 'none',
            passwordErrorBox: 'none',
            loginBox: 'block',
            loggedInSucceededBox: 'none',
            modalVisibility: 'block'
        }
    }

    async onChangeUserName(e){
        await this.setState({
            username: e.target.value
        });
        console.log(this.state.username);
    }
    
    async onChangePassword(e){
        await this.setState({
            password: e.target.value
        });
        console.log(this.state.password);
    }

    async onSubmit(e){

        e.preventDefault();

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
                passwordErrorBox: 'none',
                usernameErrorBox: 'none',
                loginBox: 'none',
                loggedInSucceededBox: 'block'
            });

            /*alert('logged in as'+this.state.username);*/
        }      
         
    }


    async heandleCloseModalButton(){
        await this.setState({
            modalVisibility: 'none'
        });
    }




    render(){
        return (
            <div>

                        <Modal.Dialog style={{display: this.state.modalVisibility}}>
                            <Modal.Header>
                               
                                <img
                                    src={closeButton}
                                    style={{marginLeft:'400px', width:'40px', height: '40px', cursor: 'pointer'}}
                                    onClick={this.heandleCloseModalButton.bind(this)}
                                />
                                   
                               
                            </Modal.Header>

                            <Modal.Body>
                                



                            <div className="login-box" style={{display: this.state.loginBox}}>
                    <form onSubmit={this.onSubmit.bind(this)}>

                        <div className="form-group">

                            <label>Användarnamn:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.onChangeUserName.bind(this)}
                            >                       
                            </input>
                            <div className="username-error-box" style={{display: this.state.usernameErrorBox}}>
                                <p style={{color:'red'}}>
                                    Användarnamn får bara innehålla bokstäver och siffror, 
                                    samt måste vara minst sex tecken långt !
                                </p>
                            </div>

                            <label>Lösenord:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.onChangePassword.bind(this)}
                            >
                            </input>
                            <div className="password-error-box" style={{display: this.state.passwordErrorBox}}>
                                <p style={{color:'red'}}>
                                    Lösenord får bara innehålla bokstäver och siffror, 
                                    samt måste vara minst sex tecken långt !
                                </p>
                            </div>

                            <button 
                                type="submit"
                                className="form-control"
                                style={{width:'120px', margin:'auto', marginTop: '50px'}}
                            >
                                Logga in
                            </button>

                        </div>
                        
                    </form>
                </div>

                <div className="login-succeeded-box" style={{display: this.state.loggedInSucceededBox}}>
                    <h3> Du är nu inloggad som {this.state.username} ! </h3>

                </div>
















                            </Modal.Body>

                     
                        </Modal.Dialog>
                
                

            </div>
        )
    }

}
    
export default LogIn;


/*


                <h1>Logga in sida</h1>

                <div className="login-box" style={{display: this.state.loginBox}}>
                    <form onSubmit={this.onSubmit.bind(this)}>

                        <div className="form-group">

                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.onChangeUserName.bind(this)}
                            >                       
                            </input>
                            <div className="username-error-box" style={{display: this.state.usernameErrorBox}}>
                                <p style={{color:'red'}}>
                                    Användarnamn får bara innehålla bokstäver och siffror, 
                                    samt måste vara minst sex tecken långt !
                                </p>
                            </div>

                            <label>Password:</label>
                            <input
                                type="text"
                                className="form-control"
                                onChange={this.onChangePassword.bind(this)}
                            >
                            </input>
                            <div className="password-error-box" style={{display: this.state.passwordErrorBox}}>
                                <p style={{color:'red'}}>
                                    Lösenord får bara innehålla bokstäver och siffror, 
                                    samt måste vara minst sex tecken långt !
                                </p>
                            </div>

                            <button 
                                type="submit"
                                className="form-control"
                                style={{width:'120px', margin:'auto', marginTop: '50px'}}
                            >
                                Logga in
                            </button>

                        </div>
                        
                    </form>
                </div>

                <div className="login-succeeded-box" style={{display: this.state.loggedInSucceededBox}}>
                    <h3> Du är nu inloggad som {this.state.username} ! </h3>

                </div>  */



                /*


                <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>


*/