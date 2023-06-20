import "./App.css";

function Heading(props) {
    return (
        <div className='heading'>
        <span className='about-heading'>
            {props.title}
        </span>
               <hr />
               </div>
    )
}
export default Heading;