import React, { useState } from 'react';
import { use } from 'react';
import SingleMeal from '../SIngleMeal/SingleMeal';
import "./foodSection.css"
import Cart from '../Cart/Cart';

const FoodSection = ({ foodDataRes }) => {
    
    // console.log(foodDataRes) //output : promise

    const data = use(foodDataRes);
    //  console.log(data.meals) //output: object of Arrays of data

    const meals = data.meals;
    console.log(meals);

    const [cart, setCart] = useState([])
    return (
        <div className='main-container'>
            <div className='meals-section' >
            <h1>This is food seciton</h1>
            <div className='food-card-container'>
            {
                meals.map(meal => <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>)
                }
             </div>
            </div>
            
            <div className='cart'>
                <h2> cart </h2>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default FoodSection;