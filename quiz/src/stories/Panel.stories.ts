import { moduleMetadata, Story, Meta } from "@storybook/angular";
import { PanelComponent } from "src/app/components/panel/app.panel.component";
import { TabComponent } from "src/app/components/tab/app.tab.component";
import { CommonModule } from "@angular/common";

export default{
    title: "Panel/Panel",
    component: PanelComponent,
    decorators: [
        moduleMetadata({
          declarations: [TabComponent],
          imports: [CommonModule],
        }),
      ],
} as Meta

const Template: Story<PanelComponent> = (args: PanelComponent) => ({
    props: args,
  });

export const TP1 = Template.bind({})

TP1.args = {
    tabs: [
        {
            title: "Tab 1",
            content: "Conteúdo 1",
        },
        {
          title: "Tab 2",
          content: "Conteúdo 2",
      },
      {
          title: "Tab 3",
          content: "Conteúdo 3",
      },
      {
          title: "Tab 4",
          content: "Conteúdo 4",
      },
    ]
  }

export const TP2 = Template.bind({})

TP2.args = {
    tabs: [
        {
            title: "Tab 1",
            content: "Conteúdo 1",
        },
        {
          title: "Tab 2",
          content: "Conteúdo 2",
      },
      {
          title: "Tab 3",
          content: "Conteúdo 3",
      },
      {
          title: "Tab 4",
          content: "Conteúdo 4",
      },
      {
        title: "Tab 5",
        content: "Conteúdo 5",
    },
    {
        title: "Tab 6",
        content: "Conteúdo 6",
    },
    ]
}

