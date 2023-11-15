import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module'

import { CardListComponent } from './components/card-list/card-list.component'
import { CardListItemComponent } from './components/card-list-item/card-list-item.component'
import { HomePageComponent } from './pages/home/home-page.component'
import { SearchBoxComponent } from './components/search-box/search-box.component'

@NgModule({
    imports: [CommonModule, SharedModule],
    exports: [HomePageComponent],
    declarations: [
        HomePageComponent,
        SearchBoxComponent,
        CardListComponent,
        CardListItemComponent,
    ],
    providers: [],
})
export class GifsModule {}
