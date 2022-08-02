import { Color, jsx, layoutConfig, Stack } from "doric";

export function Divider(props: {
  lineColor?: Color;
  margin?:
    | {
        left?: number;
        right?: number;
      }
    | number;
}) {
  return (
    <Stack
      layoutConfig={layoutConfig()
        .mostWidth()
        .justHeight()
        .configMargin(
          typeof props.margin === "number"
            ? { left: props.margin, right: props.margin }
            : props.margin ?? {}
        )}
      height={1}
      backgroundColor={props.lineColor ?? Color.parse("#e7e7e7")}
    />
  );
}
