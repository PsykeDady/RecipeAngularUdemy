import { Ingredient } from "./Ingredient.model";
import { Ingredients } from "./Ingredients.model";

export class Recipe{
	public name:string;
	public descrizione:string;
	public imgPath:string;
	private _ingredients : Ingredients = new Ingredients();

	public constructor(name:string, descrizione:string, imgPath:string, ...ingredients: Ingredient[]) {
		this.name= name;
		this.descrizione= descrizione;
		this.imgPath= imgPath;
		if(ingredients){
			ingredients.forEach(v=>{this._ingredients.push(v)});
		}
	}

	get ingredients () {
		return this._ingredients.ingredients;
	}

	set ingredients(ingredients : Ingredient[]){
		this._ingredients=new Ingredients();
		ingredients.forEach(v=>{
			this._ingredients.push(
				new Ingredient(v.name,v.qta)
			);
		})
	}

	addIngredient( ingredient : Ingredient) {
		this._ingredients.push(ingredient);
	}

	toString():string{
		return `Recipe Name:${this.name}\n`
			+`Descrizione: ${this.descrizione}\n`
			+`ImgPath: ${this.imgPath}\n`
			+`Ingredients: ${this._ingredients.toString()}`;
	}

	toJson() {
		return {
			"name":this.name,
			"ingredients":this.ingredients,
			"descrizione":this.descrizione,
			"imgPath":this.imgPath
		}
	}

}
