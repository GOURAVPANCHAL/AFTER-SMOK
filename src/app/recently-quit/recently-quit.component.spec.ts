import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyQuitComponent } from './recently-quit.component';

describe('RecentlyQuitComponent', () => {
  let component: RecentlyQuitComponent;
  let fixture: ComponentFixture<RecentlyQuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyQuitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyQuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
