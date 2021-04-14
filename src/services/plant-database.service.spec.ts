import { TestBed } from '@angular/core/testing';

import { PlantDatabaseService } from './plant-database.service';

describe('PlantDatabaseService', () => {
  let service: PlantDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
