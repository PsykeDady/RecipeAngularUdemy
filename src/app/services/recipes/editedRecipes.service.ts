import { Injectable } from "@angular/core";
import { Recipe } from "src/app/shared/recipe.model";
import { RecipeService } from "./recipe.service";

@Injectable()
export class EditedRecipe {

	public oldRecipe: Recipe; 
	public newRecipe: Recipe;

	constructor(public recipeService:RecipeService){
		
	}

	public checkEdited():boolean{
		let edited= false; 
		edited = this.oldRecipe.description === this.newRecipe.description && this.oldRecipe.imgPath === this.newRecipe.imgPath && this.oldRecipe.ingredients.length === this.newRecipe.ingredients.length; 
		let ringredient=this.oldRecipe.ingredients;
		for(let i=0; i< ringredient.length && edited; i++){
			if(ringredient[i]== null || ! ringredient[i].equal(this.newRecipe.ingredients[i])){
				edited=false;
			}
		}
		return edited ;
	}

	public init(rName:string) :void {
		let recipe = this.recipeService.getRecipeByName(rName);

		this.newRecipe=new Recipe(recipe.name,recipe.description,recipe.imgPath, null);
		this.oldRecipe=new Recipe(recipe.name,recipe.description,recipe.imgPath, null);

		this.newRecipe.ingredients=recipe.ingredients.filter(v=>true);
		this.oldRecipe.ingredients=recipe.ingredients.filter(v=>true);

	}
}