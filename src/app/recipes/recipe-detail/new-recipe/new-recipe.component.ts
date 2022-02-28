import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EditRecipeGuard } from 'src/app/guards/editrecipe.guard';
import { RecipeService } from 'src/app/services/recipes/recipe.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {

	ingredients: Ingredient[] = [];
	description: string = "";
	name: string="";
	imgpath: string="";

	constructor(private router: Router, private recipeService : RecipeService, private editRecipeGuards : EditRecipeGuard){
		
	}
	
	hasImage():boolean{
		return this.imgpath!=null && this.imgpath !== "";
	}

	addIngredient(){
		this.ingredients.push(new Ingredient("",0));
	}

	removeIngredient(indice:number):void{
		this.ingredients=this.ingredients.filter( (v,index) => {
			if(index!==indice) return v;
		}
		)
	}

	trackByFn(index : any) :any {
		return index;  
	}

	chooseFile():void{
		let el:HTMLInputElement =document.createElement("input")
		el.type="file";
		el.onchange = e => {
			var file : File = el.files[0];
			var reader : FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = lettura => {
				this.imgpath = ""+reader.result;
			} 
		}
		
		el.click();
		el.remove();
	}

	salvaModifiche() :void{
		let recipe:Recipe = new Recipe(this.name,this.description, this.imgpath );
		recipe.ingredients= this.ingredients;

		this.recipeService.addRecipe(recipe);

		this.router.navigate(["/recipes", RecipeService.getLinkName(recipe.name)]);
	}
	annullaModifiche() {
		this.editRecipeGuards.flg = this.ingredients.length ===0 && this.description === "" && this.name === "" && this.imgpath === "";

		this.router.navigate(["/recipes"]);
	}

	cambia(e:Event, i:number, qtaOrName:string):void {
		let val:any=(e.target as HTMLInputElement).value
		if(qtaOrName==="name"){
			this.ingredients[i].name =  val;
		} else {
			if(val>0) {
				this.ingredients[i].qta = val;
			}
		}
	}
}
