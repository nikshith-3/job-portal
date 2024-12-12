import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedJobsComponent } from './appliedjobs.component';

describe('AppliedjobsComponent', () => {
  let component: AppliedJobsComponent;
  let fixture: ComponentFixture<AppliedJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedJobsComponent
      
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliedJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
