import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Ingredient } from "src/models/Ingredient.model";
import { EditIngredientsService } from "src/services/edit.ingredients.service";
import { IngredientsService } from "src/services/ingredients.service";

@Injectable()
export class IngredientsGuard implements CanActivate, CanDeactivate<void> {

	constructor(private ingredientService:IngredientsService, private editIngredientService:EditIngredientsService){

	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		this.editIngredientService.ingredient=new Ingredient("",0);
		return true;
	}

	canDeactivate(component: void, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
		if(this.editIngredientService.edited()){
			let cfrm=confirm("Hai dati non salvati, sicuro di voler uscire?");
			if(cfrm){
				this.editIngredientService.ingredient=new Ingredient("",0)
			}
			return cfrm;
		}
		return true;
	}
}