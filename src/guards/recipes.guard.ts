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
import { map } from 'rxjs/operators';
import { GenericResponse } from 'src/models/GenericResponse.model';
import { Recipe } from 'src/models/Recipe.model';
import { Tab } from 'src/models/Tab.model';
import { EditRecipeService } from 'src/services/edit.recipe.service';
import { RecipeService } from 'src/services/recipe.service';
import { StringsUtils } from 'src/utilities/strings.utils';


@Injectable()
export class RecipesGuard implements CanActivate, CanDeactivate<void> {
	constructor(private recipeService: RecipeService, private router: Router, public editRecipeService: EditRecipeService) {}

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

		return this.recipeService.fetchList().pipe( map(risposta => {
			let risposta2=new GenericResponse("",200,risposta.content); // workaround per applicare metodi su risposta
			let recipes : Recipe[] = (risposta2.getResponse()) as Recipe[];

			for (let recipe of recipes){
				let nomeRicetta: string = StringsUtils.getLinkName(recipe.name)
				if (nomeRicetta === recipeName){
					this.editRecipeService.recipe = recipe;
					return true;
				}
			}
			//this.route.navigate(['/', Tab.NOTFOUNDTAB.link]);
			return this.router.createUrlTree(['/', Tab.NOTFOUNDTAB.link]);
		}) 
		);
		
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
