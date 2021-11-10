import { NumberSymbol } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent   {
	recipes:Recipe [] = [
		new Recipe('Pasta al sugo','Penne condite con sugo','https://static.cookist.it/wp-content/uploads/sites/21/2017/10/penne-al-sugo-di-pomodoro.jpg'),
		new Recipe('Lasagne','Lasagne con ragu bolognese','https://www.cucchiaio.it/content/cucchiaio/it/ricette/2019/11/lasagne-senza-besciamella/jcr:content/header-par/image-single.img10.jpg/1580462408244.jpg')
	]; 


	@Output() selected : EventEmitter<Recipe> = new EventEmitter<Recipe>();

	onSelect(iSel:number){
		return this.selected.emit(this.recipes[iSel])
	}

}
