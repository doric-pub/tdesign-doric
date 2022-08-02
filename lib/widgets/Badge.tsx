import { Color, jsx, layoutConfig, Text } from "doric";
export function Badge(props: { count: number }) {
  return (
    <Text
      textColor={Color.WHITE}
      textSize={12}
      backgroundColor={Color.RED}
      layoutConfig={layoutConfig().fitWidth().justHeight()}
      height={16}
      padding={{ left: 8, right: 8 }}
      text={`${props.count}`}
      corners={8}
    ></Text>
  );
}
