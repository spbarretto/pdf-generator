import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateWaybillsComponent } from './generate-waybills.component';

describe('GenerateWaybillsComponent', () => {
  let component: GenerateWaybillsComponent;
  let fixture: ComponentFixture<GenerateWaybillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateWaybillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateWaybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
