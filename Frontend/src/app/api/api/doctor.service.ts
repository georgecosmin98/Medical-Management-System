
import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DoctorEntity } from '../model/doctor';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import { isNumber } from 'util';



@Injectable()
export class DoctorService {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public rows: any;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }




    /**
     * 
     * @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public add(body: DoctorEntity, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public add(body: DoctorEntity, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public add(body: DoctorEntity, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public add(body: DoctorEntity, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling add.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<any>(`${this.basePath}/doctor/addDoctor`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }




    /**
     * F
     * M
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public doctorSearchAll(observe?: 'body', reportProgress?: boolean): Observable<Array<DoctorEntity>>;
    public doctorSearchAll(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DoctorEntity>>>;
    public doctorSearchAll(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DoctorEntity>>>;
    public doctorSearchAll(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<DoctorEntity>>(`${this.basePath}/doctor/listOfDoctors`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }


    deleteData(id){
        return this.httpClient.delete(`${this.basePath}/doctor/deleteDoctor/${encodeURIComponent(String(id))}`)
        .map(res=>
            {
            this.rows;
            })
    }

    /**
     * Updates a pet in the store with form data
     * @param id id that need to be updated
*      @param body Pet object that needs to be added to the store
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateDate(id: string, body: DoctorEntity, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateDate(id: string, body: DoctorEntity, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateDate(id: string, body: DoctorEntity, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateDate(id: string, body: DoctorEntity, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter username was null or undefined when calling updateUser.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter petId was null or undefined when calling updatePetWithForm.');
        }



        let headers = this.defaultHeaders;

        // authentication (petstore_auth) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/xml',
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/x-www-form-urlencoded'
        ];

        const canConsumeForm = this.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): void | HttpParams; };
        let useForm = false;
        let convertFormParamsToString = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        }



        return this.httpClient.put<any>(`${this.basePath}/doctor/update/${encodeURIComponent(String(id))}`,
        body,
        {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        }
        ).map(res=>
            {
                this.rows;
            })
    }



    

    


    
}