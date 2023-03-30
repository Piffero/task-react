import React, { useState } from "react";
import Button from "../../buttons/Button";

import "./TaskAdd.css";

const TaskAdd = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('');
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };
    const handleTaskAddClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    };

    return (
    <div className="task-add-container">
        <input onChange={handleInputChange} value={inputData}
               className="task-add-input" type="text" />
        <div className="task-add-button-container">
            <Button action={handleTaskAddClick}>Adicionar</Button>
        </div>
    </div>
    );
}
 
export default TaskAdd;