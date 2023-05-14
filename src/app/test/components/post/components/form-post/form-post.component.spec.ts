import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPostComponent } from '../../../../../components/post/components/form-post/form-post.component';

describe('FormPostComponent', () => {
  let component: FormPostComponent;
  let fixture: ComponentFixture<FormPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
