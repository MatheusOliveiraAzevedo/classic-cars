import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const route = [
  {
    path: '',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    ComponentsModule,
  ]
})
export class AboutModule { }
