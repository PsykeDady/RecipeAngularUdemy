import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPage } from "./errors/NotFoundPage/NotFoundPage";
import { NotFoundsGuard } from "./guards/notfounds.guard";
import { NewRecipeComponent } from "./recipes/recipe-detail/new-recipe/new-recipe.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes: Routes = [
	{path:'recipes', component: RecipesComponent, children: [
		{path:'newRecipe', component: NewRecipeComponent},
		{path:':name', component: RecipeDetailComponent}
	]},
	{path:'shopping', component: ShoppingListComponent},
	{path:"notfound",component: NotFoundPage, canActivate:[NotFoundsGuard], canDeactivate:[NotFoundsGuard]},
	{path:"", redirectTo:'recipes', pathMatch:"full"},
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