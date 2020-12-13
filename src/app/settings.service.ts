import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SettingsService {
    private theme =  new BehaviorSubject<string>('white')
    private inverted = new BehaviorSubject<string>('normal')

    constructor() {

    }

    setTheme(theme: string){
        this.theme.next(theme)
    }

    getTheme(){
        return this.theme.asObservable()
    }

    setInverted(theme: string){
        this.inverted.next(theme)
    }

    getInverted(){
        return this.inverted.asObservable()
    }

}