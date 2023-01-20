import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, ingredients}) => {
    return(

        <div className={style.recipe}>
            <img className={style.image}src={image} alt="" align="top"/>
            <h1 className='title'>{title}</h1>
         <div>
         <div>
        <div>
          <div>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol> 
            <div>
           <small>{calories} Calories</small>
         </div>
       </div>
     </div>
    </div>
</div>
</div>

    );
}

export default Recipe;