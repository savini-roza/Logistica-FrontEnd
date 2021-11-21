import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportacaoNotasComponent } from './importacao-notas.component';

describe('ImportacaoNotasComponent', () => {
  let component: ImportacaoNotasComponent;
  let fixture: ComponentFixture<ImportacaoNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportacaoNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportacaoNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
