import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMvpComponent } from './create-mvp.component';

describe('CreateMvpComponent', () => {
  let component: CreateMvpComponent;
  let fixture: ComponentFixture<CreateMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateMvpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
