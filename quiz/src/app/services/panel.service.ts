import { Injectable } from "@angular/core";

export class Panel {
    constructor(
        public tabs: {title: string, content: string}[] = [{title: "Tab", content: "Sem Conteúdo"}]
    ){}


}

@Injectable({
    providedIn: 'root'
})
export class PanelService {
    panel: Panel = new Panel

    update(panel: Panel){
        this.panel = panel
    }
}