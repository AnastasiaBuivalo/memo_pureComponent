import {useState, useCallback} from "react"
import dataContext from "./context";
import Form from "./form";
import './app.css';

// const {Provider, Consumer} = dataContext;
const {Provider} = dataContext;
// mail: "second@example.com",
// text: 'another text'
function App() {
    const [data, setData] = useState({
        mail:"name@example.com",
        text: 'some text',
        forceChangeMessage: forceChangeMessage
    });

    function forceChangeMessage(){
        setData({...data, mail: 'test'});
    }

    const logger = useCallback(()=>{
        console.log('log');
    }, [])

    return (
        <Provider value ={data}>
            <Form mail={data.mail} text={data.text} func = {logger}/>
            <button 
                onClick={() => setData({
                    mail:"ame@example.com",
                    text: 'some text',
                    forceChangeMessage: forceChangeMessage
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
