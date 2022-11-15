import {memo} from "react"
import {Container} from 'react-bootstrap';
import InputComp from "./input"
const propsCompare = (prevProps, nextProps)=>{
    return nextProps.mail.name === prevProps.mail.name && nextProps.text === prevProps.text
}

const Form = memo((props) => {
    console.log('render');
    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComp/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea value={props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
})


// class Form extends Component {
    
//     shouldComponentUpdate(nextProps){
//         return !(this.props.mail.name === nextProps.mail.name && this.props.text ===nextProps.text)
//     }

//     render = ()=>{
//         console.log('render');
//         return     (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         {/* <input value={this.props.mail} type="email" className='form-control' id="exampleFormControlInput1" placeholder="name@example.com"/> */}
//                         <InputComp/>
//                         </div>
//                         <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea value={this.props.text} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )

//     }

// }

export default Form