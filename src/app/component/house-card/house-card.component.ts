import { Component, Input } from '@angular/core';
import { HouseData } from '../../house-data';

@Component({
  selector: 'app-house-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <img [src]="house.photo" alt="" />
      <div class="cardInfo">
        <h1>{{ house.name }}</h1>
        <h2>{{ house.city }}, {{ house.state }}</h2>
        <a href="#">View housing</a>
      </div>
    </div>
  `,
  styleUrl: './house-card.component.css',
})
export class HouseCardComponent {
  @Input() house!: HouseData;
}
