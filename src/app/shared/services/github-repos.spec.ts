import { TestBed } from '@angular/core/testing';

import { GithubRepos } from './github-repos';

describe('GithubRepos', () => {
  let service: GithubRepos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubRepos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
