import { Injectable } from '@angular/core';
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipes/recipe.service';
import { Tab } from '../shared/Tab';

@Injectable()
export class RecipesGuard implements CanActivate {
	constructor(private recipeService: RecipeService, private route: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): 
		|	boolean
		|	UrlTree
		|	Observable<boolean | UrlTree>
		|	Promise<boolean | UrlTree> 
		{
		let recipeName: string = route.params["name"]
		for (let r of this.recipeService.recipes){
			let nomeRicetta: string = RecipeService.getLinkName(r.name)
			if (nomeRicetta === recipeName){
				return true;
			}
		}
		this.route.navigate(['/', Tab.NOTFOUNDTAB.link]);
		return false;
	}
}
