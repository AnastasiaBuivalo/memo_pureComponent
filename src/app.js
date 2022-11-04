import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import * as ReactDOM from 'react-dom'
import './app.css';

class Form extends Component {
    setInputRef = (elem) =>{
        this.myRef = elem;
    }
    // componentDidMount = () =>{
    //     this.myRef.current.focus();
    // }

    focusFirstTI = ()=>{
        if(this.myRef)
            this.myRef.focus();
    }
    render() {
        return (
            <Container>
                <form onClick = {this.focusFirstTI}
                 className="w-50 border mt-5 p-3 m-auto"
                 style={{'overflow': 'hidden', 
                 'position': 'relative'}}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input  ref = {this.setInputRef} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <Portal>
                        <Message/>
                    </Portal>

                </form>
            </Container>
        )
    }
    
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
