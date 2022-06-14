import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GenericResponse } from "src/models/GenericResponse.model";
import { Recipe } from "src/models/Recipe.model";
import { HttpClientUtils } from "src/utilities/http.client.utils";
import { StringsUtils } from "src/utilities/strings.utils";

@Injectable()
export class RecipeService{
	private _recipes : Recipe [] = [
		/* new Recipe("Niente","prendi un piatto vuoto, servilo","https://m.media-amazon.com/images/I/51FCjiqxNUL._AC_SL1002_.jpg"),
		new Recipe('Pasta al sugo','Penne condite con sugo','https://static.cookist.it/wp-content/uploads/sites/21/2017/10/penne-al-sugo-di-pomodoro.jpg',
			new Ingredient("penne",500),
			new Ingredient("passata di pomodoro",0.5),
			new Ingredient("cipolla",1),
			new Ingredient("basilico",1),
		),
		new Recipe('Lasagne','Lasagne con ragu bolognese','https://www.cucchiaio.it/content/cucchiaio/it/ricette/2019/11/lasagne-senza-besciamella/jcr:content/header-par/image-single.img10.jpg/1580462408244.jpg',
			new Ingredient("Lasagna",1),
			new Ingredient("Carne Macinata",500),
			new Ingredient("passata di pomodoro",1),
			new Ingredient("parmigiano",500),
		),
		new Recipe('Pikachu Incazzato','è un pikachu incazzato a morte, vuole vendetta e ti ucciderà stanotte nel tuo letto credici proprio .com','https://pbs.twimg.com/media/Ey6LVKaUUAA2Ap4.jpg',
			new Ingredient("Pikachu",1),
			new Ingredient("Rabbia",99),
			new Ingredient("Pistola",1)
		) */
	];


	constructor(private http:HttpClient){
		this.fetchList();
	}

	get recipes() {
		return this._recipes
			.slice();
	}

	fetchList():GenericResponse{
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		if(!this.http) return new GenericResponse("http undefined",400,null);
		this.http.post(HttpClientUtils.POST_RECIPES,{}).subscribe(
			risposta=>{
				rispostaGenerica = risposta as GenericResponse;

				let received_list=rispostaGenerica.content["results"] as Recipe [];
				if(! HttpClientUtils.responseOk(rispostaGenerica) || !received_list || received_list.length==0){

					this._recipes=[];
					return rispostaGenerica;
				}

				this._recipes=[];
				for (let r of received_list){
					this._recipes.push(r);
				}
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)


		console.log(rispostaGenerica);
		return rispostaGenerica;
	}

	getRecipeByName(name:string) : Recipe{
		name=StringsUtils.getLinkName(name);
		let returned:Recipe=undefined;
		this._recipes.forEach( v => {
			if(StringsUtils.getLinkName(v.name)==name) {
				returned=new Recipe(v.name,v.descrizione, v.imgPath, ...v.ingredients);
			}
		});

		return returned;
	}

	setRecipe(recipe:Recipe) : GenericResponse {
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);

		this.http.post(HttpClientUtils.POST_EDIT_RECIPES,recipe.toJson()).subscribe(
			risposta=>{
				rispostaGenerica= risposta as GenericResponse;
				if(HttpClientUtils.responseOk(rispostaGenerica)){
					return rispostaGenerica;
				}
				this.fetchList();
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)
		return rispostaGenerica;
	}

	removeRecipe(recipe:Recipe){
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_REMOVE_RECIPES,recipe.toJson()).subscribe(
			risposta=>{
				rispostaGenerica = risposta as GenericResponse;
				if(HttpClientUtils.responseOk(rispostaGenerica)){
					return rispostaGenerica;
				}
				this.fetchList();
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)
	}

	addRecipe(recipe : Recipe){
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_ADD_RECIPES,recipe.toJson()).subscribe(
			risposta=>{
				rispostaGenerica = risposta as GenericResponse;
				if(HttpClientUtils.responseOk(rispostaGenerica)){
					return rispostaGenerica;
				}
				this.fetchList();
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)
	}

}

/**
 *
		let rispostaGenerica:GenericResponse = new GenericResponse("",200,null);
		this.http.post(HttpClientUtils.POST_RECIPES,{}).subscribe(
			risposta=>{
				rispostaGenerica = risposta as GenericResponse;
				rispostaGenerica.content["results"]
				if(HttpClientUtils.responseOk(rispostaGenerica)){
					return rispostaGenerica;
				}
				this.fetchList();
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)
 */
