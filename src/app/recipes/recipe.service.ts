import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.mode';
import { Recipe } from './recipe.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Samosa',
  //     'A fried South Asian pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas.',
  //     'https://cdn.pixabay.com/photo/2013/07/21/14/47/samosa-165850__340.jpg',
  //     [
  //       new Ingredient('Potatoes', 2),
  //       new Ingredient('Wheat Flour', 1),
  //       new Ingredient('Oil', 1),
  //       new Ingredient('Onions', 2),
  //       new Ingredient('Peas', 10),
  //     ]
  //   ),
  //   new Recipe(
  //     'Chicken Biryani',
  //     'A savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.',
  //     'https://cdn.pixabay.com/photo/2022/02/12/15/03/biryani-7009119_960_720.jpg',
  //     [
  //       new Ingredient('Chicken', 1),
  //       new Ingredient('Rice', 1),
  //       new Ingredient('Biryani Masala', 1),
  //       new Ingredient('Onions', 2),
  //       new Ingredient('Ghee', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
