import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosPanelComponent } from './ejercicios-panel.component';

describe('EjerciciosPanelComponent', () => {
  let component: EjerciciosPanelComponent;
  let fixture: ComponentFixture<EjerciciosPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjerciciosPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
