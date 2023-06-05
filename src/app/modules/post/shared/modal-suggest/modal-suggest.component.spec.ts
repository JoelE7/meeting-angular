import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSuggestComponent } from './modal-suggest.component';

describe('ModalSuggestComponent', () => {
  let component: ModalSuggestComponent;
  let fixture: ComponentFixture<ModalSuggestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSuggestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSuggestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
