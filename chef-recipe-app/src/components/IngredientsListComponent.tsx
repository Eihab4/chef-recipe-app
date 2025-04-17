interface IIngredientsList{
    ingredients: string[]
    getRecipe: (ingredients: string[]) => void
}

export function IngredientsList(props:IIngredientsList) {
    const ingredientsList = props.ingredients.map((i, index) => 
        i !== "" && <li key={index}>{i}</li>
    );
    return (
    <>
        <section>
            <h2>Let's generate a recipe with only 4 Ingredients 😋</h2>
            {ingredientsList.length > 0 ? (
                <ul className="ingredient-list">{ingredientsList}</ul>
            ) : (
                <p>No ingredients added yet.</p>
            )}
            {props.ingredients.length >= 4 && (
                <div className="get-recipe-container">
                    <div>
                        <h3>Let's have some food</h3>
                        <p>We are generating your recipe</p>
                    </div>
                    <button onClick={() => props.getRecipe(props.ingredients)}>
                        generate recipe
                    </button>
                </div>
            )}
        </section>
    </>
    );
}