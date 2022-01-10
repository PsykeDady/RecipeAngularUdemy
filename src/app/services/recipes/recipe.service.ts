import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "../../shared/recipe.model";

export class RecipeService{
	private _recipes : Recipe [] = [
		new Recipe("Niente","prendi un piatto vuoto, servilo","https://m.media-amazon.com/images/I/51FCjiqxNUL._AC_SL1002_.jpg"),
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
		)
	] ; 

	get recipes() {
		return this._recipes
			.slice();
	}

	getRecipeByName(name:string) : Recipe{
		let returned:Recipe=undefined;
		this._recipes.forEach( v => {
			if(RecipeService.getLinkName(v.name)==name) {
				returned=new Recipe(v.name,v.description, v.imgPath, ...v.ingredients);
			}
		});

		return returned;
	}

	static getLinkName(name:string):string{
		return name.replace(/ /g,"_").toLowerCase();
	}
}