import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerWashingComponent } from './power-washing.component';

describe('PowerWashingComponent', () => {
  let component: PowerWashingComponent;
  let fixture: ComponentFixture<PowerWashingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerWashingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
