import React from "react";

function CreditCard(props) {
    const divStyle = {
        backgroundColor: "rgb(17, 170, 153)",
        color: "white",
      };
    return (
        <div class="CreditCard" style={divStyle}>
            <div class="type">
            <img src={props.image} alt={props.bank} />
                <div class="number">{props.number}</div>
                <div class="expires-bank">
                    <span>{props.expiration}</span>
                    <span class="bank">{props.bank}</span>
                </div><div class="owner">{props.owner}</div>
            </div>
        </div>
    )
}
export default CreditCard;