import { ReactElement, createElement, useCallback } from "react";

import { BackButton } from "./components/BackButton";
import { CustomStyle } from "./ui/styles";
import { NativeBackButtonProps } from "../typings/NativeBackButtonProps";

export function NativeBackButton(props: NativeBackButtonProps<CustomStyle>): ReactElement {
    const { onClickAction } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute && !onClickAction.isExecuting) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BackButton
            darkMode={props.darkMode}
            style={props.style}
            onClick={onClickHandler}
            caption={props.caption?.value}
            widgetName={props.name}
            a11yEnabled={props.a11yEnabled}
            a11yLabel={props.a11yLabel?.value}
            a11yHint={props.a11yHint?.value}
        />
    );
}
