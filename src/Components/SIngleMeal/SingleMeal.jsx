import React from 'react';
import "./SingleMeal.css";

const SingleMeal = ({meal}) => {
    return (
        <div className='single-food-card'>
            <img style={{width: "100%"}} src={meal.strMealThumb}/>
            <h3>{ meal.strMeal}</h3>
        </div>
    );
};

export default SingleMeal;