import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  projects = [
    {name: 'Personal Portfolio', description: 'Literally this website.', source: 'images/Portfolio-web.png', url: 'victorgallegos.com'},
    {name: 'Tindog', description: 'A website for a brand new app, a Tinder for dogs!', source: 'images/Tindog.webp', url: 'https://tinderformydog.netlify.app'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  goToContact() {
    this.router.navigate(['/home']).then(() => {
      setTimeout(() => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }, 0);
    });
  }
}
