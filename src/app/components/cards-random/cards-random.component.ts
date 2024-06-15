import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-cards-random',
  templateUrl: './cards-random.component.html',
  styleUrl: './cards-random.component.scss'
})
export class CardsRandomComponent implements OnInit {

  constructor(
    private carsService: CarsService
  ) { }

  cars: any

  async ngOnInit() {
    await this.getCars();
  }

  async getCars() {
    await this.carsService.getCars().then((res) => {
      this.cars = res
    })

    const randomMax = 3
    let randomIndex: any = []
    for (let i = 0; i < randomMax; i++) {
      const randomNumber = Math.floor(Math.random() * ((this.cars.length - 1) - 0 + 1) + 0)
      if (!randomIndex.includes(randomNumber)) {
        randomIndex.push(randomNumber)
      } else {
        i--
      }
    }
    this.cars = this.cars.filter((car:any) => randomIndex.includes(car.id))
  }

}
