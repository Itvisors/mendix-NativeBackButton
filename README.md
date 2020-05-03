## NativeBackButton
Mendix native back button

## Features
- Shows button with icon similar to the real native back button
- Responds to device dark mode setting by default
- Allows fixing dark or light mode regardless of device dark mode
- Useful when the default header with navigation does not work for you.
- Normal Mendix action property
- No real native back functionality; it is just a button.

## Styling

Because the widget has separate styling for dark/light and android/ios, several style classes are involved. The example below shows the color and font settings. Note that empty styles could be left out, these are here as example only.

Copy the snippet to your native style and adjust to your needs.

```JavaScript
export const customBackButtonStyle = {
    iosContainer: {
    },
    androidContainer: {
    },
    androidDarkImage: {
        tintColor: "#f3f3f3",
    },
    androidLightImage: {
        tintColor: "#0d0d0d",
    },
    iosDarkImage: {
        tintColor: "#f3f3f3",
    },
    iosLightImage: {
        tintColor: "#0d0d0d",
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

```