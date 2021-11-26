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
	@Input() index: number;
	selected:boolean=false;
	constructor (public recipe_service: RecipeService){
		recipe_service.selectedRecipe_event.subscribe(
			iSel=> {
				if(iSel==this.index){
					this.selected=!this.selected;
				} else {
					this.selected=false;
				}
			}
		)
	}

	onClick(){
		return this.recipe_service.select(this.index)
	}


}
