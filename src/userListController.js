import React, { Component } from "react";
import UserDAO from "./models/userDAO";


export default class UserListController extends Component {
    constructor(props) {
        super(props);

        const userDAO = new UserDAO();
        const usersArray = userDAO.getList();

        this.state = {
            userDAO: userDAO,
            usersArray: usersArray,
        };
    }

    render() {
        const { usersArray } = this.state;
        return (
            <div>
                <UserListView usersArray={usersArray} />
            </div>
        );
    }
}


function UserListView(props) {
    const { usersArray } = props;
    return (
        <div>
            <h1>Users</h1>
            <TableView
               objects={usersArray}
            />
        </div>
    );
}


function TableView(props) {
    const { objects } = props;
    return (
        <table>
           <thead>
              <tr>
                 <th>Name</th>
                 <th>Details</th>
              </tr>
           </thead>
           <tbody>
              {objects.map(
                  (object)=>
                  <tr>
                     <td>{object.fullName}</td>
                     <td>
                        <button onClick={null}>Details</button>
                        <button onClick={null}>Delete</button>
                     </td>
                  </tr>
              )}
           </tbody>
        </table>
    );
}
