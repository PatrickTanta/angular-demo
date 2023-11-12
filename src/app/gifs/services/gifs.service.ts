import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Gif } from '../interfaces/gifs.interfaces'

@Injectable({
    providedIn: 'root',
})
export class GifsService {
    public gifList: Gif[] = []

    private _tagsHistory: string[] = []
    private apiKey: string = 't8Wd3p5LnLb3jqnamoSaCaPURSZZDRR6'
    private serviceUrl: string = 'http://api.giphy.com/v1/gifs'

    constructor(private httpClient: HttpClient) {
        this.loadLocalStorage()
    }

    get tagsHistory(): string[] {
        return [...this._tagsHistory]
    }

    private organizeHistory(tag: string) {
        const tagLc = tag.toLowerCase()

        if (this._tagsHistory.includes(tagLc)) {
            this._tagsHistory = this._tagsHistory.filter((tag) => tag !== tagLc)
        }

        this._tagsHistory.unshift(tag)
        this._tagsHistory = this._tagsHistory.slice(0, 10)

        this.saveLocalStorage()
    }

    private saveLocalStorage(): void {
        localStorage.setItem('history', JSON.stringify(this._tagsHistory))
    }

    private loadLocalStorage(): void {
        const history = localStorage.getItem('history')

        if (!history) return

        this._tagsHistory = JSON.parse(history)

        if (this._tagsHistory.length === 0) return
        this.searchTag(this._tagsHistory[0])
    }

    searchTag(tag: string): void {
        if (tag.length === 0) return
        this.organizeHistory(tag)

        const params = new HttpParams()
            .set('api_key', this.apiKey)
            .set('limit', '10')
            .set('q', tag)

        this.httpClient
            .get(`${this.serviceUrl}/search`, { params })
            .subscribe((resp: any) => {
                this.gifList = resp.data
            })
    }
}
