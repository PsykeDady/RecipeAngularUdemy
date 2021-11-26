import { Ingredient } from "./ingredient.model";

import { StringUtils } from "../utils/string.utils";

export class Ingredients {
	private _ingredients : Ingredient []; 

	constructor(...ingredients:Ingredient[]){
		this._ingredients=[]
		if (ingredients) ingredients.forEach(v=> Ingredients.push(this._ingredients,v));
	}

	get ingredients () {
		return this._ingredients.map(v=>{return new Ingredient(StringUtils.getCapitalizedName(v.name),v.qta);});
	}

	push (ingredient : Ingredient) {
		Ingredients.push(this._ingredients,ingredient);
	}

	private static push(ingredients: Ingredient[], ingredient:Ingredient){
		let changed: boolean = false;
		ingredients.forEach(
			v=> {
				if(v.name===ingredient.name.toLowerCase().trim()) {
					changed=true; 
					v.qta+=ingredient.qta
				}
			}
		);
		ingredient.name= ingredient.name.toLowerCase().trim()
		if (! changed )ingredients.push(ingredient);
	}



}