import { Ingredient } from "src/models/Ingredient.model";
import { Ingredients } from "src/models/Ingredients.model";

export class IngredientsService {
	private _shopping_list: Ingredients = new Ingredients(
		new Ingredient("Farina",0.5),
		new Ingredient("Acqua",1),
		new Ingredient("Lievito di birra",0.3),
		new Ingredient("Polpa di pomodoro",1),
		new Ingredient("Gorgonzola",1),
		new Ingredient("Mozzarella di bufala",1),
		new Ingredient("Fontina",1),
		new Ingredient("Parmigiano",1),
		new Ingredient("Cocacola",0.5),
		new Ingredient("Panna",1),
		new Ingredient("Lievito secco",0.3),
		new Ingredient("Patate",1),
		new Ingredient("Emmental",1),
		new Ingredient("Mozzarella vaccina",1),
		new Ingredient("Sale",1),
		new Ingredient("Pepe",1)
	); 

	get shopping_list () {
		return this._shopping_list.ingredients;
	}

	edit (ingredient:Ingredient) {
		this._shopping_list.edit(ingredient);
	}

	push (ingredient : Ingredient) {
		this._shopping_list.push(ingredient);
	}

	remove (ingredient:Ingredient){
		this._shopping_list.remove(ingredient);
	}
}