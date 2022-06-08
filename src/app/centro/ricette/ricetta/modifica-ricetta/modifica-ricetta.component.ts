import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/models/Ingredient.model';
import { Recipe } from 'src/models/Recipe.model';
import { EditRecipeService } from 'src/services/edit.recipe.service';
import { RecipeService } from 'src/services/recipe.service';
import { StringsUtils } from 'src/utilities/strings.utils';

@Component({
  selector: 'app-modifica-ricetta',
  templateUrl: './modifica-ricetta.component.html',
  styleUrls: ['./modifica-ricetta.component.css']
})
export class ModificaRicettaComponent implements OnInit, OnDestroy{
	recipe:Recipe;
	newRecipe:boolean=false;
	valid:boolean=false;
	subscription:Subscription = null;

	constructor(
			public 	recipeService 		: RecipeService,
			public 	editRecipeService	: EditRecipeService,
			public 	router				: Router,
			private activatedRoute		: ActivatedRoute
	){

	}

	ngOnInit(): void {
		this.subscription=this.activatedRoute.params.subscribe(()=>{
			this.recipe=this.editRecipeService.new_recipe;
			this.newRecipe=this.recipe.name=="";
		})
		this.check();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	hasImg():boolean{
		return this.recipe.imgPath && this.recipe.imgPath!="";
	}

	changeImage(){
		let el:HTMLInputElement =document.createElement("input")
		el.type="file";
		el.onchange = () => {
			var file : File = el.files[0];
			var reader : FileReader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => {
				this.recipe.imgPath = ""+reader.result;
			}
		}

		el.click();
		el.remove();
	}

	removeIngredient(indice:number):void{
		let ai=this.recipe.ingredients.filter( (v,index) => {
			if(index!==indice) return v;
		}
		)
		this.recipe.ingredients=ai;
	}

	trackByFn(index : any) :any {
		return index;
	}

	check(){
		this.valid=true;

		this.recipe.ingredients.forEach(v=> {
			if (v.name=="" ||v.qta<=0) this.valid=false;
		})
	}

	cambia(e:Event, i:number, qtaOrName:string):void {
		let val:string=(e.target as HTMLInputElement).value;
		let style=(e.target as HTMLInputElement).style;
		let ingredient: Ingredient = this.recipe.ingredients[i];
		if(qtaOrName==="name"){
			ingredient.name =  val;
			if(ingredient.name==""){
				style.color="white"
				style.backgroundColor="red"
			} else {
				style.cssText=""
			}
		} else {
			let intval=parseInt(val)
			if(intval>0) {
				ingredient.qta = intval;
				style.cssText=""
			} else {
				style.color="white"
				style.backgroundColor="red"
			}
		}
		this.recipe.ingredients = this.recipe.ingredients.map((v,ind)=>{
			if(ind==i){
				return ingredient;
			}
			return v;
		})
		this.check();
	}

	salvaModifiche():void{
		this.recipe.ingredients.forEach(ing=>{
			if(ing.name==""){
				alert("un ingrediente non può non avere nome!")
			}
		})
		let recipeFound:Recipe=this.recipeService.getRecipeByName(this.recipe.name);
		if(recipeFound){
			this.recipeService.setRecipe(this.recipe);
		} else {
			this.recipeService.addRecipe(this.recipe);
		}
		this.editRecipeService.recipe=this.recipe;
		this.router.navigate(["/recipes", StringsUtils.getLinkName(this.recipe.name)]);
	}

	annullaModifiche():void{
		this.editRecipeService.reset();
		this.router.navigate(["/recipes", StringsUtils.getLinkName(this.recipe.name)]);
	}

	addIngredient(){
		this.recipe.addIngredient(new Ingredient("",0))
		this.check();
	}

}
