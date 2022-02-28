export class Ingredient {

	constructor(public name:string, public qta:number) {}

	public equal(i : Ingredient): boolean {
		return i!=null && this.name==i.name && this.qta==i.qta;
	}
}