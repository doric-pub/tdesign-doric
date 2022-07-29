import { loge } from "doric";
import {
  Panel,
  Group,
  layoutConfig,
  navbar,
  jsx,
  Scroller,
  VLayout,
  AssetsResource,
} from "doric";
import { Button } from "./widgets/Button";

@Entry
export class ButtonExample extends Panel {
  onShow() {
    navbar(this.context).setTitle("Button");
  }
  build(root: Group) {
    <Scroller parent={root} layoutConfig={layoutConfig().most()}>
      <VLayout
        layoutConfig={layoutConfig().mostWidth().fitHeight()}
        padding={{ left: 20, right: 20 }}
        space={10}
      >
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          onClick={() => {
            loge("Clicked");
          }}
        >
          强按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          variant="outline"
        >
          弱按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          variant="outline"
        >
          次按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="danger"
        >
          强警告按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="danger"
          variant="outline"
        >
          弱警告按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          icon={new AssetsResource("icon_app.png")}
        >
          带图标按钮
        </Button>

        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          onClick={() => {
            loge("Clicked");
          }}
          disabled={true}
        >
          强按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          variant="outline"
          disabled={true}
        >
          弱按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          variant="outline"
          disabled={true}
        >
          次按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="danger"
          disabled={true}
        >
          强警告按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="danger"
          variant="outline"
          disabled={true}
        >
          弱警告按钮
        </Button>
        <Button
          layoutConfig={layoutConfig().mostWidth().fitHeight()}
          theme="primary"
          icon={new AssetsResource("icon_app.png")}
          disabled={true}
        >
          带图标按钮
        </Button>
      </VLayout>
    </Scroller>;
  }
}
