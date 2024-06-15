import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/header/navbar/navbar.component';
import { TitlePageComponent } from './title-page/title-page.component';
import { CardsRandomComponent } from './cards-random/cards-random.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ModalCarsComponent } from './modal-cars/modal-cars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    TitlePageComponent,
    CardsRandomComponent,
    CardComponent,
    FooterComponent,
    ModalCarsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    TitlePageComponent,
    CardsRandomComponent,
    CardComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
