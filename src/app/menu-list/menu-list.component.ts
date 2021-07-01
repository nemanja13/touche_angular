import { Component, OnInit } from '@angular/core';
import { IMenu } from '../interfaces/i-menu';
import { IMenuCategory } from '../interfaces/i-menu-category';
import { MenuCategoryService } from '../services/menu-category.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor(
    private menuCategoriesService: MenuCategoryService,
    private menuService: MenuService) { }

    public menu: IMenu[];
    public menuCategories: IMenuCategory[];
  ngOnInit(): void {
    this.getAllMenu();
    this.getAllMenuCategories();
  }

  getAllMenu(){
    this.menuService.getAll().subscribe(data => {
      this.menu = data;
    });
  }

  getAllMenuCategories(){
    this.menuCategoriesService.getAll().subscribe(data => {
      this.menuCategories = data;
    });
  }

}
