import React, { Component } from "react";
import UserDAO from "./models/userDAO";


export default class UserUpdateController extends Component {
    constructor(props) {
        super(props);

        const userSlug = "john-smith-yFtynVaU";
        const userDAO = new UserDAO();
        const userObj = userDAO.getObjectBySlug(userSlug);
        this.state = {
            userObj: userObj,
            slug: userObj.slug,
            email: userObj.email,
            firstName: userObj.firstName,
            lastName: userObj.lastName,
        };
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value,
        });
    }

    onClick(event) {
        event.preventDefault();
        const { slug, email, password, firstName, lastName } = this.state;
        const dao = new UserDAO();
        dao.updateObjectBySlug(slug, email, password, firstName, lastName );
        alert("Update was successful");
    }

    render() {
        const { slug, email, password, firstName, lastName } = this.state;
        const { onEmailChange, onClick } = this;
        return (
            <div>
                 <UserUpdateView
                     slug={slug}
                     email={email}
                     password={password}
                     firstName={firstName}
                     lastName={lastName}
                     onEmailChange={onEmailChange}
                     onClick={onClick}
                 />
            </div>
        );
    }
}


function UserUpdateView(props) {
    const {
        slug, email, password, firstName, lastName, onEmailChange, onClick
    } = props;
    return (
        <div>
           <h1>Update</h1>
           <input
               type="email"
               value={email}
               onChange={onEmailChange}
           />
           <input
               type="password"
               value={password}
               onChange={null}
           />
           <input
               type="text"
               value={firstName}
               onChange={null}
           />
           <input
               type="text"
               value={lastName}
               onChange={null}
           />
           <button onClick={ (event)=>onClick(event) }>Save</button>

        </div>
    );
}
