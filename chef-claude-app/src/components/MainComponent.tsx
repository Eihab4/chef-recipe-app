import { useState } from "react";
import { IngredientsList } from "./IngredientsListComponent";
import { getRecipeFromMistral } from "../ai";
import { Claude } from "./ClaudeComponent";

export default function Main() {

    const [ingredients, setAddIngredient] = useState<string[]>([])
    
    function addIngredient(formData: FormData) {
    const newIngredient = formData.get("ingredient");
    if (typeof newIngredient === "string" && newIngredient.trim() !== "") {
        setAddIngredient((prev) => [...prev, newIngredient.trim()]);
    } else {
        console.log("Invalid or empty ingredient:", newIngredient);
    }
} 
    const [recipe, setRecipe] = useState<string>("");

    async function getRecipe() {
        const myRecipe = await getRecipeFromMistral(ingredients);
            setRecipe(myRecipe || "");
        
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
                <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
                {recipe && <Claude recipe={recipe} />
                }
            </main>
        </>
    )
}