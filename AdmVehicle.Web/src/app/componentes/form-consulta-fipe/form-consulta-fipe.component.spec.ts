import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConsultaFipeComponent } from './form-consulta-fipe.component';

describe('FormConsultaFipeComponent', () => {
  let component: FormConsultaFipeComponent;
  let fixture: ComponentFixture<FormConsultaFipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormConsultaFipeComponent]
    });
    fixture = TestBed.createComponent(FormConsultaFipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
