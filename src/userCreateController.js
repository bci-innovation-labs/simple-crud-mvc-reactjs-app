import React, { Component } from "react";
import UserDAO from "./models/userDAO";


export default class UserCreateController extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        };

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onEmailChange(event) {
        this.setState({ email: event.target.value, });
    }

    onPasswordChange(event) {
        this.setState({ password: event.target.value, });
    }

    onFirstNameChange(event) {
        this.setState({ firstName: event.target.value, });
    }

    onLastNameChange(event) {
        this.setState({ lastName: event.target.value, });
    }

    onClick(event) {
        event.preventDefault();
        const { email, password, firstName, lastName } = this.state;
        console.log(email, password, firstName, lastName);

        const userDAO = new UserDAO();
        userDAO.addObject(email, password, firstName, lastName);

        alert("You have saved your object! Will redirect...");
        // TODO: REDIRECT TO ANOTHER PAGE....
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        const { onEmailChange, onPasswordChange, onFirstNameChange, onLastNameChange, onClick } = this;
        return (
            <div>
                <UserCreateView
                    email={email}
                    onEmailChange={onEmailChange}
                    password={password}
                    onPasswordChange={onPasswordChange}
                    firstName={firstName}
                    onFirstNameChange={onFirstNameChange}
                    lastName={lastName}
                    onLastNameChange={onLastNameChange}
                    onClick={onClick}
                />
            </div>
        );
    }
}


function UserCreateView(props) {
    const {
        email, onEmailChange,
        password, onPasswordChange,
        firstName, onFirstNameChange,
        lastName, onLastNameChange,
        onClick,
    } = props;
    return (
        <div>
            <h1>Create User</h1>
            <input
                placeholder="Email"
                value={email}
                onChange={ (event)=>onEmailChange(event) }
                type="email"
            />
            <br /><br />
            <input
                placeholder="Password"
                value={password}
                onChange={ (event)=>onPasswordChange(event) }
                type="password"
            />
            <br /><br />
            <input
                placeholder="First Name"
                value={firstName}
                onChange={ (event)=>onFirstNameChange(event) }
                type="text"
            />
            <br /><br />
            <input
                placeholder="Last Name"
                value={lastName}
                onChange={ (event)=>onLastNameChange(event) }
                type="text"
            />
            <br /><br />
            <button onClick={ (event)=>onClick(event) }>Save</button>
        </div>
    );
}
