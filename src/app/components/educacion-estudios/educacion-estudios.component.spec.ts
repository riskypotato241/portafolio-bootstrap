import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionEstudiosComponent } from './educacion-estudios.component';

describe('EducacionEstudiosComponent', () => {
  let component: EducacionEstudiosComponent;
  let fixture: ComponentFixture<EducacionEstudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionEstudiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionEstudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
