import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsRandomComponent } from './cards-random.component';

describe('CardsRandomComponent', () => {
  let component: CardsRandomComponent;
  let fixture: ComponentFixture<CardsRandomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsRandomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsRandomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
