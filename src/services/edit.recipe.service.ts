import { Recipe } from "src/models/Recipe.model";

export class EditRecipeService {
	private _recipe:Recipe;
	private _new_recipe:Recipe;

	public set recipe (recipe:Recipe) {
		this._recipe=  new Recipe(recipe.name,recipe.descrizione, recipe.imgPath);
		this._recipe.ingredients=recipe.ingredients.filter(()=> true);

		this._new_recipe=new Recipe(recipe.name,recipe.descrizione, recipe.imgPath);
		this._new_recipe.ingredients=recipe.ingredients.filter(()=> true);
	}

	/**
	 * create alias with new_recipe
	 */
	public get new_recipe () {
		return this._new_recipe;
	}

	public reset():void{
		this.recipe=this._recipe;
	}

	public edited():boolean{
		return ! (
				this._recipe.name==this._new_recipe.name &&
				this._recipe.descrizione==this._new_recipe.descrizione &&
				this._recipe.imgPath == this._new_recipe.imgPath &&
				this._recipe.ingredients &&
				this._new_recipe.ingredients &&
				this._recipe.ingredients.length==this._new_recipe.ingredients.length && (this._recipe.ingredients.length==0 ||
				this._recipe.ingredients.map(
					(value, i) => {
						for(let v of this._new_recipe.ingredients){
							if(value.name==v.name){
								return value.qta == v.qta;
							}
						}
						return false;
					}
				).reduce((prev, next)=>{
					return (prev==undefined||prev)&&next;
				}))
			);
	}


}
