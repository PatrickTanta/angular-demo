import { Component } from '@angular/core'
import { GifsService } from '../../../gifs/services/gifs.service'

@Component({
    selector: 'share-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
    constructor(private gifsService: GifsService) {}

    get tagHistory() {
        return this.gifsService.tagsHistory
    }

    searchTag(tag: string) {
        this.gifsService.searchTag(tag)
    }
}
