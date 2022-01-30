import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RecipeService } from "src/app/services/recipes/recipe.service";
import { Recipe } from "src/app/shared/recipe.model";

@Component({
	selector:"recipe-edit-mode",
	styleUrls:[],
	templateUrl:"recipe-edit-mode.html"
})
export class RecipeEditMode implements OnInit {

	@Input()
	recipe:Recipe; 

	newDescription:string;
	
	constructor(private recipeService:RecipeService, private router : Router){}

	ngOnInit(): void {
		this.newDescription = this.recipe.description;
	}

	changeImage(){
		confirm("do you want to change image?");
	}

	trackByFn(index, item) :any {
		return index;  
	}

	salvaModifiche() :void{
		this.recipe.description=this.newDescription;

		this.recipeService.setRecipe(this.recipe);

		this.annullaModifiche();
	}

	annullaModifiche() {
		this.router.navigate(["/recipes", RecipeService.getLinkName(this.recipe.name)]);
	}
	
}