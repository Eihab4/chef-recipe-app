import { useState } from "react";

export default function Main() {

    const [ingredients, setAddIngredient] = useState<string[]>([])
    const ingredientsList = ingredients.map((i, index) => 
        i !== "" && <li key={index}>{i}</li>
    );
    function addIngredient(formData:FormData) {
        const newIngredient = formData.get("ingredient");
        if (typeof newIngredient === "string") {
            setAddIngredient((prev) => [...prev, newIngredient]);
        }
        console.log(newIngredient)
    } 
    return (
        <>
            <main>
                <form className="add-ingredient-form" action={addIngredient}>
                    <input
                        type="text"
                        placeholder="Add Ingredient"
                        name="ingredient"
                    />
                    <button >+ Add Ingredient</button>
                </form>
               {ingredientsList.length>0 && <section>
                    <h2>Our Recipe Ingredient </h2>
                    <ul className="ingredient-list">
                        {ingredientsList}
                    </ul>
                    {ingredients.length>4 && <div className="get-recipe-container">
                        <div>
                            <h3>Let's have some food</h3>
                            <p>we are generating your recipe</p>
                        </div>
                        <button>generate recipe</button>
                    </div>}

                </section>}
            </main>
        </>
    )
}