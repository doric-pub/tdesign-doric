import { AssetsResource, loge, Switch } from "doric";
import {
  Panel,
  Group,
  layoutConfig,
  navbar,
  jsx,
  Scroller,
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
        <Cell title="多行标题" description="一段很长很长的内容文字" />
        <Cell
          title="多行带图标"
          description="一段很长很长的内容文字"
          leftIcon={new AssetsResource("icon_app_dark.png")}
          arrow={true}
        />
        <Cell
          title="多行带头像"
          description="一段很长很长的内容文字"
          arrow={true}
          image={
            <Image
              imageUrl="https://tdesign.gtimg.com/mobile/demos/avatar_1.png"
              layoutConfig={layoutConfig().just()}
              width={48}
              height={48}
              corners={24}
            />
          }
        />
        <Cell
          title="多行带图片"
          description="一段很长很长的内容文字"
          image={
            <Image
              imageUrl="https://tdesign.gtimg.com/mobile/%E5%9B%BE%E7%89%87.png"
              layoutConfig={layoutConfig().just()}
              width={56}
              height={56}
            />
          }
        />
        <Cell
          title="多行标题"
          description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
        />
        <Cell
          title="多行高度不定，长文本自动换行，该选项的描述是一段很长的内容"
          description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
        />
        <Cell
          title="多行标题"
          description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
          arrow={true}
        />
        <Cell
          title="多行高度不定，长文本自动换行，该选项的描述是一段很长的内容"
          description="一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容一段很长很长的内容文字，长文本自动换行，该选项的描述是一段很长的内容"
          arrow={true}
        />
      </CellGroup>
    </Scroller>;
  }
}
