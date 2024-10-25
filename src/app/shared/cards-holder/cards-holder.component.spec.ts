import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHolderComponent } from './cards-holder.component';

describe('CardsHolderComponent', () => {
  let component: CardsHolderComponent;
  let fixture: ComponentFixture<CardsHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
