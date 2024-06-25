import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { HouseCardComponent } from '../../component/house-card/house-card.component';
import { CommonModule } from '@angular/common';
import { HouseData } from '../../house-data';
import { HousingDataServiceService } from '../../housing-data-service.service';

@Component({
  selector: 'app-listings',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HouseCardComponent],
  template: `
    <main>
      <app-navbar />
      <section>
        <div class="cardCon">
          <app-house-card *ngFor="let house of houses" [house]="house" />
        </div>
      </section>
    </main>
  `,
  styleUrl: './listings.component.css',
})
export class ListingsComponent {
  houses!: HouseData[];
  constructor(private houseServie: HousingDataServiceService) {
    this.houses = houseServie.getAllHouseListings();
  }
}
