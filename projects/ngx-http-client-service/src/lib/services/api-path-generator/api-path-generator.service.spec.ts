import { TestBed } from '@angular/core/testing';
import { APIUrlService } from './api-path-generation.service';


describe('HttpOptionsService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: APIUrlService = TestBed.inject(APIUrlService);
        expect(service).toBeTruthy();
    });
});
