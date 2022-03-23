import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	CanDeactivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/models/Recipe.model';
import { Tab } from 'src/models/Tab.model';
import { EditRecipeService } from 'src/services/edit.recipe.service';

import { RecipeService } from 'src/services/recipe.service';
import { StringsUtils } from 'src/utilities/strings.utils';

@Injectable()
export class RecipesGuard implements CanActivate, CanDeactivate<void> {
	constructor(private recipeService: RecipeService, private route: Router, public editRecipeService: EditRecipeService) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot	): 
		|	boolean
		|	UrlTree
		|	Observable<boolean | UrlTree>
		|	Promise<boolean | UrlTree> 
		{
		let recipeName: string = route.params["name"]
		
		if(recipeName.toLowerCase()=="newrecipe"){
			this.editRecipeService.recipe = new Recipe("","","");
			return true;
		}

		for (let r of this.recipeService.recipes){
			let nomeRicetta: string = StringsUtils.getLinkName(r.name)
			if (nomeRicetta === recipeName){
				this.editRecipeService.recipe = r;
				return true;
			}
		}
		this.route.navigate(['/', Tab.NOTFOUNDTAB.link]);
		return false;
	}

	canDeactivate(component: void, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		
		if(this.editRecipeService.edited()){
			let cnfrm=confirm("Hai dati non salvati, sicuro di voler uscire?");
			if(cnfrm){
				this.editRecipeService.reset(); 
				return true;
			}
			return false; 
		}
		
		this.editRecipeService.reset(); 

		return true;
	}
}
