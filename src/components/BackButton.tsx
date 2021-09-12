import { Component, ReactNode, createElement } from "react";
import { Appearance, ImageStyle, Platform, Pressable, Text, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { DarkModeEnum } from "../../typings/NativeBackButtonProps";

import { CustomStyle } from "../NativeBackButton";
import { flattenStyles } from "../utils/common";

export interface BackButtonProps {
    caption?: string;
    darkMode: DarkModeEnum;
    onClick: () => void;
    style: CustomStyle[];
}

const defaultStyle: CustomStyle = {
    iosContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    androidContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 15
    },
    androidDarkImage: {
        tintColor: "#f3f3f3",
        width: 24,
        height: 24
    },
    androidLightImage: {
        tintColor: "#0d0d0d",
        width: 24,
        height: 24
    },
    iosDarkImage: {
        tintColor: "#f3f3f3",
        width: 28,
        height: 31
    },
    iosLightImage: {
        tintColor: "#0d0d0d",
        width: 28,
        height: 31
    },
    darkCaption: {
        color: "#f3f3f3",
        fontSize: 17
    },
    lightCaption: {
        color: "#0d0d0d",
        fontSize: 17
    }
};

// Mendix 9 is different!
// Safely check if Appearance API is available in this version of React Native
const deviceDarkMode = Appearance.getColorScheme() === "dark";

export class BackButton extends Component<BackButtonProps> {
    private readonly styles = flattenStyles(defaultStyle, this.props.style);

    render(): ReactNode {
        let componentDarkMode = false;
        switch (this.props.darkMode) {
            case "dark":
                componentDarkMode = true;
                break;

            case "light":
                componentDarkMode = false;
                break;

            default:
                componentDarkMode = deviceDarkMode;
        }
        return (
            <Pressable onPress={() => this.props.onClick()}>
                <View style={Platform.OS === "android" ? this.styles.androidContainer : this.styles.iosContainer}>
                    {this.renderIcon(componentDarkMode)}
                    {this.renderCaption(componentDarkMode)}
                </View>
            </Pressable>
        );
    }

    renderIcon(componentDarkMode: boolean): ReactNode {
        // Received this bit from Danny Roest (Mendix) and adjusted for dark mode
        // For RN 0.63, the types changed a little, so the tintColor must be cast to a string.
        let svgStyle: ImageStyle;
        let fillColor: string;
        if (Platform.OS === "android") {
            svgStyle = componentDarkMode ? this.styles.androidDarkImage : this.styles.androidLightImage;
            fillColor = componentDarkMode
                ? (this.styles.androidDarkImage.tintColor! as string)
                : (this.styles.androidLightImage.tintColor! as string);
        } else {
            svgStyle = componentDarkMode ? this.styles.iosDarkImage : this.styles.iosLightImage;
            fillColor = componentDarkMode
                ? (this.styles.iosDarkImage.tintColor! as string)
                : (this.styles.iosLightImage.tintColor! as string);
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
    }

    renderCaption(componentDarkMode: boolean): ReactNode {
        // Native button on Android has no caption
        if (Platform.OS === "android") {
            return null;
        }
        const { caption } = this.props;
        if (!caption) {
            return null;
        }
        return <Text style={componentDarkMode ? this.styles.darkCaption : this.styles.lightCaption}>{caption}</Text>;
    }
}
