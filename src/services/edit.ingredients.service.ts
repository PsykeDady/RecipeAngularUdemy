import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/models/Ingredient.model";

export class EditIngredientsService {
	private _ingredient: Ingredient; 
	private _new_ingredient:Ingredient;
	public editMode:EventEmitter<void>=new EventEmitter(); 
	
	public set ingredient (ingredient: Ingredient) {
		this._ingredient=new Ingredient(ingredient.name,ingredient.qta);
		this._new_ingredient=new Ingredient(ingredient.name,ingredient.qta);
	}

	public get new_ingredient (){
		return this._new_ingredient;
	}

	public edited():boolean {
		return  this._ingredient && 
				this._new_ingredient && 
				! (	this._ingredient.name == this._new_ingredient.name && 
					this._ingredient.qta == this._new_ingredient.qta
				  )
		; 
	}
}