import { Component } from "@angular/core";
import { Panel, PanelService } from "./services/panel.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Tabs";

  constructor(public panelService: PanelService){}

  updatePanel(panel: Panel){
    console.log(panel.tabs)
    this.panelService.update(panel)
  }
}
