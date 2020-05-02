import { Component, ReactNode, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { NativeBackButtonProps } from "../typings/NativeBackButtonProps";
import { Style } from "./utils/common";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export class NativeBackButton extends Component<NativeBackButtonProps<CustomStyle>> {
    render(): ReactNode {
        return (
            <HelloWorldSample
                sampleText={this.props.sampleText ? this.props.sampleText : "World"}
                style={this.props.style}
            />
        );
    }
}
