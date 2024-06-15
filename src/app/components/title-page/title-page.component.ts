import { Component, Input } from '@angular/core';
import { ModalCarsComponent } from '../modal-cars/modal-cars.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrl: './title-page.component.scss'
})
export class TitlePageComponent {

  constructor(
    private modalBootstrap: NgbModal
  ) {}

  @Input() title:String = ''
  @Input() showAddCar:boolean = false



  openModalCars() {
    this.modalBootstrap.open(ModalCarsComponent)
  }


}
