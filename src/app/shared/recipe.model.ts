
export class Recipe{
	public name:string; 
	public description:string; 
	public imgPath:string; 

	public constructor(name:string, description:string, imgPath:string) {
		this.name= name;
		this.description= description;
		this.imgPath= imgPath;
	}
}