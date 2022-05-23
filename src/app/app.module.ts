import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CentroComponent } from './centro/centro.component';
import { AppRouting } from './app.routing';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { NotFoundsGuard } from 'src/guards/notfounds.guard';
import { RicetteComponent } from './centro/ricette/ricette.component';
import { ShoppingListComponent } from './centro/shopping-list/shopping-list.component';
import { ListaRicetteComponent } from './centro/ricette/lista-ricette/lista-ricette.component';
import { RecipeService } from 'src/services/recipe.service';
import { DettaglioRicettaComponent } from './centro/ricette/ricetta/dettaglio-ricetta/dettaglio-ricetta.component';
import { RecipesGuard } from 'src/guards/recipes.guard';
import { RicettaComponent } from './centro/ricette/ricetta/ricetta.component';
import { ModificaRicettaComponent } from './centro/ricette/ricetta/modifica-ricetta/modifica-ricetta.component';
import { EditRecipeService } from 'src/services/edit.recipe.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngredientsListComponent } from './centro/shopping-list/ingredients-list/ingredients-list.component';
import { AddIngredientsComponent } from './centro/shopping-list/add-ingredients/add-ingredients.component';
import { IngredientsService } from 'src/services/ingredients.service';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { IngredientsGuard } from 'src/guards/ingredients.guard';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { CloseablePopup } from 'src/directives/closeable_popup.directive';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		CentroComponent,
		NotFoundComponent,
		RicetteComponent,
		ShoppingListComponent,
		ListaRicetteComponent,
		DettaglioRicettaComponent,
		RicettaComponent,
		ModificaRicettaComponent,
		IngredientsListComponent,
		AddIngredientsComponent,
		HamburgerComponent,
		CloseablePopup
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRouting,
		HttpClientModule
	],
	providers: [
		NotFoundsGuard,
		RecipeService,
		RecipesGuard,
		EditRecipeService,
		IngredientsService,
		EditIngredientsService,
		IngredientsGuard
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
