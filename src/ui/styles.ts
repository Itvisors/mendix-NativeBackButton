import { ImageStyle, TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

export interface CustomStyle extends Style {
    iosContainer: ViewStyle;
    androidContainer: ViewStyle;
    iosDarkImage: ImageStyle;
    iosLightImage: ImageStyle;
    androidDarkImage: ImageStyle;
    androidLightImage: ImageStyle;
    darkCaption: TextStyle;
    lightCaption: TextStyle;
}

export const defaultStyle: CustomStyle = {
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
