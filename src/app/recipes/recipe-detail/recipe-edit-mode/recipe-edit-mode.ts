import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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
	ingredients: Ingredient[] = [];
	newDescription:string;
	
	constructor(private recipeService:RecipeService, private router : Router){
		
	}

	ngOnInit(): void {
		this.newDescription = this.recipe.description;
		this.ingredients =  this.recipe.ingredients;
	}

	changeImage(){
		confirm("do you want to change image?");
	}

	trackByFn(index : any) :any {
		return index;  
	}

	salvaModifiche() :void{
		
		this.recipe.description=this.newDescription;
		
		this.recipe.ingredients = this.ingredients; 
		
		this.recipeService.setRecipe(this.recipe);

		this.router.navigate(["/recipes", RecipeService.getLinkName(this.recipe.name)]);
	}

	addIngredient(){
		this.ingredients.push(new Ingredient("",0));
	}

	removeIngredient(indice:number):void{
		this.ingredients=this.ingredients.filter( (v,index) => {
			if(index!=indice) return v;
		}
		)
	}

	annullaModifiche() {
		this.router.navigate(["/recipes", RecipeService.getLinkName(this.recipe.name)]);
	}

	cambia(e:Event, i:number, qtaOrName:string):void {
		let val:any=(e.target as HTMLInputElement).value
		if(qtaOrName==="name"){
			this.ingredients[i].name =  val;
		} else {
			this.ingredients[i].qta = val;
		}
	}
	
}