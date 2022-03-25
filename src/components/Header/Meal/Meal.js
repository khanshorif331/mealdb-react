import React from 'react';

const Meal = ({meal}) => {
    const {id,balance,picture,age,eyeColor,name} = meal
    console.log(meal.balance);
    return (
        <div className='product'>
            <h1> {name}</h1>
            <p>Id is: {id}</p>
            <p>Balance: {balance}</p>
            <img src={picture} alt="" />
            <p>Age: {age}</p>
            <p>Eyecolor: {eyeColor}</p>
        </div>
    );
};

export default Meal;