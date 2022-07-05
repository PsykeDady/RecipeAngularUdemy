import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
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
		this.fetchList().subscribe();
	}

	get recipes() {
		return this._recipes
			.slice();
	}

	fetchList():Observable<GenericResponse>{
		return this.http.post<GenericResponse>(HttpClientUtils.POST_RECIPES,{}).pipe(tap(
			risposta => {
				let risposta2=new GenericResponse("",200,risposta.content); // workaround per applicare metodi su risposta

				if(200<=risposta.code&&risposta.code<300){
					let recipes: Recipe[] =risposta2.getResponse() as Recipe[];
					this._recipes=[];
					for(let rec of recipes){
						this._recipes.push(rec);
					}
				}
			}
		))
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

	setRecipe(recipe:Recipe)  {
		return this.http.post(HttpClientUtils.POST_EDIT_RECIPES,recipe.toJson());
	}

	removeRecipe(recipe:Recipe){
		return this.http.post(HttpClientUtils.POST_REMOVE_RECIPES,recipe.toJson());
	}

	addRecipe(recipe : Recipe){
		return this.http.post(HttpClientUtils.POST_ADD_RECIPES,recipe.toJson());
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
				this.fetchList().subscribe();
			},
			errore=>{
				return new GenericResponse(errore,400,null);
			}
		)
 */
