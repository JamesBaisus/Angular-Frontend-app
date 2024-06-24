import { Component, Input } from '@angular/core';
import { Route, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <div class="logo">HOU</div>
      <ul class="navLinks">
        <li><a routerLinkActive="active" routerLink="">Home</a></li>
        <li><a routerLinkActive="active" routerLink="listings">Listings</a></li>
        <li><a routerLinkActive="active" routerLink="about-us">About Us</a></li>
        <li>
          <a routerLinkActive="active" routerLink="contact-us">Contact Us</a>
        </li>
      </ul>
    </header>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
