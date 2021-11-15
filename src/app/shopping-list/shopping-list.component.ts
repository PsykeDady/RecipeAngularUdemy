import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
  ]

	onClickAdd(ingredient: Ingredient){
		let changed: boolean = false;
		this.ingredients.forEach(
			v=> {
				if(v.name===ingredient.name.toLowerCase().trim()) {
					changed=true; 
					v.qta+=ingredient.qta
				}
			}
		);
		ingredient.name= ingredient.name.toLowerCase().trim()
		if (! changed )this.ingredients.push(ingredient);
	}

}
