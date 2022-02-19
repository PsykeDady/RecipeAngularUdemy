import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

	constructor(private router: Router, private recipeService : RecipeService){
		
	}
	
	hasImage():boolean{
		return this.imgpath!=null && this.imgpath !== "";
	}

	addIngredient(){
		this.ingredients.push(new Ingredient("",0));
	}

	removeIngredient(indice:number):void{
		console.log(indice)
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
			console.log("file.name",file.name)
			var reader : FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = lettura => {
				
				this.imgpath = ""+reader.result;
				
				console.log("img path after load=",this.imgpath)
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
