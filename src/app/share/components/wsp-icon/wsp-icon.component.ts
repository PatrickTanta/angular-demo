import { Component, OnInit } from '@angular/core'
import { WspIconService } from '../../services/wsp-icon.service'
import { Config } from '../../services/wsp-icon.interfaces'

@Component({
    selector: 'shared-wsp-icon',
    templateUrl: './wsp-icon.component.html',
    styleUrls: ['./wsp-icon.component.css'],
})
export class WspIconComponent implements OnInit {
    config?: Config
    country: string = 'Colombia'
    showIcon: boolean = false
    url: string =
        'https://api.whatsapp.com/send/?phone=573112281010&text=%C2%A1Hola+Cruz+Verde%21+Necesito+asesor%C3%ADa%2C+me+gustar%C3%ADa+conocer+el+men%C3%BA+de+opciones&type=phone_number&app_absent=0'
    iconLink: string =
        'https://images.ctfassets.net/ca03ioli1ast/mbnXkGC7AEQY79wrjV8Rg/6240f6a7e76689a11dce343781d40a22/cruz-verde-icono-transparent.png'

    constructor(private wspIconService: WspIconService) {}

    async fetchConfig(): Promise<void> {
        this.config = await this.wspIconService.getWspIconConfig()
        this.showIcon = this.config?.availableCountries.includes(this.country)
    }

    ngOnInit() {
        this.fetchConfig()
    }
}
