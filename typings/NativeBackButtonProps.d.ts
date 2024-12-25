/**
 * This file was generated from NativeBackButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { ActionValue, DynamicValue } from "mendix";

export type DarkModeEnum = "device" | "dark" | "light";

export interface NativeBackButtonProps<Style> {
    name: string;
    style: Style[];
    caption?: DynamicValue<string>;
    darkMode: DarkModeEnum;
    onClickAction?: ActionValue;
    a11yEnabled: boolean;
    a11yLabel?: DynamicValue<string>;
    a11yHint?: DynamicValue<string>;
}

export interface NativeBackButtonPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    caption: string;
    darkMode: DarkModeEnum;
    onClickAction: {} | null;
    a11yEnabled: boolean;
    a11yLabel: string;
    a11yHint: string;
}
