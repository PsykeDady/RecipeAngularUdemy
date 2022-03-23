import { Ingredient } from "./Ingredient.model";

import { StringsUtils } from "../utilities/strings.utils";

export class Ingredients {
	private _ingredients : Ingredient []; 

	constructor(...ingredients:Ingredient[]){
		this._ingredients=[]
		if (ingredients) ingredients.forEach(v=> Ingredients.push(this._ingredients,v));
	}

	get ingredients () {
		return this._ingredients.map(v=>{return new Ingredient(v.name,v.qta);});
	}

	push (ingredient : Ingredient) {
		Ingredients.push(this._ingredients,ingredient);
	}

	edit (ingredient:Ingredient){
		Ingredients.edit(this._ingredients,ingredient)
	}

	private static push(ingredients: Ingredient[], ingredient:Ingredient){
		let changed: boolean = false;
		ingredient = new Ingredient(StringsUtils.getCapitalizedName(ingredient.name), ingredient.qta)
		ingredients.forEach(
			v=> {
				if(v.name===ingredient.name) {
					changed=true; 
					v.qta+=ingredient.qta
				}
			}
		);
		if (!changed)ingredients.push(ingredient);
	}

	private static edit(ingredients: Ingredient[], ingredient:Ingredient){
		ingredient = new Ingredient(StringsUtils.getCapitalizedName(ingredient.name), ingredient.qta)
		ingredients.forEach(
			v=> {
				if(v.name===ingredient.name) {
					v.qta=ingredient.qta
				}
			}
		);
	}


	public remove(ingredient:Ingredient){
		this.removeByName(ingredient.name);
	}

	public removeByName(iName : string) {
		this._ingredients=this._ingredients.filter(v=>{
			return StringsUtils.getCapitalizedName(iName) !=v.name;
		})
	}

	public toString():string{
		return '['+(this.ingredients.length==0? "" : this.ingredients.map(v=>{
			return v.name+" "+v.qta;
		}).reduce((prev,next)=>prev+","+next))+']';
	}

}