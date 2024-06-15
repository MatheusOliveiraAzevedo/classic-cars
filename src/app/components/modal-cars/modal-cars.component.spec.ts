import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCarsComponent } from './modal-cars.component';

describe('ModalCarsComponent', () => {
  let component: ModalCarsComponent;
  let fixture: ComponentFixture<ModalCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalCarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
