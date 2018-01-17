import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class NobleService {

  constructor(private http: Http) {
      console.log('Task service initialized!');
    }

      getNobleData() {
      return this.http.get('noble')
        .map(res => res.json());
    }


  getImHausListe() {
    return this.http.get('imHausListe')
      .map(res => res.json());
  }

  getAnreiseListe() {
    return this.http.get('anreiseListe')
      .map(res => res.json());
  }
  }
