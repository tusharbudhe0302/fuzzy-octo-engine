import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class LineCharttNodejsService {
    private cs_api_url = environment.nodejs_api_url + '/v2/WorldBank';
    constructor(private http: HttpClient) { }
    public getWorldBankReport(): Observable<any> {
        return this.http.get(this.cs_api_url);
    }
}