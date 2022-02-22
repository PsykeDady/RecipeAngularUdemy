import { EventEmitter } from "@angular/core";
import { Tab } from "src/app/shared/Tab";
import { TabsEnum } from "src/app/shared/Tabs.enum";

export class RoutesService {
	private static _tabs:Tab[]= [
		new Tab(TabsEnum.Recipes,"recipes"),
		new Tab(TabsEnum["Shopping List"],"shopping")
	];

	public static cambiorotte:EventEmitter<void>= new EventEmitter(); 


	public static getRoutes():Tab[] {
		return this._tabs;
	}

	public static addNotFound():void{
		this._tabs.push(new Tab(TabsEnum["OOPS! D:"],"notfound"));
		this.cambiorotte.emit();
	}

	public static reset() {
		this._tabs = [
			new Tab(TabsEnum.Recipes,"recipes"),
			new Tab(TabsEnum["Shopping List"],"shopping")
		];
		this.cambiorotte.emit();
	}

}