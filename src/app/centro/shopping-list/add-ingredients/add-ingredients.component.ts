import { Component } from '@angular/core';
import { Ingredient } from 'src/models/Ingredient.model';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { IngredientsService } from 'src/services/ingredients.service';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent {
	ingredient:Ingredient = null; 
	private editModeFlag:boolean = false;

	constructor(private ingredientsService:IngredientsService, private editIngredientService: EditIngredientsService){
		this.ingredient= editIngredientService.new_ingredient;

		editIngredientService.editMode.subscribe(()=>{
			this.editModeFlag=true;
			this.ingredient= editIngredientService.new_ingredient;
		})
	}

	salva():void{
		if(this.editMode()){
			this.ingredientsService.edit(this.ingredient);
		} else {
			this.ingredientsService.push(this.ingredient)
		}

		this.pulisci()
	}

	pulisci():void{
		this.editIngredientService.ingredient=new Ingredient("",0);
		this.ingredient=this.editIngredientService.new_ingredient;
		this.editModeFlag = false
	}

	cancella():void{
		if(this.editMode()){
			this.ingredientsService.remove(this.ingredient)
		} 
		
		this.pulisci()
	}

	public editMode():boolean{
		return this.editModeFlag;
	}
	
}
