import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkToggle } from './dark-toggle.component';

describe('DarkToggle', () => {
  let component: DarkToggle;
  let fixture: ComponentFixture<DarkToggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkToggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkToggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
