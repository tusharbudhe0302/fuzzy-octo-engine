
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable()
export class AppService {
    private cs_api_url = environment.chshap_api_url;
    constructor(private http: HttpClient) { }
}
