import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface Tab {
  title: string;
  content: string;
  index: number;
  selection?: number;
}

@Component({
  selector: "app-tab",
  templateUrl: "./app.tab.component.html",
  styleUrls: ["./app.tab.component.css"]
})
export class TabComponent {
  @Input() title!: string;
  @Input() content!: string;
  @Input() index!: number;
  @Input() selection?: number;
  @Output() onSelection = new EventEmitter<number>();
}
