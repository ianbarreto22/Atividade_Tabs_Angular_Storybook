import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, Input, Output, ViewChild, EventEmitter } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Panel, PanelService } from "src/app/services/panel.service";

@Component({
    selector:'app-panel-form',
    templateUrl:'./app.panel-form.component.html',
    styleUrls:['./app.panel-form.component.css']
})
export class PanelFormComponent{
    @Input() panel: Panel = new Panel
    @Output() onSubmit = new EventEmitter()
    @ViewChild(NgForm) form!: NgForm

    constructor(public panelService: PanelService){

    }

    submit(){
        
        this.onSubmit.emit({
            tabs: [...this.panel.tabs]
        })
        this.panel = {tabs: []}
        this.form.reset
    }


    trackByFn(index: number){
        return index
    }

    numTabsChange(num: number){
        for(let i=0; i < this.panel.tabs.length; i++){
            if(this.panel.tabs[i] === undefined){
                this.panel.tabs[i] = {title: '', content: ''}
            }
        }
    }
}