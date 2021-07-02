import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import ListStudent from "./pages/students/listStudents";
import ListProfessor from "./pages/professors/listProfessors";
import ListCourses from "./pages/courses/listCourses";
import ListClasses from "./pages/classes/listClasses";
import CreateStudent from "./pages/students/createStudent";
import CreateProfessor from "./pages/professors/createProfessor";
import CreateCourse from "./pages/courses/createCourse";
import CreateClass from "./pages/classes/createClass";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/inicio">
              <Home />
            </Route>
            <Route path="/professores">
              <ListProfessor />
            </Route>
            <Route path="/classes">
              <ListClasses />
            </Route>
            <Route path="/cursos">
              <ListCourses />
            </Route>
            <Route path="/alunos">
              <ListStudent />
            </Route>
            <Route path="/novo-professor">
              <CreateProfessor />
            </Route>
            <Route path="/novo-classe">
              <CreateClass />
            </Route>
            <Route path="/novo-curso">
              <CreateCourse />
            </Route>
            <Route path="/novo-aluno">
              <CreateStudent />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
