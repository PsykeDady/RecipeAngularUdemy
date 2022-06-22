
export class GenericResponse {

	static readonly GET_OK_RESULTS = "results";
	

	constructor(
		public message : string , 
		public code : number ,
		public content : any
	) {}


	getResponse():any{
		if(this.content==null || this.content[GenericResponse.GET_OK_RESULTS]==null) return [];
		return this.content[GenericResponse.GET_OK_RESULTS];
	}
}