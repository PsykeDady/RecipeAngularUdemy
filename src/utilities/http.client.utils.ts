import { GenericResponse } from "src/models/GenericResponse.model";

export class HttpClientUtils {
	private constructor() {}

	 public static readonly URL_BASE="http://localhost:8080";
	//public static readonly URL_BASE="http://192.168.92.243:8080";
	public static readonly CONTEXT_BASE="recipbe";
	public static readonly INGREDIENTS_BASE="ingredients";
	public static readonly RECIPES_BASE="recipes";

	public static readonly POST_BASE=`${HttpClientUtils.URL_BASE}/${HttpClientUtils.CONTEXT_BASE}`
	public static readonly POST_INGREDIENTS=`${HttpClientUtils.POST_BASE}/${HttpClientUtils.INGREDIENTS_BASE}`
	public static readonly POST_RECIPES=`${HttpClientUtils.POST_BASE}/${HttpClientUtils.RECIPES_BASE}`


	public static readonly POST_ADD_INGREDIENTS=`${HttpClientUtils.POST_INGREDIENTS}/add`;
	public static readonly POST_EDIT_INGREDIENTS=`${HttpClientUtils.POST_INGREDIENTS}/edit`;
	public static readonly POST_REMOVE_INGREDIENTS=`${HttpClientUtils.POST_INGREDIENTS}/delete`;

	public static readonly POST_ADD_RECIPES=`${HttpClientUtils.POST_RECIPES}/add`;
	public static readonly POST_EDIT_RECIPES=`${HttpClientUtils.POST_RECIPES}/edit`;
	public static readonly POST_REMOVE_RECIPES=`${HttpClientUtils.POST_RECIPES}/delete`;


	public static responseOk(rispostaGenerica:GenericResponse):boolean{
		return 200<=rispostaGenerica.code&&rispostaGenerica.code<=300;
	}


}
