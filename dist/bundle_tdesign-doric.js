'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doric = require('doric');

function getButtonBgColor(props) {
    if ((props === null || props === void 0 ? void 0 : props.variant) === "outline") {
        return;
    }
    else {
        return getThemeColor(props === null || props === void 0 ? void 0 : props.theme);
    }
}
function getButtonTextColor(props) {
    if ((props === null || props === void 0 ? void 0 : props.variant) === "outline") {
        return getThemeColor(props === null || props === void 0 ? void 0 : props.theme);
    }
    else if ((props === null || props === void 0 ? void 0 : props.theme) === "primary" || (props === null || props === void 0 ? void 0 : props.theme) === "danger") {
        return doric.Color.WHITE;
    }
    else {
        return;
    }
}
function getThemeColor(theme, defaultColor) {
    switch (theme) {
        case "primary":
            return doric.Color.parse("#0052d9");
        case "danger":
            return doric.Color.parse("#e34d59");
        default:
            return defaultColor;
    }
}
function getBorder(props) {
    if ((props === null || props === void 0 ? void 0 : props.variant) === "outline") {
        return {
            color: getThemeColor(props === null || props === void 0 ? void 0 : props.theme) || doric.Color.parse("#DCDCDC"),
            width: 1,
        };
    }
}
function Button(props) {
    var _a;
    const onClick = props === null || props === void 0 ? void 0 : props.onClick;
    const ref = doric.createRef();
    return (doric.jsx.createElement(doric.GestureContainer, { ref: ref, onSingleTap: (props === null || props === void 0 ? void 0 : props.disabled) === true
            ? undefined
            : () => {
                onClick === null || onClick === void 0 ? void 0 : onClick();
            }, backgroundColor: getButtonBgColor(props), border: getBorder(props), corners: 4, layoutConfig: (_a = props === null || props === void 0 ? void 0 : props.layoutConfig) !== null && _a !== void 0 ? _a : doric.layoutConfig().fit(), onTouchDown: (props === null || props === void 0 ? void 0 : props.disabled) === true
            ? undefined
            : () => {
                var _a, _b;
                ref.current.backgroundColor =
                    (_b = (_a = getButtonBgColor(props)) === null || _a === void 0 ? void 0 : _a.alpha(0.8)) !== null && _b !== void 0 ? _b : doric.Color.BLACK.alpha(0.1);
            }, onTouchUp: (props === null || props === void 0 ? void 0 : props.disabled) === true
            ? undefined
            : () => {
                var _a;
                ref.current.backgroundColor =
                    (_a = getButtonBgColor(props)) !== null && _a !== void 0 ? _a : doric.Color.TRANSPARENT;
            }, onTouchCancel: (props === null || props === void 0 ? void 0 : props.disabled) === true
            ? undefined
            : () => {
                var _a;
                ref.current.backgroundColor =
                    (_a = getButtonBgColor(props)) !== null && _a !== void 0 ? _a : doric.Color.TRANSPARENT;
            }, alpha: (props === null || props === void 0 ? void 0 : props.disabled) === true ? 0.5 : 1 },
        doric.jsx.createElement(doric.HLayout, { layoutConfig: doric.layoutConfig().fit().configAlignment(doric.Gravity.Center), gravity: doric.Gravity.Center, padding: { left: 40, right: 40, top: 15, bottom: 15 }, space: 5 },
            !!(props === null || props === void 0 ? void 0 : props.icon) ? (doric.jsx.createElement(doric.Image, { layoutConfig: doric.layoutConfig().just(), width: 22, height: 22, image: props === null || props === void 0 ? void 0 : props.icon })) : null,
            doric.jsx.createElement(doric.Text, { textSize: 16, textColor: getButtonTextColor(props), text: props === null || props === void 0 ? void 0 : props.innerElement, props: Object.assign(Object.assign({}, props), { layoutConfig: doric.layoutConfig().fit() }), onClick: undefined }))));
}

function Badge(props) {
    return (doric.jsx.createElement(doric.Text, { textColor: doric.Color.WHITE, textSize: 12, backgroundColor: doric.Color.RED, layoutConfig: doric.layoutConfig().fitWidth().justHeight(), height: 16, padding: { left: 8, right: 8 }, text: `${props.count}`, corners: 8 }));
}

function Divider(props) {
    var _a, _b;
    return (doric.jsx.createElement(doric.Stack, { layoutConfig: doric.layoutConfig()
            .mostWidth()
            .justHeight()
            .configMargin(typeof props.margin === "number"
            ? { left: props.margin, right: props.margin }
            : (_a = props.margin) !== null && _a !== void 0 ? _a : {}), height: 1, backgroundColor: (_b = props.lineColor) !== null && _b !== void 0 ? _b : doric.Color.parse("#e7e7e7") }));
}

const arrowImg = "data:image/png;base64,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";
function CellGroup(props) {
    return (doric.jsx.createElement(doric.VLayout, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight() }, ...props.innerElement.map((e, idx) => (doric.jsx.createElement(doric.jsx.Fragment, null,
        e,
        idx === props.innerElement.length - 1 ? null : (doric.jsx.createElement(Divider, { margin: 15 })))))));
}
function Cell(props) {
    var _a, _b;
    const ref = doric.createRef();
    return (doric.jsx.createElement(doric.GestureContainer, { ref: ref, layoutConfig: (_a = props.layoutConfig) !== null && _a !== void 0 ? _a : doric.layoutConfig().mostWidth().fitHeight(), onSingleTap: props.onClick
            ? () => {
                var _a;
                (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props);
            }
            : undefined, onTouchDown: () => {
            ref.current.backgroundColor = doric.Color.BLACK.alpha(0.1);
        }, onTouchUp: () => {
            ref.current.backgroundColor = doric.Color.TRANSPARENT;
        }, onTouchCancel: () => {
            ref.current.backgroundColor = doric.Color.TRANSPARENT;
        } },
        doric.jsx.createElement(doric.HLayout, { layoutConfig: doric.layoutConfig().mostWidth().fitHeight(), padding: { top: 10, bottom: 10, left: 15, right: 15 }, gravity: doric.Gravity.CenterY }, (_b = props.image) === null || _b === void 0 ? void 0 :
            _b.also((it) => {
                if (it.layoutConfig instanceof doric.LayoutConfigImpl) {
                    it.layoutConfig = it.layoutConfig
                        .configMargin({ right: 5 })
                        .toModel();
                }
                else {
                    it.layoutConfig = Object.assign(Object.assign({}, it.layoutConfig), { margin: { right: 5 } });
                }
            }),
            props.leftIcon ? (doric.jsx.createElement(doric.Image, { image: props.leftIcon, layoutConfig: doric.layoutConfig()
                    .just()
                    .configMargin({ right: 5 })
                    .configAlignment(doric.Gravity.Top), width: 22, height: 22 })) : null,
            doric.jsx.createElement(doric.VLayout, { space: 4, layoutConfig: doric.layoutConfig().justWidth().fitHeight().configWeight(1) },
                doric.jsx.createElement(doric.HLayout, { gravity: doric.Gravity.CenterY },
                    doric.jsx.createElement(doric.Text, { text: props.title, maxLines: 0, textSize: 16, layoutConfig: doric.layoutConfig().fit().configMinHeight(22), textColor: doric.Color.parse("#e6000000"), textAlignment: doric.Gravity.Left }),
                    props.required === true ? (doric.jsx.createElement(doric.Text, { layoutConfig: doric.layoutConfig().fit().configMargin({ left: 5 }), textSize: 12, textColor: doric.Color.RED }, "*")) : null),
                !!props.description ? (doric.jsx.createElement(doric.Text, { text: props.description, textSize: 14, maxLines: 0, textAlignment: doric.Gravity.Left, textColor: doric.Color.BLACK.alpha(6 / 16) })) : null),
            !!props.note ? (typeof props.note === "string" ? (doric.jsx.createElement(doric.Text, { text: props.note, textColor: doric.Color.BLACK.alpha(6 / 16), textSize: 16 })) : (props.note)) : null,
            props.arrow ? (doric.jsx.createElement(doric.Image, { layoutConfig: doric.layoutConfig().just().configMargin({ left: 10 }), width: 24, height: 24, imageBase64: arrowImg })) : null)));
}

exports.Badge = Badge;
exports.Button = Button;
exports.Cell = Cell;
exports.CellGroup = CellGroup;
exports.Divider = Divider;
exports.getBorder = getBorder;
exports.getButtonBgColor = getButtonBgColor;
exports.getButtonTextColor = getButtonTextColor;
exports.getThemeColor = getThemeColor;
//# sourceMappingURL=bundle_tdesign-doric.js.map
