import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { IEmail } from '../models/email';
import { environment } from '../../environments/environment';

const url = `${environment.baseUrl}/send-email`;

interface ISendGridData {
  to: string;
  from: string;
  subject: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: IEmail): Observable<any> {

    const emailData: ISendGridData = {
      to: 'shane.arthur@gmail.com',
      from: data.email,
      subject: `Personal Site Message from ${data.name}`,
      text: data.message
    };

    const params = new HttpParams();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    const options = {};
    options['params'] = params;
    if (!!headers) {
      options['headers'] = headers;
    }
    return this.http.post<any>(url, emailData, options);

  }
}
