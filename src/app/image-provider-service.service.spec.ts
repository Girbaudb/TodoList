import { TestBed } from '@angular/core/testing';

import { ImageProviderServiceService } from './image-provider-service.service';

describe('ImageProviderServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageProviderServiceService = TestBed.get(ImageProviderServiceService);
    expect(service).toBeTruthy();
  });
});
