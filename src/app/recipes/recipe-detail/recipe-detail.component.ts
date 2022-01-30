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
	editmode:boolean; 

	constructor(recipe_service:RecipeService, private shopping_service : ShoppingListService, router :ActivatedRoute){

		router.params.subscribe(p=>{
			let name:string=p["name"]
			this.recipe=recipe_service.getRecipeByName(name);
		})

		router.queryParams.subscribe(p=>{
			let editparam = p["edit"]
			this.editmode = editparam === "1" || editparam==="true"
		});
	}

	clearAll(){
		this.recipe=undefined;
	}

	
	

	
}
