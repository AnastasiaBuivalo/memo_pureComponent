import {useContext} from "react"
import dataContext from "./context";
const InputComp = ()=>{
    const context = useContext(dataContext);
    return(
        <input value={context.mail} 
        type="email" className='form-control' 
        id="exampleFormControlInput1" 
        placeholder="name@example.com"
        onFocus = {context.forceChangeMessage}
        />
    )
}

// class InputComp extends Component{
//     render(){
//         return(
//             <Consumer>
//             {
//                 value =>{
//                     return (<input value={value.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/>)
//                 }
//             }
//         </Consumer>
//         )

//     }
// }

export default InputComp
