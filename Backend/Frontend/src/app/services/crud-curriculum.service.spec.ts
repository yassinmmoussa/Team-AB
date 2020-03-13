import { TestBed } from '@angular/core/testing';

import { CrudCurriculumService } from './crud-curriculum.service';

describe('CrudCurriculumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudCurriculumService = TestBed.get(CrudCurriculumService);
    expect(service).toBeTruthy();
  });
});
