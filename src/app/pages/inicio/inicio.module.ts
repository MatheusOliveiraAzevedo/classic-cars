import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route = [
  {
    path: '',
    component: InicioComponent
  }
]

@NgModule({
  declarations: [InicioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule
  ]
})
export class InicioModule { }
