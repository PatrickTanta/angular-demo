import { Component, Input, OnInit } from '@angular/core'
import { Gif } from '../../interfaces/gifs.interfaces'

@Component({
    selector: 'gifs-card-list-item',
    templateUrl: './card-list-item.component.html',
    styleUrls: ['./card-list-item.component.css'],
})
export class CardListItemComponent implements OnInit {
    @Input()
    public gif!: Gif

    ngOnInit(): void {
        if (!this.gif) throw new Error('Gif Input is necessary')
    }
}
