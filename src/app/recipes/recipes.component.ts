import { Component } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

	selected: Recipe ; 

	select( recipe:Recipe){
		this.selected=recipe;
	}
}
