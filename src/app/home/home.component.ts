import { Component, OnInit } from '@angular/core';
import { PopupComponent } from '../popup/popup.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor() { }

  goToAboutMe() {
    window.location.href = '/about';
  }
}
