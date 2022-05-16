import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/models/Ingredient.model';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { IngredientsService } from 'src/services/ingredients.service';
import { NumberValidator } from 'src/validators/number.validator';

@Component({
  selector: 'app-add-ingredients',
  templateUrl: './add-ingredients.component.html',
  styleUrls: ['./add-ingredients.component.css']
})
export class AddIngredientsComponent implements OnInit{
	ingredient:Ingredient = null; 
	editModeFlag:boolean = false;
	addForm:FormGroup;

	constructor(private ingredientsService:IngredientsService, private editIngredientService: EditIngredientsService){
		this.ingredient= editIngredientService.new_ingredient;

		editIngredientService.editMode.subscribe(()=>{
			this.editModeFlag=true;
			this.ingredient= editIngredientService.new_ingredient;
		})
	}
	ngOnInit(): void {
		this.addForm = new FormGroup ({
			"nomei": new FormControl("",Validators.required),
			"qtai": new FormControl(0,[Validators.required,NumberValidator.positiveNumber])
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
		// this.addForm.setValue({
		// 	"nomei":"",
		// 	"qtai":0
		// })
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
