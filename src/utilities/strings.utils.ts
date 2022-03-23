export class StringsUtils {
	private constructor() {}

	static getCapitalizedName(name:string){
		let trimmedName=name.trim();
		return trimmedName[0]? trimmedName[0].toUpperCase()+trimmedName.slice(1).toLowerCase():"";
	}

	static getLinkName(name:string):string{
		return name.replace(/ /g,"_").toLowerCase();
	}
}