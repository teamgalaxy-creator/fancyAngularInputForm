import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSavedFormsComponent } from './view-saved-forms.component';

describe('ViewSavedFormsComponent', () => {
  let component: ViewSavedFormsComponent;
  let fixture: ComponentFixture<ViewSavedFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewSavedFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewSavedFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
