import React from "react";
import {CgClose, CgInfo} from "react-icons/cg"
import { useNavigate } from "react-router-dom";

import './Task.css';

const Task = ({task, handleTaskCompleted, handleTaskRemover}) => {
    const navigate = useNavigate();

    const handleTaskDetails = () => {
        navigate(`/${task.title}`)
    };

    return (
        <div className="task-container" 
             style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>
                <div className="task-title" onClick={() => handleTaskCompleted(task.id)}>
                    {task.title}
                </div>
                <div className="buttons-icon-container">
                    <button className="see-task-details-button" onClick={handleTaskDetails}>
                        <CgInfo />
                    </button>
                    <button className="remove-task-button" onClick={() => handleTaskRemover(task.id)}>
                        <CgClose />
                    </button>                    
                </div>
        </div>
    );
}

export default Task;
