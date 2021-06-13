import { TestBed } from '@angular/core/testing';
import { ApiPathService } from './api-path.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PathQuery } from '../../models/common-lib.model';


describe('ApiPathService Test Suite', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [],
        imports: [HttpClientTestingModule]
    }));


    function setup() {
        const apiPathService: ApiPathService = TestBed.inject(ApiPathService);
        const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
        const apiPathServiceAny = apiPathService as any;
        return { apiPathService, apiPathServiceAny, httpTestingController };
    }

    describe('ApiPathService service created', () => {
        it('ApiPathService service should be created', () => {
            const service: ApiPathService = TestBed.inject(ApiPathService);
            expect(service).toBeTruthy();
        });
    });

    describe('createApiPath Method Test Suite', () => {
        it('createApiPath Method should return created api path', () => {
            const { apiPathService } = setup();
            const pathComponent = ['user', 'info'];
            spyOn(Array.prototype, 'filter').and.callThrough();
            spyOn(Array.prototype, 'join').and.callThrough();
            spyOn(window, 'encodeURI').and.callThrough();
            const path = apiPathService.createApiPath(pathComponent);
            expect(path).toEqual('/user/info');
            expect(Array.prototype.filter).toHaveBeenCalledTimes(1);
            expect(Array.prototype.join).toHaveBeenCalledTimes(2);
            expect(window.encodeURI).toHaveBeenCalledTimes(1);
        });

        it('createApiPath Method should return created api path with argument as "/"', () => {
            const { apiPathService } = setup();
            const pathComponent = ['/', 'info'];
            spyOn(Array.prototype, 'filter').and.callThrough();
            spyOn(Array.prototype, 'join').and.callThrough();
            spyOn(window, 'encodeURI').and.callThrough();
            const path = apiPathService.createApiPath(pathComponent);
            expect(path).toEqual('/info');
            expect(Array.prototype.filter).toHaveBeenCalledTimes(1);
            expect(Array.prototype.join).toHaveBeenCalledTimes(2);
            expect(window.encodeURI).toHaveBeenCalledTimes(1);
        });
    });

    describe('createApiPathWithQuery Method Test Suite', () => {
        it('createApiPathWithQuery Method should return created api path with query params', () => {
            const { apiPathService, apiPathServiceAny } = setup();
            const pathComponent = ['user', 'info'];
            const queryParams: PathQuery = { userName: 'xyz' };
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            spyOn(Object, 'entries').and.callThrough();
            spyOn(Object, 'keys').and.callThrough();
            spyOn(window, 'encodeURI').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, queryParams);
            expect(path).toEqual('/user/info?userName=xyz');
            expect(Object.entries).toHaveBeenCalledTimes(1);
            expect(Object.keys).toHaveBeenCalledTimes(1);
            expect(apiPathService.createApiPath).toHaveBeenCalledTimes(1);
            expect(window.encodeURI).toHaveBeenCalledTimes(2);
        });

        it('createApiPathWithQuery Method should return created api path with no query params', () => {
            const { apiPathService } = setup();
            const pathComponent = ['/', 'info'];
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, null);
            expect(path).toEqual('/info');
        });
    });

    afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
        TestBed.resetTestingModule();
    });
});
