import { Component } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  showPopup = false;

  togglePopup() {
    this.showPopup = !this.showPopup;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    if (overlay && popup) {
      if (this.showPopup) {
        overlay.classList.add('fade-in');
        popup.classList.add('fade-in');
        overlay.classList.remove('fade-out');
        popup.classList.remove('fade-out');
        overlay.style.display = 'block';
        popup.style.display = 'block';
      } else {
        overlay.classList.remove('fade-in');
        popup.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        popup.classList.add('fade-out');
        setTimeout(() => {
          overlay.style.display = 'none';
          popup.style.display = 'none';
        }, 500);
      }
    }
  }

  hidePopup() {
    this.showPopup = false;
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    if (overlay && popup) {
      overlay.classList.remove('fade-in');
      popup.classList.remove('fade-in');
      overlay.classList.add('fade-out');
      popup.classList.add('fade-out');
      setTimeout(() => {
        overlay.style.display = 'none';
        popup.style.display = 'none';
      }, 500);
    }
  }

  downloadFile(language: string) {
    let url = '';
    if (language === 'english') {
      url = '/files/RESUME Victor Gallegos.pdf';
    } else if (language === 'spanish') {
      url = '/files/CV Victor Gallegos.pdf';
    }

    const newWindow = window.open(url, '_blank');
    if (newWindow) {
      newWindow.focus();
    }
    this.hidePopup();
  }
}
