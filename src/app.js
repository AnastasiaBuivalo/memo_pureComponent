import React, {useRef, useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import * as ReactDOM from 'react-dom'
import './app.css';

const useImputWithValidate = (initialValue)=>{
    const [value, setValue] = useState(initialValue);

    const validateInput = ()=>{
        return value.search(/\d/) >= 0;
    }
    const onChange = (event) =>{
        setValue(event.target.value);
    }

    return {value, validateInput, onChange}
}

const Form = (props)=> {
    // setInputRef = (elem) =>{
    //     this.myRef = elem;
    // }
    // componentDidMount = () =>{
    //     this.myRef.current.focus();
    // }

    const text = useImputWithValidate('');
    const textArea = useImputWithValidate('');

    const color = text.validateInput()? 'text-danger': null;
    //const myRef = useRef(null);

    // useEffect(()=>{
    //     console.log(myRef.current);
    //     myRef.current = text;
    // })

    return (
        <Container>
            <form 
                className="w-50 border mt-5 p-3 m-auto"
                style={{'overflow': 'hidden', 
                'position': 'relative'}}>
                <div className="mb-3">
                    <input 
                    value = {`${text.value}/${textArea.value}`}
                    type="text" 
                    className={`form-control ${color}`}
                    readOnly/>
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input onChange= {text.onChange} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea 
                    onChange={textArea.onChange}
                    // value = {myRef.current} 
                    className="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"></textarea>
                </div>
                <Portal>
                    <Message/>
                </Portal>

            </form>
        </Container>
    )
    
}

const Portal = (props)=>{
    const node = document.createElement('div');
    document.body.appendChild(node);
    return (
        ReactDOM.createPortal(props.children, node)
    )
}

const Message = ()=>{
    return (
        <div 
            style={{'width': '500px', 
                'height': '150px', 
                'backgroundColor': 'red', 
                'position': 'absolute', 
                'right': '0', 
                'bottom': '0'}}>
            Hello
        </div>
    )
}

function App() {
    return (
        <Form/>
    );
}

export default App;
