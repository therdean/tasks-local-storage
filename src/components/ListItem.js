import React from 'react';

const ListItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <span className="task-text" onClick={() => onToggle(task.id)}>
                {task.text}
            </span>
            <button className="delete-button" onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </div>
    );
};

export default ListItem;
