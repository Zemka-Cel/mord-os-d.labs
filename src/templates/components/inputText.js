import React, {useState, useEffect, useContext} from "react";
import { fileContext } from "../../App";
import { windowContext } from "./../views/UserPage";


export default function InputText(props) {

    const { windowState, windowActions } = useContext(windowContext);
    const { files, setFiles } = useContext(fileContext);
    
    const [content, setContent] = useState('');

    useEffect(() => {
        if(props.object)  setContent(props.object.content);
    },[]);

    const handleSave = (event) => {
        event.preventDefault();

        if(props.object){
            let currentFile = files.files.find((element) => element.id === props.object.id);
            let index = files.files.findIndex((element) => element.id === props.object.id);

            files.files.splice(index,1);
            setFiles.setFiles([...files.files, { id: currentFile.id, name: currentFile.name, type: 'text', content: content }]);

        } else{
            setFiles.setFiles([...files.files, { id: files.files.length, name: `Txt file - ${files.files.length}`, type: 'text', content: content }]);
        }

        windowActions.setIsWindowShown(false);
    }
   
    return (
        <>
            <form className="c-inputText" onSubmit={handleSave}> 
                <textarea className="c-inputText__textarea" id="textarea" name="content" value={content} onInput={e => setContent(e.target.value)}></textarea>
                <input className="c-inputText__saveBtn" value="Save" type="submit"/>
            </form>
        </>
    );

}