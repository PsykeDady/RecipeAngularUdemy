export class StringUtils {
	private constructor() {}

	static getCapitalizedName(name:string){
		return name[0].toUpperCase()+name.slice(1).toLowerCase();
	}
}