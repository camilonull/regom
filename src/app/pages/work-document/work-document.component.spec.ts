import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDocumentComponent } from './work-document.component';

describe('WorkDocumentComponent', () => {
  let component: WorkDocumentComponent;
  let fixture: ComponentFixture<WorkDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkDocumentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
