/**
 * This file was generated from NativeBackButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, DynamicValue } from "mendix";

export type DarkModeEnum = "device" | "dark" | "light";

export interface NativeBackButtonProps<Style> {
    name: string;
    style: Style[];
    caption?: DynamicValue<string>;
    darkMode: DarkModeEnum;
    onClickAction?: ActionValue;
}

export interface NativeBackButtonPreviewProps {
    class: string;
    style: string;
    caption: string;
    darkMode: DarkModeEnum;
    onClickAction: {} | null;
}
