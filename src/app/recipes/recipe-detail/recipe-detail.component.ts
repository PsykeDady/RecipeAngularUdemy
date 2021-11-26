import { Component, Input } from '@angular/core';
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
	index:number=undefined;
	constructor(private recipe_service:RecipeService, private shopping_service : ShoppingListService){
		this.recipe_service.selectedRecipe_event.subscribe(
			(selected) => {
				if(selected>-1){
					if(selected==this.index){
						this.clearAll();
					}else {
						this.index=selected;
						this.recipe=recipe_service.getRecipe(selected);
					}
				} else {
					this.clearAll()
				}
			}
		);
	}

	clearAll(){
		this.recipe=undefined;
		this.index=undefined;
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
