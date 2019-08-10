import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Recipes = (props) => {
  console.log("render");
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/api/restricted/data', { headers: {
      'Authorization': localStorage.getItem('token')
    }})
      .then(({data}) => {
        setRecipes(data);
      })
      .catch(error => {
        console.log(error.response);
      });
  }, []);
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => {
        return <div>{JSON.stringify(recipe)}</div>;
      })}
    </div>
  );
};

export default Recipes;
