import { ReactElement, createElement, useMemo } from "react";
import { Platform, Text, Pressable, View, Appearance, ImageStyle } from "react-native";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import Svg, { Path } from "react-native-svg";
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

    const renderCaption = useMemo(() => {
        // Native button on Android has no caption
        if (Platform.OS === "android") {
            return null;
        }
        if (!caption) {
            return null;
        }
        return <Text style={componentDarkMode ? styles.darkCaption : styles.lightCaption}>{caption}</Text>;
    }, [styles, caption, componentDarkMode]);

    const renderIcon = useMemo(() => {
        // Received this bit from Danny Roest (Mendix) and adjusted for dark mode
        // For RN 0.63, the types changed a little, so the tintColor must be cast to a string.
        let svgStyle: ImageStyle;
        let fillColor: string;
        if (Platform.OS === "android") {
            svgStyle = componentDarkMode ? styles.androidDarkImage : styles.androidLightImage;
            fillColor = componentDarkMode
                ? (styles.androidDarkImage.tintColor! as string)
                : (styles.androidLightImage.tintColor! as string);
        } else {
            svgStyle = componentDarkMode ? styles.iosDarkImage : styles.iosLightImage;
            fillColor = componentDarkMode
                ? (styles.iosDarkImage.tintColor! as string)
                : (styles.iosLightImage.tintColor! as string);
        }
        return (
            <Svg fill={fillColor} style={svgStyle} viewBox="0 0 512 512">
                {Platform.select({
                    ios: (
                        <Path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
                    ),
                    android: (
                        <Path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z" />
                    )
                })}
            </Svg>
        );
    }, [styles, componentDarkMode]);

    return (
        <Pressable onPress={onClick}>
            <View style={Platform.OS === "android" ? styles.androidContainer : styles.iosContainer}>
                {renderIcon}
                {renderCaption}
            </View>
        </Pressable>
    );
}
