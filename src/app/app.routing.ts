import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IngredientsGuard } from "src/guards/ingredients.guard";
import { NotFoundsGuard } from "src/guards/notfounds.guard";
import { RecipesGuard } from "src/guards/recipes.guard";
import { AuthPageComponent } from "./centro/authentication/auth-page/auth-page.component";
import { RicettaComponent } from "./centro/ricette/ricetta/ricetta.component";
import { RicetteComponent } from "./centro/ricette/ricette.component";
import { ShoppingListComponent } from "./centro/shopping-list/shopping-list.component";
import { NotFoundComponent } from "./errors/not-found/not-found.component";

const appRoutes : Routes =  [ 
	{path:"recipes", component: RicetteComponent, children:[
		{path:":name", component:RicettaComponent, canActivate:[RecipesGuard], canDeactivate:[RecipesGuard]}
	]},
	{path:"shopping", component: ShoppingListComponent, canActivate:[IngredientsGuard], canDeactivate:[IngredientsGuard]},
	{path:"login", component: AuthPageComponent},
	{path:"notfound",component: NotFoundComponent, canActivate:[NotFoundsGuard], canDeactivate:[NotFoundsGuard]},
	{path:"", redirectTo:"recipes", pathMatch:"full"},
	{path:"**", redirectTo:"notfound"}

]; 

@NgModule({
	declarations:[],
	imports:[
		RouterModule.forRoot(appRoutes)
	],
	providers:[],
	exports:[RouterModule]
})
export class AppRouting {
	
}