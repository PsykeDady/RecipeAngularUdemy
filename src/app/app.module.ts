import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { RicetteDropdown } from './directives/dropdown.directive';
import { NotFoundPage } from './errors/NotFoundPage/NotFoundPage';
import { NotFoundsGuard } from './guards/notfounds.guard';
import { HeaderComponent } from './header/header.component';
import { NewRecipeComponent } from './recipes/recipe-detail/new-recipe/new-recipe.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditMode } from './recipes/recipe-detail/recipe-edit-mode/recipe-edit-mode';
import { RecipeViewMode } from './recipes/recipe-detail/recipe-view-mode/recipe-view-mode';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListService } from './services/shopping-list/shopping.list.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
	RecipeViewMode,
	RecipeEditMode,
    ShoppingListComponent,
    ShoppingEditComponent,
	RicetteDropdown,
	NewRecipeComponent,
	NotFoundPage
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRouting
  ],
  providers: [ShoppingListService, NotFoundsGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
