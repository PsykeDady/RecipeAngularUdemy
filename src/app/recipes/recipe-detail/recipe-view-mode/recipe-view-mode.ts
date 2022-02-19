import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipes/recipe.service";
import { ShoppingListService } from "src/app/services/shopping-list/shopping.list.service";
import { Recipe } from "src/app/shared/recipe.model";

@Component({
	selector:"recipe-view-mode",
	templateUrl:"recipe-view-mode.html",
	styleUrls:["recipe-view-mode.css"]
})
export class RecipeViewMode {
	@Input()
	recipe:Recipe; 

	constructor(private shopping_service : ShoppingListService, private recipeService: RecipeService, private router: Router){

	}
	
	addToShoppingList():void{
		if (! this.recipe.ingredients || this.recipe.ingredients.length==0) {
			alert("no ingredients to add!"); 
			return;
		}

		this.recipe.ingredients.forEach(
			v=> {
				this.shopping_service.push(v);
			}
			
		)
		alert("shopping list updated!")	
	}

	getLinkName():string{
		return RecipeService.getLinkName(this.recipe.name)
	}

	removeRecipe() {
		this.router.navigate(["/recipes"]);
		this.recipeService.removeRecipe(this.recipe);
	}
}