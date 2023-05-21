import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CardProjectComponent } from 'src/app/modules/project/components/card-project/card-project.component';
import { Project } from 'src/app/shared/models/project/project.class';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

describe('CardProjectComponent', () => {
  let cardProjectComponent: CardProjectComponent;
  let fixture: ComponentFixture<CardProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardProjectComponent],
      imports: [PrimengModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProjectComponent);
    cardProjectComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(cardProjectComponent).toBeTruthy();
  });

  it('Verificar que el proyecto hijo llegue', () => {
    cardProjectComponent = new CardProjectComponent();

    const project = new Project();

    expect(cardProjectComponent.project._id).toBe(undefined);

    (project._id = "1"), (project.name = 'Prueba de proyecto');

    cardProjectComponent.project = project;

    fixture.detectChanges();

    expect(cardProjectComponent.project).toBe(project);
  });

});
