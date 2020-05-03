import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle, ImageStyle } from "react-native";
import { BackButton } from "./components/BackButton";
import { NativeBackButtonProps } from "../typings/NativeBackButtonProps";
import { Style } from "./utils/common";
import { ValueStatus } from "mendix";

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

export class NativeBackButton extends Component<NativeBackButtonProps<CustomStyle>> {
    constructor(props: NativeBackButtonProps<CustomStyle>) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    render(): ReactNode {
        const { caption } = this.props;
        if (!caption || caption.status != ValueStatus.Available) {
            return null;
        }
        return (
            <BackButton
                caption={caption.value}
                darkMode={this.props.darkMode}
                style={this.props.style}
                onClick={this.onClick}
            />
        );
    }
    onClick() {
        if (this.props.onClickAction) {
            this.props.onClickAction.execute();
        }
    }
}
