import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { GenericResponse } from 'src/models/GenericResponse.model';
import { Ingredient } from 'src/models/Ingredient.model';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit, OnDestroy {
	
	private shopping_list_updater: Subscription

	constructor(
			public ingredientService:IngredientsService, 
			private editIngredientService:EditIngredientsService, 
			private http:HttpClient
	){}

	ngOnInit(): void {
		this.ingredientService.fetchList();
		this.shopping_list_updater=interval(5000).subscribe( ()=> {
			this.ingredientService.fetchList();
		} )
	}

	ngOnDestroy(): void {
		this.shopping_list_updater.unsubscribe();
	}

	sendEdit(ingredient:Ingredient){
		this.editIngredientService.ingredient=new Ingredient(ingredient.name,ingredient.qta)
		this.editIngredientService.editMode.emit();
		document.getElementById("centro-shopping-list").scrollTo(0,0)
	}

}
