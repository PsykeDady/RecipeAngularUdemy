import { Ingredient } from "./Ingredient.model";
import { Ingredients } from "./Ingredients.model";

export class Recipe{
	public name:string; 
	public description:string; 
	public imgPath:string; 
	private _ingredients : Ingredients = new Ingredients(); 

	public constructor(name:string, description:string, imgPath:string, ...ingredients: Ingredient[]) {
		this.name= name;
		this.description= description;
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
			+`Description: ${this.description}\n`
			+`ImgPath: ${this.imgPath}\n`
			+`Ingredients: ${this._ingredients.toString()}`;
	}

}