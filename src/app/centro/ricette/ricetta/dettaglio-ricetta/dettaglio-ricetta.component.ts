import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/models/Recipe.model';
import { IngredientsService } from 'src/services/ingredients.service';
import { RecipeService } from 'src/services/recipe.service';

@Component({
  selector: 'app-dettaglio-ricetta',
  templateUrl: './dettaglio-ricetta.component.html',
  styleUrls: ['./dettaglio-ricetta.component.css']
})
export class DettaglioRicettaComponent  {

	recipe :Recipe; 
	/* if true, menu is hidden*/
	toggle :boolean;

	constructor(
		private activatedRoute : ActivatedRoute, 
		private recipeService : RecipeService, 
		private router:Router, 
		private ingredientService:IngredientsService
	){
		activatedRoute.queryParams.subscribe(queryParam=>{
			recipeService.fetchList().subscribe(()=>{},error=>{},()=>{
				this.recipe = recipeService.getRecipeByName(activatedRoute.snapshot.params["name"])
				this.toggle=true;
			});
			
		});
		activatedRoute.params.subscribe(v=>{
			this.recipe = recipeService.getRecipeByName(v["name"])
			this.toggle=true;
		});
	}

	goToEdit():void{
		this.router.navigate([],{queryParams:{"editMode":"1"}});
	}

	addToShoppingList():void{
		if (this.recipe.ingredients.length==0){
			alert("Non ho nulla da aggiungere!")
		} else {
			this.recipe.ingredients.forEach(v=>{
				this.ingredientService.push(v);
			});
	
			alert("Ingredienti aggiunti!")
		}
		
		this.toggleScroll()
	}

	cancella(){
		let cnfr=confirm("E se poi te penti? Cancellare?")

		if(cnfr){
			this.recipeService.removeRecipe(this.recipe).subscribe();
			this.router.navigate(["/recipes"])
		} 
		this.toggleScroll()
	}

	toggleScroll(){
		this.toggle=!this.toggle; 
		if(!this.toggle) {
			let steps=32;
			this.sleepScroll(steps,steps)
		}
	}
	
	sleepScroll(steps:number, i:number) :void {
		if(i==0) return;
		let times=500/steps;
		let scrolls=Math.floor(200/steps);
		new Promise((resolve)=>{
			setTimeout(resolve,times)
		}).then( () =>{
			document.getElementById("dettaglioRicetta").scrollBy(0,scrolls);
			this.sleepScroll(steps,i-1);
		})
	}

	hiddenMenu(){
		return this.toggle? "visibility:hidden;display:none;" : "visibility:visible;" 
	}

}
