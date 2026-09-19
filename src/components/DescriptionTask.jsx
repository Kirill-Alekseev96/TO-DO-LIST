import { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { descriptionTask } from "../store/slice/tasksSlice";

function DescriptionTask({id,onChangeDescription,description}) {


    const [isDisabled, setIsDisabled] = useState(true);

    const dispatch = useDispatch();

    const handleSave = () => {
        setIsDisabled(true);
        dispatch(descriptionTask({id, description}));
    }

    const handleEdit = () => {
        setIsDisabled(false);
    }


    return (
        <div className="description">
            <label htmlFor="story">Описание задачи:</label>
            <textarea 
                id="story" 
                name="story" 
                rows="5" cols="37"
                maxLength  = '150'
                spellCheck
                disabled = {isDisabled}
                value={description}
                onChange={(e) => onChangeDescription(e.target.value)}
            >

            </textarea>
            <Button onClick = {handleSave}
                className = 'button-save'
                text = "Save"
            />
            <Button onClick = {handleEdit}
                text = "Edit"
                className = 'button-edit'
            />
        </div>
    )
}

export default DescriptionTask;