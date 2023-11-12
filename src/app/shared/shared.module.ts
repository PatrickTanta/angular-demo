import { NgModule } from '@angular/core'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { CommonModule } from '@angular/common'
import { WspIconComponent } from './components/wsp-icon/wsp-icon.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component'

@NgModule({
    imports: [CommonModule],
    exports: [SidebarComponent, WspIconComponent],
    declarations: [SidebarComponent, WspIconComponent, LazyImageComponent],
    providers: [],
})
export class SharedModule {}
