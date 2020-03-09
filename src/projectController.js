import React, { Component } from "react";
import ProjectDAO from "./models/projectDAO";


function ProjectView(props) {
    return (
        <div>
            <h1>Project</h1>
        </div>
    );
}


export default class ProjectController extends Component {
    constructor(props) {
        super(props);

        const projectDAO = new ProjectDAO();
        const projectArray = projectDAO.getList();

        this.state = {
            projectArray: projectArray,
            projectDAO: projectDAO,
        };
    }

    render() {
        return (
            <div>
                <ProjectView />
            </div>
        );
    }
}
