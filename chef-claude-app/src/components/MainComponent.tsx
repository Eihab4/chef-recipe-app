import { useState } from "react";
import { IngredientsList } from "./IngredientsListComponent";

export default function Main() {

    const [ingredients, setAddIngredient] = useState<string[]>([])
    
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
                <IngredientsList ingredients={ ingredients} />
            </main>
        </>
    )
}