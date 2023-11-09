import { Injectable } from '@angular/core'
import { Config } from './wsp-icon.interfaces'

@Injectable({
    providedIn: 'root',
})
export class WspIconService {
    private config: any = {}

    constructor() {}

    getWspIconConfig(): Promise<Config> {
        return new Promise((resolve) => {
            setTimeout(() => {
                const result = {
                    availableCountries: ['Colombia', 'Mexico'],
                    availablePages: ['home', 'cart', 'product'],
                }
                resolve(result)
            }, 1000)
        })
    }
}
