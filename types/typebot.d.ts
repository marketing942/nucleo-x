declare module "@typebot.io/react" {
  import type { ComponentType } from "react";

  export type BubbleTheme = {
    button?: {
      backgroundColor?: string;
      iconColor?: string;
      customIconSrc?: string;
      customCloseIconSrc?: string;
      size?: "medium" | "large";
    };
    chatWindow?: {
      backgroundColor?: string;
      maxWidth?: string;
    };
    placement?: "left" | "right";
  };

  export type BubbleProps = {
    typebot: string;
    apiHost?: string;
    prefilledVariables?: Record<string, unknown>;
    theme?: BubbleTheme;
    previewMessage?: {
      message: string;
      avatarUrl?: string;
      autoShowDelay?: number;
    };
    onOpen?: () => void;
    onClose?: () => void;
    onInit?: () => void;
    onEnd?: () => void;
    autoShowDelay?: number;
  };

  export const Bubble: ComponentType<BubbleProps>;
  export const Standard: ComponentType<BubbleProps>;
  export const Popup: ComponentType<BubbleProps>;
}
