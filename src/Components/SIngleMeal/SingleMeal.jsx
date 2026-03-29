import React from 'react';
import "./SingleMeal.css";

const SingleMeal = ({meal, addToCart}) => {
    return (
        <div className='single-food-card'>
            <img style={{width: "100%"}} src={meal.strMealThumb}/>
            <h5>{meal.strMeal}</h5>
            <button onClick={()=>addToCart(meal)}>Add To Cart</button>
        </div>
    );
};

export default SingleMeal;