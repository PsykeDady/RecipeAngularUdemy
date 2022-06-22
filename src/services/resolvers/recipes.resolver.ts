import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { GenericResponse } from "src/models/GenericResponse.model";
import { RecipeService } from "../recipe.service";

@Injectable()
export class RecipesResolver implements Resolve<GenericResponse> {

	constructor(private recipeService :RecipeService){

	}

	resolve(): GenericResponse | Observable<GenericResponse> | Promise<GenericResponse> {
		return this.recipeService.fetchList();
	}
	

}