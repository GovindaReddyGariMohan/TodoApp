import React, { Component } from "react";
import Header from "./component/Header";
import Form from "./component/form";

class AppTodo extends Component {
     
    render() {

        return (
            <div>
                <Header />
                <Form />
            </div>
        )
    }
}
export default AppTodo;