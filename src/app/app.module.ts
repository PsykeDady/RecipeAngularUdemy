import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CloseablePopup } from 'src/directives/closeable_popup.directive';
import { IngredientsGuard } from 'src/guards/ingredients.guard';
import { NotFoundsGuard } from 'src/guards/notfounds.guard';
import { RecipesGuard } from 'src/guards/recipes.guard';
import { EditIngredientsService } from 'src/services/edit.ingredients.service';
import { EditRecipeService } from 'src/services/edit.recipe.service';
import { IngredientsService } from 'src/services/ingredients.service';
import { RecipeService } from 'src/services/recipe.service';
import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { CentroComponent } from './centro/centro.component';
import { ListaRicetteComponent } from './centro/ricette/lista-ricette/lista-ricette.component';
import { DettaglioRicettaComponent } from './centro/ricette/ricetta/dettaglio-ricetta/dettaglio-ricetta.component';
import { ModificaRicettaComponent } from './centro/ricette/ricetta/modifica-ricetta/modifica-ricetta.component';
import { RicettaComponent } from './centro/ricette/ricetta/ricetta.component';
import { RicetteComponent } from './centro/ricette/ricette.component';
import { AddIngredientsComponent } from './centro/shopping-list/add-ingredients/add-ingredients.component';
import { IngredientsListComponent } from './centro/shopping-list/ingredients-list/ingredients-list.component';
import { ShoppingListComponent } from './centro/shopping-list/shopping-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HamburgerComponent } from './header/hamburger/hamburger.component';
import { HeaderComponent } from './header/header.component';
import { AuthPageComponent } from './centro/authentication/auth-page/auth-page.component';
import { RicetteAlert } from 'src/dynamics/alertbox/ricette.alert.component';


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
		CloseablePopup,
		RicetteAlert,
		AuthPageComponent
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
