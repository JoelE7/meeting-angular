import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormMvpComponent } from './form-mvp.component';


describe('CreateMvpComponent', () => {
  let component: FormMvpComponent;
  let fixture: ComponentFixture<FormMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMvpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
