import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navbar.style.height = "100px";
        if (window.innerWidth < 840) {
          navbar.style.transform = "translateY(-57px)";
        } else {
          navbar.style.height = "50px";
          navbar.style.transform = "translateY(0px)";
        }
      } else {
        navbar.style.height = "100px";
        navbar.style.transform = "translateY(0px)";
      }
    }
  }
}
