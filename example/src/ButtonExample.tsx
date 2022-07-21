import {
  Panel,
  Group,
  layoutConfig,
  Color,
  navbar,
  Text,
  jsx,
  Scroller,
  VLayout,
  HLayout,
} from "doric";
export type Theme = "primary" | "danger" | "default";
export type Variant = "outline" | "base";
export function getButtonBgColor(props?: ButtonProps) {
  if (props?.variant === "outline") {
    return;
  } else {
    return getThemeColor(props?.theme);
  }
}
export function getButtonTextColor(props?: ButtonProps) {
  if (props?.variant === "outline") {
    return getThemeColor(props?.theme);
  } else if (props?.theme === "primary" || props?.theme === "danger") {
    return Color.WHITE;
  } else {
    return;
  }
}
export function getThemeColor(theme?: Theme, defaultColor?: Color) {
  switch (theme) {
    case "primary":
      return Color.parse("#0052d9");
    case "danger":
      return Color.parse("#e34d59");
    default:
      return defaultColor;
  }
}
export function getBorder(props?: ButtonProps) {
  if (props?.variant === "outline") {
    return {
      color: getThemeColor(props?.theme) || Color.parse("#DCDCDC"),
      width: 1,
    };
  }
}

export type ButtonProps = {
  theme?: Theme;
  variant?: Variant;
};

export function Button(props?: Partial<Text> & ButtonProps) {
  return (
    <HLayout
      backgroundColor={getButtonBgColor(props)}
      border={getBorder(props)}
      corners={4}
      layoutConfig={props?.layoutConfig ?? layoutConfig().fit()}
    >
      <Text
        textSize={16}
        textColor={getButtonTextColor(props)}
        padding={{ left: 40, right: 40, top: 15, bottom: 15 }}
        text={props?.innerElement}
        props={{ ...props, layoutConfig: layoutConfig().fit() }}
      ></Text>
    </HLayout>
  );
}
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
        {null}
      </VLayout>
    </Scroller>;
  }
}
