import { CarsService } from './../../shared/services/cars.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cars',
  templateUrl: './modal-cars.component.html',
  styleUrl: './modal-cars.component.scss'
})
export class ModalCarsComponent implements OnInit {

  constructor(
    private modalBootstrap: NgbModal,
    private fb: FormBuilder,
    private carsService: CarsService
  ) {}

  urlImg = '../../../assets/categorias/hatch.png'
  formCars: FormGroup
  marcas: any


  async ngOnInit() {
    this.loadForm();
    await this.getMarcas();
  }

  async getMarcas() {
    await this.carsService.getMarcas().then((res) => {
      this.marcas = res
    })
  }


  fileSelect(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      this.urlImg = e.target.result;
    }

    reader.readAsDataURL(file);
  }


  loadForm() {
    this.formCars = this.fb.group({
      image: ['', Validators.compose([
        Validators.required
      ])],
      nomeVeiculo: ['', Validators.compose([
        Validators.required
      ])],
      marca: ['', Validators.compose([
        Validators.required
      ])],
      text: ['', Validators.compose([
        Validators.required
      ])],
    })
  }

  submit() {
    console.log(this.formCars.value)
    const data = {
      "id": 0,
      "imagem": this.formCars.value.image,
      "marca": this.formCars.value.marca,
      "nome": this.formCars.value.nomeVeiculo,
      "texto": this.formCars.value.text,
      "alt": "",
      "valor": "R$",
      "categoria": 1
    }
    this.carsService.addCar(data).then(() => {
      this.closeModal();
    }).catch((err) => console.log(err))
  }


  closeModal() {
    this.modalBootstrap.dismissAll()
  }


}
