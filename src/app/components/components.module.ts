import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SheetComponent } from './sheet/sheet.component';
import { TerminalComponent } from './terminal/terminal.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TerminalComponent,
        SheetComponent
    ],
    exports: [
      TerminalComponent,
      SheetComponent
    ],
})
export class ComponentsModule { }
