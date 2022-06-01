import { FormControl } from "@angular/forms";

export class NumberValidator {

	public static readonly NEGATIVE_NUMBER:string="negativenumber";

	private constructor(){}


	public static positiveNumber(f:FormControl):{[s:string]:boolean} {

		let value:number=  f.value as number;

		if(value<0) return {[NumberValidator.NEGATIVE_NUMBER]:true};

		return null;
	}

}
