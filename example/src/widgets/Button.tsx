import {
  layoutConfig,
  Color,
  Text,
  jsx,
  HLayout,
  Gravity,
  GestureContainer,
  Resource,
  LayoutConfigImpl,
  Image,
  createRef,
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
  disabled?: boolean;
  theme?: Theme;
  variant?: Variant;
  innerElement?: string;
  icon?: Resource;
};

export function Button(props?: Partial<Text> & ButtonProps) {
  const onClick = props?.onClick;
  const ref = createRef<GestureContainer>();
  return (
    <GestureContainer
      ref={ref}
      onSingleTap={
        props?.disabled === true
          ? undefined
          : () => {
              onClick?.();
            }
      }
      backgroundColor={getButtonBgColor(props)}
      border={getBorder(props)}
      corners={4}
      layoutConfig={props?.layoutConfig ?? layoutConfig().fit()}
      onTouchDown={
        props?.disabled === true
          ? undefined
          : () => {
              ref.current.backgroundColor =
                getButtonBgColor(props)?.alpha(0.8) ?? Color.BLACK.alpha(0.1);
            }
      }
      onTouchUp={
        props?.disabled === true
          ? undefined
          : () => {
              ref.current.backgroundColor =
                getButtonBgColor(props) ?? Color.TRANSPARENT;
            }
      }
      onTouchCancel={
        props?.disabled === true
          ? undefined
          : () => {
              ref.current.backgroundColor =
                getButtonBgColor(props) ?? Color.TRANSPARENT;
            }
      }
      alpha={props?.disabled === true ? 0.5 : 1}
    >
      <HLayout
        layoutConfig={layoutConfig().fit().configAlignment(Gravity.Center)}
        gravity={Gravity.Center}
        padding={{ left: 40, right: 40, top: 15, bottom: 15 }}
        space={5}
      >
        <Image
          layoutConfig={layoutConfig().just()}
          width={22}
          height={22}
          hidden={!!!props?.icon}
          image={props?.icon}
        />
        <Text
          textSize={16}
          textColor={getButtonTextColor(props)}
          text={props?.innerElement}
          props={{ ...props, layoutConfig: layoutConfig().fit() }}
          onClick={undefined}
        />
      </HLayout>
    </GestureContainer>
  );
}
