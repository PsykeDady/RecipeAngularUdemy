import { EventEmitter } from "@angular/core";
import { Tab } from "src/models/Tab.model";
import { TabsEnum } from "src/models/Tabs.enum";

export class RoutesService {
	private static _tabs:Tab[]= [
		new Tab(TabsEnum.Login,"login"),
		new Tab(TabsEnum.Recipes,"recipes"),
		new Tab(TabsEnum["Shopping List"],"shopping")
	];

	public static cambiorotte:EventEmitter<void>= new EventEmitter(); 


	public static getRoutes():Tab[] {
		return this._tabs;
	}

	public static addNotFound():void{
		this._tabs.push(Tab.NOTFOUNDTAB);
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