import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IMenuCategory } from '../interfaces/i-menu-category';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuCategoryService extends ApiService<IMenuCategory>{

  constructor(public http: HttpClient) {
    super(apiPaths.menu.menuCategories, http);
  }
}
