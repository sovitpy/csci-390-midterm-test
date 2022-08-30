import React, {} from "react";
import "./Item.css";

function Item(props) {
    return (
        <span key={props.item.id}>{props.item.value}</span>
    );
}

export default Item;