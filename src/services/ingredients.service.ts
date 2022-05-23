import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericResponse } from "src/models/GenericResponse.model";
import { Ingredient } from "src/models/Ingredient.model";
import { Ingredients } from "src/models/Ingredients.model";

@Injectable()
export class IngredientsService {
	private _shopping_list: Ingredients = new Ingredients(
		
	); 

	public constructor(private http:HttpClient){
		console.log("get");
		http.post("http://localhost:8080/ingredients",{}).subscribe( risposta=>{
				let rispostaGenerica:GenericResponse = risposta as GenericResponse;
				console.log("risposta as GenericResponse",rispostaGenerica);
				console.log(`ingredienti: ${(rispostaGenerica.content["results"] as Ingredient[]).map(v=>v.name+"("+v.qta+")").reduce((p,c)=>p+"|"+c)}`)
			}
		)
	}
	

	get shopping_list () {
		
		return this._shopping_list.ingredients;
	}

	edit (ingredient:Ingredient) {
		this._shopping_list.edit(ingredient);
	}

	push (ingredient : Ingredient) {
		this._shopping_list.push(ingredient);
	}

	remove (ingredient:Ingredient){
		this._shopping_list.remove(ingredient);
	}
}