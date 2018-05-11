import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

// Ref (ref) provide a way to access DOM nodes or React elements created in the render method.


let AddTodo = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                onSubmit={ e =>{
                    e.preventDefault()
                    // The trim() method removes whitespace from both sides of a string.
                    // 空字符只是false，非空是true
                    if (!input.value.trim()) {
                        return; 
                    }
                    dispatch(addTodo(input.value))
                    input.value = "";
                }}
            >
                <input
                        ref={node => {
                        input = node 
                    }}
                />
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div> 
    )
}

AddTodo = connect()(AddTodo);

export default AddTodo;

