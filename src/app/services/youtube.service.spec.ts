import { TestBed } from '@angular/core/testing';

import { YouTubeService } from './youtube.service';

describe('Zoutube', () => {
  let service: YouTubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YouTubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
