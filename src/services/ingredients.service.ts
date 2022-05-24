import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Ingredient } from "src/models/Ingredient.model";
import { Ingredients } from "src/models/Ingredients.model";
import { HttpClientUtils } from "src/utilities/http.client.utils";
import { GenericResponse } from "src/models/GenericResponse.model";

@Injectable()
export class IngredientsService {
	private _shopping_list: Ingredients = new Ingredients(
		
	); 

	public constructor(private http:HttpClient){}
	

	get shopping_list () {
		return this._shopping_list.ingredients;
	}

	fetchList():GenericResponse {
		console.log("get")
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_INGREDIENTS,{}).subscribe( 
			risposta=>{
				rispostaGenerica= risposta as GenericResponse;
				console.log("risposta as GenericResponse",rispostaGenerica);
				if(HttpClientUtils.responseOkKo(rispostaGenerica) &&
					rispostaGenerica.content && rispostaGenerica.content["results"] && rispostaGenerica.content["results"].length!=0 
				){
					console.log("ingredients founds: "+rispostaGenerica.content["results"].map(i=>`${i.name},${i.qta}`))
					for( let i of rispostaGenerica.content["results"]){
						this._shopping_list.remove(i);
						this._shopping_list.push(i);
					}
				}
			}, 
			errore => {
				console.log(errore);
				rispostaGenerica= new GenericResponse(errore, 500,null);
			}
		)
		
		return rispostaGenerica;
	}

	edit (ingredient:Ingredient) {
		console.log("push")
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_EDIT_INGREDIENTS,ingredient.toJson()).subscribe( 
			risposta=>{
				rispostaGenerica= risposta as GenericResponse;
				console.log("risposta as GenericResponse",rispostaGenerica);
				if(HttpClientUtils.responseOkKo(rispostaGenerica)){
					this._shopping_list.edit(ingredient);
				}
			}, 
			errore => {
				console.log(errore);
				rispostaGenerica= new GenericResponse(errore, 500,null);
			}
		)
		
		return rispostaGenerica;
	}

	push (ingredient : Ingredient):GenericResponse {
		console.log("push")
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_ADD_INGREDIENTS,ingredient.toJson()).subscribe( 
			risposta=>{
				rispostaGenerica= risposta as GenericResponse;
				console.log("risposta as GenericResponse",rispostaGenerica);
				if(HttpClientUtils.responseOkKo(rispostaGenerica)){
					this._shopping_list.push(ingredient);
				}
			}, 
			errore => {
				console.log(errore);
				rispostaGenerica= new GenericResponse(errore, 500,null);
			}
		)
		
		return rispostaGenerica;
	}

	remove (ingredient:Ingredient){
		console.log("push")
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_REMOVE_INGREDIENTS,ingredient.toJson()).subscribe( 
			risposta=>{
				rispostaGenerica= risposta as GenericResponse;
				console.log("risposta as GenericResponse",rispostaGenerica);
				if(HttpClientUtils.responseOkKo(rispostaGenerica)){
					this._shopping_list.remove(ingredient);
				}
			}, 
			errore => {
				console.log(errore);
				rispostaGenerica= new GenericResponse(errore, 500,null);
			}
		)
		
		return rispostaGenerica;
	}
}