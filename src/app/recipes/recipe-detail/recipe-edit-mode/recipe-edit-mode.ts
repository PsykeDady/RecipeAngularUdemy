import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EditRecipeGuard } from "src/app/guards/editrecipe.guard";
import { EditedRecipe } from "src/app/services/recipes/editedRecipes.service";
import { RecipeService } from "src/app/services/recipes/recipe.service";
import { Ingredient } from "src/app/shared/ingredient.model";
import { Recipe } from "src/app/shared/recipe.model";

@Component({
	selector:"recipe-edit-mode",
	styleUrls:[],
	templateUrl:"recipe-edit-mode.html"
})
export class RecipeEditMode implements OnInit {

	@Input()
	recipe:Recipe; 
	
	
	constructor(
			private recipeService:RecipeService, 
			private router : Router, 
			private editRecipeGuard:EditRecipeGuard,
			public editedRecipes:EditedRecipe
	){
		
	}

	ngOnInit(): void {
		this.editedRecipes.oldRecipe=this.recipe;
		this.editedRecipes.newRecipe=new Recipe(this.recipe.name,this.recipe.description, this.recipe.imgPath,null);
		this.editedRecipes.newRecipe.ingredients=this.recipe.ingredients;

	}

	changeImage(){
		confirm("do you want to change image?");
	}

	trackByFn(index : any) :any {
		return index;  
	}

	salvaModifiche() :void{
		
		this.recipeService.setRecipe(this.editedRecipes.newRecipe);

		this.router.navigate(["/recipes", RecipeService.getLinkName(this.recipe.name)]);
	}

	addIngredient(){
		this.editedRecipes.newRecipe.ingredients.push(new Ingredient("",0));
	}

	removeIngredient(indice:number):void{
		this.editedRecipes.newRecipe.ingredients=this.editedRecipes.newRecipe.ingredients.filter( (v,index) => {
			if(index!=indice) return v;
		}
		)
	}

	annullaModifiche() {
		this.router.navigate(["/recipes"]);
	}

	cambia(e:Event, i:number, qtaOrName:string):void {
		let val:any=(e.target as HTMLInputElement).value
		if(qtaOrName==="name"){
			this.editedRecipes.newRecipe.ingredients[i].name =  val;
		} else {
			this.editedRecipes.newRecipe.ingredients[i].qta = val;
		}
	}
	
}