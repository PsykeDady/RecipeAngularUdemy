import { Component } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient.model';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent {

	constructor(public ingredientService:IngredientsService, private editIngredientService:EditIngredientsService){

	}

	sendEdit(ingredient:Ingredient){
		this.editIngredientService.ingredient=new Ingredient(ingredient.name,ingredient.qta)
		this.editIngredientService.editMode.emit();
		document.getElementById("centro-shopping-list").scrollTo(0,0)
	}

}
