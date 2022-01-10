import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipes/recipe.service';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping.list.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

	recipe:Recipe=undefined;
	constructor(recipe_service:RecipeService, private shopping_service : ShoppingListService, router :ActivatedRoute){

		router.url.subscribe(url=>{
			let name:string=url[url.length-1].path
			this.recipe=recipe_service.getRecipeByName(name);
		})
	}

	clearAll(){
		this.recipe=undefined;
	}

	addToShoppingList():void{
		console.log(this.recipe.ingredients)
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
	

	
}
