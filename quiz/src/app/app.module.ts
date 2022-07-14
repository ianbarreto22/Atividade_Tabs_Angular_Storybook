import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PanelComponent } from "./components/panel/app.panel.component";
import { TabComponent } from "./components/tab/app.tab.component";
import { PanelFormComponent } from "./components/panel-form/panel-form.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent, 
    TabComponent, 
    PanelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
