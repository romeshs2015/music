import { TestBed } from '@angular/core/testing';

import { ServicesMusicService } from './services-music.service';

describe('ServicesMusicService', () => {
  let service: ServicesMusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesMusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
