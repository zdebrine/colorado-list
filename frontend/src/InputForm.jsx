import React from 'react';

var InputForm = (props) => {
    return (
        <div>
            <form>
                <h3>Place form</h3>
                <div>
                <br/>
                <br/>
                    <label>
                        Place name:
                        <br/>
                        <br/>
                        <input/>
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <label>
                        Description:
                        <br/>
                        <br/>
                        <textarea rows='4' cols='50'/>
                    </label>
                    <br/>
                    <br/>
                    <br/>
                    <label>
                        Image url:
                        <br/>
                        <br/>
                        <textarea rows='1' cols='50'/>
                    </label>
                </div>
            </form>
        </div>
    );
}

export default InputForm;