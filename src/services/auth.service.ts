import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpClientUtils } from "src/utilities/http.client.utils";

@Injectable()
export class AuthService {

	private static readonly TOKEN_STRING="token" 
	
	constructor(private http:HttpClient){

	}

	signin(user:string, password:string){
		return this.http.post(HttpClientUtils.POST_AUTH_SIGNIN,{"user":user,"password":password});
	}

	signup(user:string, password:string){
		return this.http.post(HttpClientUtils.POST_AUTH_SIGNUP,{"user":user,"password":password});
	}

	logout(){
		localStorage.removeItem(AuthService.TOKEN_STRING);
	}

	private storeToken(token:string):void {
		localStorage.setItem(AuthService.TOKEN_STRING,token);
	}

	private getToken():string {
		return localStorage.getItem(AuthService.TOKEN_STRING)
	}

}