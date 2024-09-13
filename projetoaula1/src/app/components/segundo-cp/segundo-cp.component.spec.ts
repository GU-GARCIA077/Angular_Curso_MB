import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoCpComponent } from './segundo-cp.component';

describe('SegundoCpComponent', () => {
  let component: SegundoCpComponent;
  let fixture: ComponentFixture<SegundoCpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SegundoCpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SegundoCpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
