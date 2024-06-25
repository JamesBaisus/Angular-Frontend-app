import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-listing-product',
  standalone: true,
  imports: [NavbarComponent],
  template: `
    <main>
      <app-navbar />
      <section>
        <div class="listingCon">
          <div class="imageCon">
            <img src="/assets/example-house.jpg" alt="" />
          </div>
          <div class="listingInfo">
            <h1>
              Details
              <i class="fa-solid fa-circle-info" style="color: #74C0FC;"></i>
            </h1>
            <hr />
            <div>
              <h3>Name: house name</h3>
              <h3>Available units: 5</h3>
            </div>
            <div>
              <h3>Wifi: available</h3>
              <h3>Laundry: available</h3>
            </div>
            <h1>
              Location
              <i class="fa-solid fa-location-pin" style="color: #c84646;"></i>
            </h1>
            <hr />
            <div>
              <h3>City: San Jose</h3>
              <h3>State: California</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  `,
  styleUrl: './listing-product.component.css',
})
export class ListingProductComponent {}
