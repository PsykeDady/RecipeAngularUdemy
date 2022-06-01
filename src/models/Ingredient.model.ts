export class Ingredient {

	constructor(public name:string, public qta:number, public unit?:string) {
		unit=unit||"";
	}

	public equal(i : Ingredient): boolean {
		return i!=null && this.name==i.name && this.qta==i.qta;
	}

	public toJson(){
		return {
			"name":this.name,
			"qta":this.qta
		}
	}
}
