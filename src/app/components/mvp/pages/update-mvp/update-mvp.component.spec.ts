import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMvpComponent } from './update-mvp.component';

describe('UpdateMvpComponent', () => {
  let component: UpdateMvpComponent;
  let fixture: ComponentFixture<UpdateMvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMvpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
