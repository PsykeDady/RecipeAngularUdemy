import { Component } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list/shopping.list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent  {

	inputName: string ;
	inputQta: number ; 


	constructor(public ingredients: ShoppingListService ) {

	}

	disabledAdd(){
		return ! this.inputName || ! this.inputQta || this.inputQta<=0 ;
	}

	disabledClear(){
		return ! this.inputName && ! this.inputQta ;
	}

	onAddClick(){
		this.ingredients.push(new Ingredient(this.inputName,this.inputQta));
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
