import React, { useEffect } from 'react';
import ListItem from './ListItem'

const TasksList = ({ tasks, onDelete, onToggle }) => {
    return (
        <div className={`tasks-list-items`}>
            {tasks.map((task) => (
                <ListItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TasksList;
