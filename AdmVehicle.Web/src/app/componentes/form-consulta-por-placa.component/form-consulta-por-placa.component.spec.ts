import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultaPorPlacaComponentComponent } from './form-consulta-por-placa.component';

describe('FormConsultaPorPlacaComponentComponent', () => {
  let component: FormConsultaPorPlacaComponentComponent;
  let fixture: ComponentFixture<FormConsultaPorPlacaComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConsultaPorPlacaComponentComponent]
    });
    fixture = TestBed.createComponent(FormConsultaPorPlacaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
