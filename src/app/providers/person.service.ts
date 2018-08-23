import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable()
export class PersonService {
    constructor(private httpClient: HttpClient) {

    }
    getPeople() {
        return this.httpClient.get('http://dev.api.fooddocs.ee/testtask');
    }
}