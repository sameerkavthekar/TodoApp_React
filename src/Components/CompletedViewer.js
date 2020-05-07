import React from 'react';

const CompletedViewer = (props) => {

    const totalItems = props.todos.length;

    const completedItems = props.todos.filter(todo => todo.completed===true).length;

    const itemsLeft = totalItems-completedItems;

    return (
        <div style={{display:'flex', textAlign:'center'}}>
            <h5>Total Tasks: {totalItems} | Tasks Completed: {completedItems} | Tasks Left: {itemsLeft}</h5>
        </div>
    );
};

export default CompletedViewer;
