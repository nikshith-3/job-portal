import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnindashboardComponent } from './adnindashboard.component';

describe('AdnindashboardComponent', () => {
  let component: AdnindashboardComponent;
  let fixture: ComponentFixture<AdnindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdnindashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdnindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
