import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsArrangmentComponent } from './seats-arrangment.component';

describe('SeatsArrangmentComponent', () => {
  let component: SeatsArrangmentComponent;
  let fixture: ComponentFixture<SeatsArrangmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatsArrangmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatsArrangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
