import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.scss'
})
export class CarsComponent implements OnInit {

  constructor(
    private carsService: CarsService
  ) {}

  cars: any

  async ngOnInit() {
      await this.getCars()
  }

async getCars() {
  await this.carsService.getCars().then((res) => {
    this.cars = res
  })
}



}
