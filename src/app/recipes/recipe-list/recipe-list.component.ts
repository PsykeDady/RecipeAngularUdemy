import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe [] = [
    new Recipe('Pasta al sugo','Penne condite con sugo','https://static.cookist.it/wp-content/uploads/sites/21/2017/10/penne-al-sugo-di-pomodoro.jpg'),
    new Recipe('Lasagne','Lasagne con ragu bolognese','https://www.cucchiaio.it/content/cucchiaio/it/ricette/2019/11/lasagne-senza-besciamella/jcr:content/header-par/image-single.img10.jpg/1580462408244.jpg')
  ]; 



  ngOnInit(): void {
  }

}
