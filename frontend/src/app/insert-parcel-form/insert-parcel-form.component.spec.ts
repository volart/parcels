import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertParcelFormComponent } from './insert-parcel-form.component';

describe('InsertParcelFormComponent', () => {
  let component: InsertParcelFormComponent;
  let fixture: ComponentFixture<InsertParcelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertParcelFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertParcelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
