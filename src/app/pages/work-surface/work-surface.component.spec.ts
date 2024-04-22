import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSurfaceComponent } from './work-surface.component';

describe('WorkSurfaceComponent', () => {
  let component: WorkSurfaceComponent;
  let fixture: ComponentFixture<WorkSurfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorkSurfaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkSurfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
