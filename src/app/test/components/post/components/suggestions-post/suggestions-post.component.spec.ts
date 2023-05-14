import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionsPostComponent } from '../../../../../components/post/components/suggestions-post/suggestions-post.component';

describe('SuggestionsPostComponent', () => {
  let component: SuggestionsPostComponent;
  let fixture: ComponentFixture<SuggestionsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionsPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuggestionsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
