import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { RecipeService } from 'src/services/recipe.service';
import { StringsUtils } from 'src/utilities/strings.utils';

@Component({
  selector: 'app-lista-ricette',
  templateUrl: './lista-ricette.component.html',
  styleUrls: ['./lista-ricette.component.css']
})
export class ListaRicetteComponent  implements OnInit, OnDestroy{

	recipeListUpdater: Subscription;

	constructor(public recipeService:RecipeService){}

	ngOnInit(): void {
		this.recipeService.fetchList();
		this.recipeListUpdater = interval(5000).subscribe(()=>{this.recipeService.fetchList().subscribe()});
	}

	ngOnDestroy(): void {
		this.recipeListUpdater.unsubscribe();
	}

	getLinkName (recipe_name:string) {
		return StringsUtils.getLinkName(recipe_name);
	}


}
