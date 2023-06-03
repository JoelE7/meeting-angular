import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableUserComponent } from 'src/app/modules/user/components/table-user/table-user.component';
import { ModalContactComponent } from 'src/app/modules/user/shared/modal-contact/modal-contact.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('TableUserComponent', () => {
  let component: TableUserComponent;
  let fixture: ComponentFixture<TableUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableUserComponent,ModalContactComponent],
      imports : [PrimengModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TableUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
