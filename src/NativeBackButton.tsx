import { ReactElement, createElement, useCallback } from "react";

import { BackButton } from "./components/BackButton";
import { CustomStyle } from "./ui/styles";
import { NativeBackButtonProps } from "../typings/NativeBackButtonProps";

export function NativeBackButton({
    caption,
    darkMode,
    style,
    onClickAction
}: NativeBackButtonProps<CustomStyle>): ReactElement {
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute && !onClickAction.isExecuting) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return <BackButton darkMode={darkMode} style={style} onClick={onClickHandler} caption={caption?.value} />;
}
