import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { PaninoComponent } from './panino/panino.component';
import { HeaderBtnComponent } from './header-btn/header-btn.component';
import { FormsModule } from '@angular/forms';
import { RicetteDropdown } from './directives/dropdown.directive';
import { ShoppingListService } from './services/shopping-list/shopping.list.service';
import { AppRouting } from './app.routing';
import { RecipeViewMode } from './recipes/recipe-detail/recipe-view-mode/recipe-view-mode';
import { RecipeEditMode } from './recipes/recipe-detail/recipe-edit-mode/recipe-edit-mode';
import { NewRecipeComponent } from './recipes/recipe-detail/new-recipe/new-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
	HeaderBtnComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
	RecipeViewMode,
	RecipeEditMode,
    ShoppingListComponent,
    ShoppingEditComponent,
    PaninoComponent,
	RicetteDropdown,
	NewRecipeComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRouting
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
