import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/services/recipe.service';
import { StringsUtils } from 'src/utilities/strings.utils';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent {

	constructor(public recipeService:RecipeService, private router:Router){

	}

	getLinkName (recipe_name:string) {
		return StringsUtils.getLinkName(recipe_name);
	}


}
