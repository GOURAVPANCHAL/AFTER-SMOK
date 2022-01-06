import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DontQuitComponent } from './dont-quit.component';

describe('DontQuitComponent', () => {
  let component: DontQuitComponent;
  let fixture: ComponentFixture<DontQuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DontQuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DontQuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
