import { TestBed } from '@angular/core/testing';

import { GithubconectService } from './githubconect.service';

describe('GithubconectService', () => {
  let service: GithubconectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubconectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
