import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallMovieCardComponent } from './small-movie-card.component';

describe('SmallMovieCardComponent', () => {
  let component: SmallMovieCardComponent;
  let fixture: ComponentFixture<SmallMovieCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallMovieCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallMovieCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
