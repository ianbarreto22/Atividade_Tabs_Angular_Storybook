import { Component, Input } from "@angular/core";
import { Tab } from "../tab/app.tab.component";

export interface Panel{
  tabs: {
    title: string,
    content: string
  }[];
}

@Component({
  selector: "app-panel",
  templateUrl: "./app.panel.component.html",
  styleUrls: ["./app.panel.component.css"]
})
export class PanelComponent {
  @Input()
  tabs!: {
      title: string,
      content: string
  }[]

  currentTab = 0;

  select(tabIndex: number) {
    this.currentTab = tabIndex;
  }
}
