import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseData } from '../../house-data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card">
      <img [src]="house.photo" alt="" />
      <div class="cardInfo">
        <h1>{{ house.name }}</h1>
        <h2>{{ house.city }}, {{ house.state }}</h2>
        <a [routerLink]="['/listing-product', house.id]">View housing</a>
      </div>
    </div>
  `,
  styleUrl: './house-card.component.css',
})
export class HouseCardComponent {
  @Input() house!: HouseData;
}
