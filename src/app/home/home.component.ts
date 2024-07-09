import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { NavigationEnd, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
  
}
