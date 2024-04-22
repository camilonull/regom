import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOriginComponent } from './work-origin.component';

describe('WorkOriginComponent', () => {
  let component: WorkOriginComponent;
  let fixture: ComponentFixture<WorkOriginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkOriginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkOriginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
