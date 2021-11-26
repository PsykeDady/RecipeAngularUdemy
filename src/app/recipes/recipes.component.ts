import { Component } from '@angular/core';
import { RecipeService } from '../services/recipes/recipe.service';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent {

	selected: Recipe ; 

}
