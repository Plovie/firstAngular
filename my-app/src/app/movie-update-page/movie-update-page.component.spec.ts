import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieUpdatePageComponent } from './movie-update-page.component';

describe('MovieUpdatePageComponent', () => {
  let component: MovieUpdatePageComponent;
  let fixture: ComponentFixture<MovieUpdatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieUpdatePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
