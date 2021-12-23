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
        const apiPathService: ApiPathService = TestBed.get(ApiPathService);
        const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
        const apiPathServiceAny = apiPathService as any;
        return { apiPathService, apiPathServiceAny, httpTestingController };
    }

    describe('ApiPathService service created', () => {
        it('ApiPathService service should be created', () => {
            const { apiPathService } =  setup();
            expect(apiPathService).toBeTruthy();
        });
    });

    describe('createApiPath Method Test Suite', () => {
        it('createApiPath Method should return created api path', () => {
            const { apiPathService } = setup();
            const pathComponent = ['user', 'info'];
            spyOn(Array.prototype, 'filter').and.callThrough();
            spyOn(Array.prototype, 'join').and.callThrough();
            const path = apiPathService.createApiPath(pathComponent);
            expect(path).toEqual('/user/info');
            expect(Array.prototype.filter).toHaveBeenCalledTimes(1);
            expect(Array.prototype.join).toHaveBeenCalledTimes(2);
        });

        it('createApiPath Method should return created api path with argument as "/"', () => {
            const { apiPathService } = setup();
            const pathComponent = ['/', 'info'];
            spyOn(Array.prototype, 'filter').and.callThrough();
            spyOn(Array.prototype, 'join').and.callThrough();
            const path = apiPathService.createApiPath(pathComponent);
            expect(path).toEqual('/info');
            expect(Array.prototype.filter).toHaveBeenCalledTimes(1);
            expect(Array.prototype.join).toHaveBeenCalledTimes(2);
        });
    });

    describe('createApiPathWithQuery Method Test Suite', () => {

        it('createApiPathWithQuery Method should return created api path with no query params', () => {
            const { apiPathService, apiPathServiceAny } = setup();
            const pathComponent = ['/', 'info'];
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            spyOn(apiPathServiceAny, 'modifyPathQuery').and.callThrough();
            spyOn(Object, 'entries').and.callThrough();
            spyOn(Object, 'keys').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, null);
            expect(path).toEqual('/info');
            expect(apiPathService.createApiPath).toHaveBeenCalledTimes(1);
            expect(apiPathServiceAny.modifyPathQuery).toHaveBeenCalledTimes(0);
            expect(Object.entries).toHaveBeenCalledTimes(0);
            expect(Object.keys).toHaveBeenCalledTimes(0);
        });

        it('createApiPathWithQuery Method should return created api path with invalid query params and more than one param', () => {
            const { apiPathService, apiPathServiceAny } = setup();
            const pathComponent = ['user', 'info'];
            const queryParams: PathQuery = { userName: 'xyz', '': 'xyz' };
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            spyOn(apiPathServiceAny, 'modifyPathQuery').and.callThrough();
            spyOn(Object, 'entries').and.callThrough();
            spyOn(Object, 'keys').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, queryParams);
            expect(path).toEqual('/user/info?userName=xyz');
            expect(apiPathService.createApiPath).toHaveBeenCalledTimes(1);
            expect(apiPathServiceAny.modifyPathQuery).toHaveBeenCalledTimes(1);
            expect(Object.entries).toHaveBeenCalledTimes(2);
            expect(Object.keys).toHaveBeenCalledTimes(2);
        });

        it('createApiPathWithQuery Method should return created api path with query params having invalid param key with one param', () => {
            const { apiPathService, apiPathServiceAny } = setup();
            const pathComponent = ['user', 'info'];
            const queryParams: PathQuery = { '': 'xyz' };
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            spyOn(apiPathServiceAny, 'modifyPathQuery').and.callThrough();
            spyOn(Object, 'entries').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, queryParams);
            expect(path).toEqual('/user/info');
            expect(Object.entries).toHaveBeenCalledTimes(1);
            expect(apiPathService.createApiPath).toHaveBeenCalledTimes(1);
            expect(apiPathServiceAny.modifyPathQuery).toHaveBeenCalledTimes(1);
        });

        it('createApiPathWithQuery Method should return created api path with query params having valid param key more than one', () => {
            const { apiPathService, apiPathServiceAny } = setup();
            const pathComponent = ['user', 'info'];
            const queryParams: PathQuery = { userName: 'xyz', age: 2 };
            spyOn(apiPathService, 'createApiPath').and.callThrough();
            spyOn(apiPathServiceAny, 'modifyPathQuery').and.callThrough();
            spyOn(Object, 'entries').and.callThrough();
            const path = apiPathService.createApiPathWithQuery(pathComponent, queryParams);
            expect(path).toEqual('/user/info?userName=xyz&age=2');
            expect(Object.entries).toHaveBeenCalledTimes(2);
            expect(apiPathService.createApiPath).toHaveBeenCalledTimes(1);
            expect(apiPathServiceAny.modifyPathQuery).toHaveBeenCalledTimes(1);
        });
    });

    afterEach(() => {
        const { httpTestingController } = setup();
        httpTestingController.verify();
        TestBed.resetTestingModule();
    });
});
