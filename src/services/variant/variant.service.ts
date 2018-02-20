import { Injectable } from '@angular/core';
import {Variant} from '../../../models/Variant';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class VariantService {

  variants = [];
  constructor(private http: HttpClient) { }

  private getVariants() {
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:3000/variants').subscribe(variants => {
        resolve(variants);
      });
    });
  }

  getAllVariants(): number[] {
    this.variants.length = 0;
    this.getVariants().then(variants => {
      for (const item in variants) {
        this.variants.push(variants[item].variantNumber);
      }
    });
    return this.variants;
  }

}
