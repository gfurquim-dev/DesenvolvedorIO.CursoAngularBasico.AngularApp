import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-biding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './data-biding.component.html',
  styles: ``
})
export class DataBidingComponent {
  public counter: number = 0;

  public imageUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg'

  public name: string = '';

  addClick() {
    this.counter++
  }

  resetCounter() {
    this.counter = 0;
  }

  // keyUp(event: any) {
  //   this.name = event.target.value;
  // }
}
