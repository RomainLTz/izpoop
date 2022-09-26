import { TerminalComponent } from './terminal/terminal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        TerminalComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [TerminalComponent],
})
export class ComponentsModule { }
