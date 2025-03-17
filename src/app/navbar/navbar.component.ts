import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuActive = false; // Variabele om bij te houden of het menu open is

  toggleNavbar() {
    this.isMenuActive = !this.isMenuActive;
  }
}
