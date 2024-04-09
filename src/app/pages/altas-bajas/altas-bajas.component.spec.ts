import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltasBajasComponent } from './altas-bajas.component';

describe('AltasBajasComponent', () => {
  let component: AltasBajasComponent;
  let fixture: ComponentFixture<AltasBajasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltasBajasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltasBajasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
