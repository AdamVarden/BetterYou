import React from 'react';

class LogIn extends React.Component{
    state = {
        email: '',
        password: '',
    };
    change = (e)=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render (){
        return (
            <form>
                <input 
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    //onChange={e => this.setState({email: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <input 
                    name="password"
                    type='password'
                    placeholder="Password" 
                    value={this.state.password}
                    //onChange={e => this.setState({password: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <button onClick={e => this.onSubmit(e)}>Submit</button>
            </form>
        );
    }
}
export default LogIn;