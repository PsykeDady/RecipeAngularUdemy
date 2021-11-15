import { Component, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent  {

	inputName: string ;
	inputQta: number ; 

	@Output() clickAdd : EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

	disabledAdd(){
		return ! this.inputName || ! this.inputQta || this.inputQta<=0 ;
	}

	disabledClear(){
		return ! this.inputName && ! this.inputQta ;
	}

	onAddClick(){
		this.clickAdd.emit(new Ingredient(this.inputName,this.inputQta))
		this.onClearClick();
	}

	onClearClick(){
		this.inputName=""; 
		this.inputQta=undefined;
	}
 
	errorQta() {
		return this.inputQta<=0? 
			{
				color:"red",
				boxShadow:"0px 0px 7px 3px pink inset"
			} : 
			{}
		;
	}
}
