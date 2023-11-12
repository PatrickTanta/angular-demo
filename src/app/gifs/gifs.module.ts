import { NgModule } from '@angular/core'
import { HomePageComponent } from './pages/home/home-page.component'
import { CommonModule } from '@angular/common'
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component'

@NgModule({
    imports: [CommonModule],
    exports: [HomePageComponent],
    declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, CardListItemComponent],
    providers: [],
})
export class GifsModule {}
