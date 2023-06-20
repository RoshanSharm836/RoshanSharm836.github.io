import "./App.css";
function Card(props) {
  return (
    <div className="tenth">
      <i>{">"}</i>
      <span className="item-yr">{props.yr}</span>
      <h4>{props.stand}</h4>
      <p>{props.detail}</p>
    </div>
  );
}
export default Card;
