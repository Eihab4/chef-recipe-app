interface IIngredientsList{
    ingredients:string[]
}

export function IngredientsList(props:IIngredientsList) {
    const ingredientsList = props.ingredients.map((i, index) => 
        i !== "" && <li key={index}>{i}</li>
    );
    return (
        <>
            <h1>IngredientsList</h1>
            {ingredientsList.length>0 && <section>
                    <h2>Our Recipe Ingredient </h2>
                    <ul className="ingredient-list">
                        {ingredientsList}
                    </ul>
                    {props.ingredients.length>4 && <div className="get-recipe-container">
                        <div>
                            <h3>Let's have some food</h3>
                            <p>we are generating your recipe</p>
                        </div>
                        <button>generate recipe</button>
                    </div>}

                </section>}
        </>
    )
}