import { Recipe } from "src/models/Recipe.model";
import { Ingredient} from "src/models/Ingredient.model";
import { StringsUtils } from "src/utilities/strings.utils";

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
		),
		new Recipe('Pikachu Incazzato','è un pikachu incazzato a morte, vuole vendetta e ti ucciderà stanotte nel tuo letto credici proprio .com','https://pbs.twimg.com/media/Ey6LVKaUUAA2Ap4.jpg',
			new Ingredient("Pikachu",1),
			new Ingredient("Rabbia",99),
			new Ingredient("Pistola",1)
		)
	] ; 

	get recipes() {
		return this._recipes
			.slice();
	}

	getRecipeByName(name:string) : Recipe{
		name=StringsUtils.getLinkName(name);
		let returned:Recipe=undefined;
		this._recipes.forEach( v => {
			if(StringsUtils.getLinkName(v.name)==name) {
				returned=new Recipe(v.name,v.description, v.imgPath, ...v.ingredients);
			}
		});

		return returned;
	}

	setRecipe(recipe:Recipe) : void {
		this._recipes.forEach( v => {
			if(v.name==recipe.name) {
				v.description=recipe.description;
				v.imgPath=recipe.imgPath;
				v.ingredients=recipe.ingredients.filter(ing=>ing.name!="" && ing.qta > 0);
			}
		});
	}

	removeRecipe(recipe:Recipe){
		this._recipes= this._recipes.filter( v => { if(v.name!==recipe.name) return v;})
	}

	addRecipe(recipe : Recipe){
		let newRecipe :Recipe = new Recipe(recipe.name,recipe.description, recipe.imgPath); 
		newRecipe.ingredients = recipe.ingredients.filter(ing=>ing.name!="" && ing.qta > 0);
		this._recipes.push(newRecipe);
	}

}