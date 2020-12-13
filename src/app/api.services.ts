import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class ApiService {

    constructor(private http: HttpClient) {

    }
    getPictures(dog: string, limit: number = 15): Promise<any> {
        console.log(dog)
        return this.http.get(`https://dog.ceo/api/breed/${dog}/images`)
            .toPromise()
            .then((res: any) => res.message.splice(0, limit))
    }

}