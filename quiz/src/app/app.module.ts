import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { PanelComponent } from "./components/panel/app.panel.component";
import { TabComponent } from "./components/tab/app.tab.component";

@NgModule({
  declarations: [[AppComponent], [PanelComponent], [TabComponent]],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
