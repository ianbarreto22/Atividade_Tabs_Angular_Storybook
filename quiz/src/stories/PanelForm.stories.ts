import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { PanelFormComponent } from "src/app/components/panel-form/app.panel-form.component";
import { CommonModule } from "@angular/common";

function submit(){

}

export default{
    title: "PanelForm/PanelForm",
    component: PanelFormComponent,
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [CommonModule],
        }),
      ],
} as Meta

const Template: Story<PanelFormComponent> = (args: PanelFormComponent) => ({
    props: {
        onSubmit: submit
    },
  });


  export const TP1 = Template.bind({})