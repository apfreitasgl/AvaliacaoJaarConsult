import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVeiculoComponentComponent } from './form-veiculo.component.component';

describe('FormVeiculoComponentComponent', () => {
  let component: FormVeiculoComponentComponent;
  let fixture: ComponentFixture<FormVeiculoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormVeiculoComponentComponent]
    });
    fixture = TestBed.createComponent(FormVeiculoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
