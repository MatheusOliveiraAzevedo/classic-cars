import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './cars.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route = [
  {
    path: '',
    component: CarsComponent
  }
]

@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule
  ]
})
export class CarsModule { }
