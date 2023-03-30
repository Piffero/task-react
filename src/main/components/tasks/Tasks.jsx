import React from "react";

import Task from "./task-item/Task";

const Tasks = ({tasks, handleTaskCompleted, handleTaskRemover}) => {
    return (
        <div>{tasks.map(task => <Task   task={task} 
                                        handleTaskCompleted={handleTaskCompleted}
                                        handleTaskRemover={handleTaskRemover}/>)}</div>
    );
}

export default Tasks;
