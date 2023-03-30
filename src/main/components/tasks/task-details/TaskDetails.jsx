import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../buttons/Button';

import './TaksDetails.css';

const TaskDetails = () => {
    const params = useParams();
    const navegate = useNavigate();

    const handleTaskBackButton = () => {
        navegate('/');
    }

    return ( 
        <div>
            <div className="back-button-container">
                <Button action={handleTaskBackButton}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, facere! Omnis animi blanditiis optio dignissimos.</p>
            </div>
        </div>
     );
}
 
export default TaskDetails;