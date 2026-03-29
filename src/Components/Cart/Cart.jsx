import React from 'react';

const Cart = ({cart}) => {
    return (
        <div style={{display: "flex", flexDirection: "column", gap: "8px"}}>
            {
                cart.map(item => <div style={{display: "flex",gap: "3px",  justifyContent: "space-between"}} key={item.idMeal}>
                    <h6>{item.strMeal}</h6>
                    <img style={{height: "30px"}} src={item.strMealThumb}></img>
                </div>)
            }
        </div>
    );
};

export default Cart;