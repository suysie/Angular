import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    private theme =  new BehaviorSubject<string>('white')

    constructor() {

    }

    setTheme(theme: string){
        this.theme.next(theme)
    }

    getTheme(){
        return this.theme.asObservable()
    }

}