import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IChef } from '../interfaces/i-chef';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ChefsService extends ApiService<IChef>{

  constructor(public http: HttpClient) {
    super(apiPaths.chefs, http);
  }
}
