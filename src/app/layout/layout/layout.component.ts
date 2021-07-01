import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from 'src/app/animations/fader';
import { slider } from 'src/app/animations/slider';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    fader
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
