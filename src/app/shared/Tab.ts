import { TabsEnum } from "./Tabs.enum";

export class Tab {

	public static readonly NOTFOUNDTAB : Tab = new Tab(TabsEnum["OOPS! D:"],"notfound")

	private _name:string; 
	private _link:string; 

	constructor(name:TabsEnum, link:string){
		this._name=TabsEnum[name];
		this._link=link;
	}

	get name () { return this._name;}
	get link () { return this._link;}


	
}