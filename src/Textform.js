import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter Text Here");
    const [myStyle, setmyStyle] = useState({
        backgroundColor: 'blue',
        color: 'white'
    });
    const upperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase", 'success');
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase", 'success');
    }
    const toggleMode = () => {
        if (myStyle.color === 'black') {
            props.showalert("Converted to DarkMode", 'success');
            setmyStyle({
                color: 'white',
                backgroundColor: 'blue'

            })
        }
        else if (myStyle.color === 'white') {
            props.showalert("Converted to LightMode", 'success');
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        }
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>

            <div className="container">
                <div class="form-outline mb-3 ">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                    <textarea className="form-control w-75  " style={myStyle} id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button type="button" class="btn btn-primary my-2 mx-2" onClick={upperCase}>ToUpperCase</button>
                    <button type="button" class="btn btn-primary my-2 mx-2" onClick={lowerCase}>ToLowerCase</button>
                    <button type="button" class="btn btn-primary my-2 mx-2" onClick={toggleMode}>ToggleMode</button>
                </div>
                <p>{text.length && text.split(' ').length} words and {text.length} characters</p>
                <h2>PREVIEW</h2>
                <p>{text}</p>
            </div>

        </>
    )
}
