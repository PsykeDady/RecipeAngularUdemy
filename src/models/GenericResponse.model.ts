import { Ingredient } from "./Ingredient.model";
import { Ingredients } from "./Ingredients.model";

export class GenericResponse {
	

	constructor(
		public message : string , 
		public code : number ,
		public content : any
	) {}

	public contentToIngredients():Ingredients {
		if(this.content==null){
			return null;
		}

		console.log("this.content",this.content);

		for (let indice of this.content["results"] as Ingredient[]){
			let ingredient :Ingredient = indice; 
			console.log(ingredient)
		}

		let name:string = ""; 
		let qta:number =   0;  
		
		return new Ingredients(new Ingredient(name,qta));
	}


}