import { ReactElement, createElement, useMemo } from "react";
import { Platform, Text, Pressable, View, Appearance } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { DarkModeEnum } from "../../typings/NativeBackButtonProps";
import { CustomStyle, defaultStyle } from "../ui/styles";

export interface BackButtonProps {
    caption?: string;
    darkMode: DarkModeEnum;
    onClick: () => void;
    style: CustomStyle[];
}

// Get current device dark mode
const deviceDarkMode = Appearance.getColorScheme() === "dark";

export function BackButton({ caption, darkMode, onClick, style }: BackButtonProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);

    let componentDarkMode = false;
    switch (darkMode) {
        case "dark":
            componentDarkMode = true;
            break;

        case "light":
            componentDarkMode = false;
            break;

        default:
            componentDarkMode = deviceDarkMode;
    }

    const renderContent = useMemo(() => {
        // Native button on Android has no caption
        if (Platform.OS === "android") {
            return null;
        }
        if (!caption) {
            return null;
        }
        return <Text style={componentDarkMode ? styles.darkCaption : styles.lightCaption}>{caption}</Text>;
    }, [styles, caption, componentDarkMode]);

    return (
        <Pressable onPress={onClick}>
            <View style={Platform.OS === "android" ? styles.androidContainer : styles.iosContainer}>
                {renderContent}
            </View>
        </Pressable>
    );
}
