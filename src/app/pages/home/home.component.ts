import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, RouterLink, RouterLinkActive],
  template: `
    <main>
      <app-navbar />
      <section>
        <div class="hero">
          <h1>WELCOME TO HOU.inc</h1>
          <h3>A house for you and for everyone</h3>
          <a routerLink="listings" routerLinkActive="active"
            >See our product Listings</a
          >
        </div>
      </section>
    </main>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
