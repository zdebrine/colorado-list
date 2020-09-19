import React from 'react';

class InputForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: null,
            description: null,
            image: null
        }
    }
    
    onTextChange = (event) => {
        var key = event.target.id;
        var value = event.target.value;
        this.setState({
            [key]: value
        })
    }
    onButtonClick = (event) => {
        event.preventDefault();
        //console.log(this.state);
        this.props.onButtonClick(this.state);
        document.getElementById('placeform').reset()
    }

    render() {
        return (
            <div>
                <form id="placeform">
                    <h3>Place form</h3>
                    <div>
                        <br />
                        <br />
                        <label>
                            Place name:
                        <br />
                            <br />
                            <input id="name" onChange={this.onTextChange.bind(this)}/>
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            Description:
                        <br />
                            <br />
                            <textarea id="description" onChange={this.onTextChange.bind(this)} rows='4' cols='50' />
                        </label>
                        <br />
                        <br />
                        <br />
                        <label>
                            Image url:
                        <br />
                            <br />
                            <textarea id="image" onChange={this.onTextChange.bind(this)} rows='1' cols='50' />
                        </label>
                        <button onClick={this.onButtonClick.bind(this)}>Add a Place</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default InputForm;