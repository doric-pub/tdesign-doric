import { AssetsResource, loge, Switch } from "doric";
import {
  Panel,
  Group,
  layoutConfig,
  navbar,
  jsx,
  Scroller,
  VLayout,
  Image,
} from "doric";
import { Badge } from "./widgets/Badge";
import { Cell, CellGroup } from "./widgets/Cell";

@Entry
export class CellExample extends Panel {
  onShow() {
    navbar(this.context).setTitle("Cell");
  }
  build(root: Group) {
    <Scroller parent={root} layoutConfig={layoutConfig().most()}>
      <CellGroup>
        <Cell title="单行标题" />
        <Cell title="单行标题" required={true} />
        <Cell title="单行标题" note="辅助信息" />
        <Cell title="单行标题" arrow={true} />
        <Cell title="单行标题" note="辅助信息" arrow={true} />
        <Cell title="单行标题" note={<Badge count={8} />} arrow={true} />
        <Cell title="单行标题" note={<Switch />} arrow={true} />
        <Cell
          title="单行标题"
          leftIcon={new AssetsResource("icon_app_dark.png")}
        />
      </CellGroup>
    </Scroller>;
  }
}
