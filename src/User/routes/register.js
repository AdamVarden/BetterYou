import React from 'react';

class Register extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
    };
    change = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <form>
                <input
                    name='firstName'
                    placeholder="First Name"
                    value={this.state.firstName}
                    //onChange={e => this.setState({firstName: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    className="input"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    //onChange={e => this.setState({lastName: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    className="input"
                    name="username"
                    placeholder="Username"
                    value={this.state.username}
                    //onChange={e => this.setState({username: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    //onChange={e => this.setState({email: e.target.value})}
                    onChange={e => this.change(e)}
                />
                <br />
                <input
                                    className = "input"

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
export default Register;