import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirComptesComponent } from './voir-comptes.component';

describe('VoirComptesComponent', () => {
  let component: VoirComptesComponent;
  let fixture: ComponentFixture<VoirComptesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirComptesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirComptesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
