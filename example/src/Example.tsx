import {
  Panel,
  Group,
  vlayout,
  layoutConfig,
  Gravity,
  text,
  Color,
  navbar,
  modal,
  Text,
  jsx,
  Scroller,
  VLayout,
  navigator,
  ClassType,
} from "doric";
import { ButtonExample } from "./ButtonExample";
import { CellExample } from "./CellExample";
function ExItem(
  props: { label: string; href: ClassType<Panel> } & Partial<Text>
) {
  return (
    <Text
      layoutConfig={layoutConfig().mostWidth().justHeight()}
      height={50}
      backgroundColor={Color.parse("#1abc9c")}
      textAlignment={Gravity.Center}
      text={props.label}
      textSize={20}
      textColor={Color.WHITE}
      props={props}
      onClick={() => {
        navigator(context).push(props.href);
      }}
    />
  );
}
@Entry
class Example extends Panel {
  onShow() {
    navbar(context).setTitle("示例代码");
  }
  build(root: Group) {
    <Scroller parent={root} layoutConfig={layoutConfig().most()}>
      <VLayout layoutConfig={layoutConfig().mostWidth().fitHeight()} space={10}>
        <ExItem label="Button" href={ButtonExample}></ExItem>
        <ExItem label="Cell" href={CellExample}></ExItem>
      </VLayout>
    </Scroller>;
  }
}
