import { ReactElement, createElement, useMemo } from "react";
import { Platform, Text, Pressable, View } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { DarkModeEnum } from "../../typings/NativeBackButtonProps";
import { CustomStyle, defaultStyle } from "../ui/styles";

export interface BackButtonProps {
    caption?: string;
    darkMode: DarkModeEnum;
    onClick: () => void;
    style: CustomStyle[];
}

export function BackButton({ caption, onClick, style }: BackButtonProps): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);

    const componentDarkMode = true;

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
