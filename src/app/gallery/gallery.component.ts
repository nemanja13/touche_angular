import { Component, OnInit } from '@angular/core';
import { IGallery } from '../interfaces/i-gallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }

  public items: IGallery[];
  public filterData: any[] = [
    {
      id: 1,
      filter: "*",
      title: "All"
    },
    {
      id: 2,
      filter: "breakfast",
      title: "Breakfast"
    },
    {
      id: 3,
      filter: "lunch",
      title: "Lunch"
    },
    {
      id: 4,
      filter: "dinner",
      title: "Dinner"
    }
  ]
  ngOnInit(): void {
    this.getAllImages();
  }

  getAllImages(){
    this.galleryService.getAll().subscribe(data => {
      this.items = data;
    })
  }

}
