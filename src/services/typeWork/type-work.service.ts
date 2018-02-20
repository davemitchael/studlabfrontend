import { Injectable } from '@angular/core';
import { TypeWork } from '../../../models/TypeWork';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class TypeWorkService {

  typeWorks = [];
  constructor(private http: HttpClient) { }

  private getTypeWorks() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/typeWorks').subscribe(_typeWorks => {
        resolve(_typeWorks);
      });
    }) ;
  }

  getAllTypeWorks(): string[] {
    this.typeWorks.length = 0;
    this.getTypeWorks().then(typeworks => {
      for (const item in typeworks) {
        this.typeWorks.push(typeworks[item].name);
      }
    });
    return this.typeWorks;
  }

}
