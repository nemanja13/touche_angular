import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiPaths } from '../config/api';
import { IGallery } from '../interfaces/i-gallery';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GalleryService extends ApiService<IGallery>{

  constructor(public http: HttpClient) {
    super(apiPaths.gallery, http);
  }
}
