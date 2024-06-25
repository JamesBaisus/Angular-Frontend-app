import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header>
      <div class="logo">HOU</div>
      <ul class="navLinks">
        <li><a routerLinkActive="active" routerLink="">Home</a></li>
        <li>
          <a routerLinkActive="active" routerLink="/listings">Listings</a>
        </li>
        <li>
          <a routerLinkActive="active" routerLink="/about-us">About Us</a>
        </li>
        <li>
          <a routerLinkActive="active" routerLink="/contact-us">Contact Us</a>
        </li>
      </ul>
      <div class="search">
        <form action="">
          <input type="text" placeholder="Search" id="searchBar" />
          <input type="submit" />
        </form>
      </div>
    </header>
  `,
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
