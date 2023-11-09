import { NgModule } from '@angular/core'
import { SidebarComponent } from './components/sidebar/sidebar.component'
import { CommonModule } from '@angular/common'
import { WspIconComponent } from './components/wsp-icon/wsp-icon.component'

@NgModule({
    imports: [CommonModule],
    exports: [SidebarComponent, WspIconComponent],
    declarations: [SidebarComponent, WspIconComponent],
    providers: [],
})
export class ShareModule {}
