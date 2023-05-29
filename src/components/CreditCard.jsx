import React from "react";
function CreditCard(props) {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  return (
    <div className="CreditCard" style={divStyle}>
      <div className="type">
        <img src={props.image} alt={props.bank} />
        <div className="number">{props.number}</div>
        <div className="expires-bank">
          <span>{props.expirationMonth}/{props.expirationYear}</span>
          <span className="bank">{props.bank}</span>
        </div>
        <div className="owner">{props.owner}</div>
      </div>
    </div>
  );
}
export default CreditCard;


