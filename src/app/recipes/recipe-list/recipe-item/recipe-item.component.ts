import { Component, Input} from '@angular/core';
import { RecipeService } from 'src/app/services/recipes/recipe.service';
import { Recipe } from '../../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {

	@Input() recipe:Recipe;

	getLinkName () {
		return RecipeService.getLinkName(this.recipe.name);
	}
}
