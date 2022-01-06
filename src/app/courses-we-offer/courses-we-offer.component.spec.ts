import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesWeOfferComponent } from './courses-we-offer.component';

describe('CoursesWeOfferComponent', () => {
  let component: CoursesWeOfferComponent;
  let fixture: ComponentFixture<CoursesWeOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesWeOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesWeOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
