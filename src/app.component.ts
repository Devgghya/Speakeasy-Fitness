import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  isMenuOpen = signal(false);
  showModal = signal(false);

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  openVault() {
    this.showModal.set(true);
  }

  closeVault() {
    this.showModal.set(false);
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    this.isMenuOpen.set(false);
  }
}