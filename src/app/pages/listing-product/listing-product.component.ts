import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';
import { HousingDataServiceService } from '../../housing-data-service.service';
import { HouseData } from '../../house-data';

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
            <img [src]="houseProduct?.photo" alt="" />
          </div>
          <div class="listingInfo">
            <h1>
              Details
              <i class="fa-solid fa-circle-info" style="color: #74C0FC;"></i>
            </h1>
            <hr />
            <div>
              <h3>Housing ID {{ houseProduct?.id }}:</h3>
              <h3>Name: {{ houseProduct?.name }}</h3>
              <h3>Available units: {{ houseProduct?.availableUnits }}</h3>
            </div>
            <div>
              @if (houseProduct?.wifi) {
              <h3>Wifi: available</h3>
              } @else {
              <h3>Wifi: unavailable</h3>
              } @if (houseProduct?.laundry) {
              <h3>Laundry: available</h3>
              } @else {
              <h3>Laundry: unavailable</h3>
              }
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
export class ListingProductComponent {
  houseProduct: HouseData | undefined;

  constructor(
    private houseService: HousingDataServiceService,
    route: ActivatedRoute
  ) {
    this.houseProduct = houseService.getHouseListById(
      Number(route.snapshot.params['id'])
    );
  }
}
