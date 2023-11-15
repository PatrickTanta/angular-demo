import { Component, OnInit, Input } from '@angular/core'

@Component({
    selector: 'shared-lazy-image',
    templateUrl: './lazy-image.component.html',
    styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
    @Input()
    public url!: string

    @Input()
    public alt: string = ''

    public hasLoaded: boolean = false

    ngOnInit(): void {
        if (!this.url) throw new Error('URL required')
        if (!this.alt) throw new Error('alt required')
    }

    onLoad(): void {
        this.hasLoaded = true
    }
}
