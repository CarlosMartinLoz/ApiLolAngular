import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { SearchServiceService } from './search-service.service';
=======
import { SearchService } from './search-service.service';
>>>>>>> origin/master

describe('SearchServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
<<<<<<< HEAD
    const service: SearchServiceService = TestBed.get(SearchServiceService);
=======
    const service: SearchService = TestBed.get(SearchService);
>>>>>>> origin/master
    expect(service).toBeTruthy();
  });
});
