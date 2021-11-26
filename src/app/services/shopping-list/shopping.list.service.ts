import { Ingredient } from "../../shared/ingredient.model";
import { Ingredients } from "../../shared/ingredients.model";

export class ShoppingListService {
	public _shopping_list : Ingredients = new Ingredients(
		new Ingredient("Farina",0.5),
		new Ingredient("Acqua",1),
		new Ingredient("Lievito di birra",0.3),
		new Ingredient("Polpa di pomodoro,",1),
		new Ingredient("Gorgonzola",1),
		new Ingredient("Mozzarella di bufala",1),
		new Ingredient("Fontina",1),
		new Ingredient("Parmigiano",1)
	 ) ; 

	get shopping_list () {
		return this._shopping_list.ingredients;
	}

	push (ingredient : Ingredient) {
		this._shopping_list.push(ingredient);
	}
}