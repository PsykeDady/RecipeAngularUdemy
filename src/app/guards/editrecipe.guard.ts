import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { EditedRecipe } from "../services/recipes/editedRecipes.service";
import { RecipeService } from "../services/recipes/recipe.service";
import { Recipe } from "../shared/recipe.model";

@Injectable()
export class EditRecipeGuard implements CanDeactivate<void> , CanActivate {
	
	public flg:boolean=true;

	constructor(private router: Router, private editedRecipe : EditedRecipe ){

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		let name=route.params["name"];
		this.editedRecipe.init(name);
		return true;
	}

	canDeactivate(component: void, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		
		if(!this.flg){
			this.flg=true;
			let confirmed= confirm("Sicuro di voler abbandonare senza salvare?"); 
			let editingMode:number=currentRoute.queryParams["edit"]; 
			let rname:string=RecipeService.getLinkName(currentRoute.params["name"]);
			if (editingMode){
				return confirmed && this.router.navigate(["/recipes",rname]);
			} else {
				return confirmed;
			}
		}
		return true;
	}
}