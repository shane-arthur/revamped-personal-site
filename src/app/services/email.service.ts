import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { API_KEY } from '../secrets/sendgrid';
import { IEmail } from '../models/email';

const url = 'https://api.sendgrid.com/v3/mail/send';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmail(data: IEmail): Observable<any> {

    const formData = () => {
      return {
        'personalizations': [
          {
            'to': [
              {
                'email': 'shane.arthur@gmail.com'
              }
            ],
            'subject': 'Message From Personal Website'
          }
        ],
        'from': {
          'email': data.email,
          'name': data.name
        },
        'content': [
          {
            'type': 'text/plain',
            'value': data.name
          }
        ]
      }
    };

    const params = new HttpParams();
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('Authorization', `Bearer ${API_KEY}`);
    const options = {};
    options['params'] = params;
    if (!!headers) {
      options['headers'] = headers;
    }
    return this.http.post<any>(url, data, options);
  }

}
