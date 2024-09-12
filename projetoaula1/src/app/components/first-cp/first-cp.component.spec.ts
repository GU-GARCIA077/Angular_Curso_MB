import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCpComponent } from './first-cp.component';

describe('FirstCpComponent', () => {
  let component: FirstCpComponent;
  let fixture: ComponentFixture<FirstCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstCpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
