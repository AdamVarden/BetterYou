import React from 'react';
import { Input, Checkbox, Button } from 'antd';

class Register extends React.Component {
    state = {
        username:'',
        email:'',
        passowrd:'',
        isAdmin: false,
    }
    onChange = (e) =>{
        if (e.target.name === 'isAdmin'){
            this.setState({
                [e.target.name] : e.target.checked,
            })
        
        } else{
            this.setState({
                [e.target.name] : e.target.value,
            })
        }
    }

    onSubmit = () => {
        console.log(this.state);
    }
    render (){
        return (
            <div>
                <Input name='username' 
                    placeholder='Username' 
                    onChange={e => this.onChange(e)} 
                    value={this.state.username} />
                <Input name='email' 
                    placeholder='Email' 
                    onChange={e => this.onChange(e)} 
                    value={this.state.email} />
                <Input name='password' 
                    placeholder='Password' 
                    type='password' 
                    onChange={e => this.onChange(e)} 
                    value={this.state.password} />
                <Checkbox
                    name='isAdmin'
                    checked={this.state.isAdmin}
                    onChange ={e => this.onChange(e)}
                >
                    Admin?
                </Checkbox>
                <br></br>
                <Button onClick={() => this.onSubmit} type="primary">Primary</Button> 
            </div>
        )
    }
}

export default Register;