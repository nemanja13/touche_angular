import { Component, OnInit } from '@angular/core';
import { GALLERY_IMG_TYPES } from 'src/app/config/settings/gallery-img-types';
import { IGallery } from 'src/app/interfaces/i-gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-content',
  templateUrl: './gallery-content.component.html',
  styleUrls: ['./gallery-content.component.css']
})
export class GalleryContentComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  public items: IGallery[];
  public filterData: any[] = GALLERY_IMG_TYPES;
  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages(){
    this.galleryService.getAll().subscribe(data => {
      this.items = data;
    });
  }

}
