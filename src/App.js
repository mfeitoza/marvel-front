import React, { Component } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/home";
import ListStudent from "./pages/Students/listStudents";
import ListProfessor from "./pages/Professors/listProfessors";
import ListCourses from "./pages/Courses/listCourses";
import ListClasses from "./pages/Classes/listClasses";
import CreateStudent from "./pages/Students/createStudent";
import CreateProfessor from "./pages/Professors/createProfessor";
import CreateCourse from "./pages/Courses/createCourse";
import CreateClass from "./pages/Classes/createClass";

import Navbar from "./components/navbar";
import Footer from "./components/footer"

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Switch>
            <Route exact path="/">
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
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
