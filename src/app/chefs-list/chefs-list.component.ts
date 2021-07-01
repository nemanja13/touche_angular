import { Component, OnInit } from '@angular/core';
import { IChef } from '../interfaces/i-chef';
import { ChefsService } from '../services/chefs.service';

@Component({
  selector: 'app-chefs-list',
  templateUrl: './chefs-list.component.html',
  styleUrls: ['./chefs-list.component.css']
})
export class ChefsListComponent implements OnInit {

  constructor(private chefsService: ChefsService) { }

  public chefs: IChef[];
  ngOnInit(): void {
    this.getAllChefs();
  }

  getAllChefs(){
    this.chefsService.getAll().subscribe(data => {
      this.chefs = data;
    })
  }

}
