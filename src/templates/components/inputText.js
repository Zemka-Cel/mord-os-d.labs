import React from "react";

export default function InputText(props) {
    
    return (
        <>
            <form className="c-inputText">
                <textarea className="c-inputText__textarea" id="textarea" name="text" placeholder="Start writing your notes here..."></textarea>
                <input className="c-inputText__saveBtn" type="submit" value="Save" />
            </form>
        </>
    );

}