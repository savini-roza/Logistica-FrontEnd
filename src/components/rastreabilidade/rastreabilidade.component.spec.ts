import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreabilidadeComponent } from './rastreabilidade.component';

describe('RastreabilidadeComponent', () => {
  let component: RastreabilidadeComponent;
  let fixture: ComponentFixture<RastreabilidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RastreabilidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreabilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
