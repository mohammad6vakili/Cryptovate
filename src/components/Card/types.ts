import { IPillProps } from "../Pill/types";
import { IButtonProps } from "../Button/types";


export interface ICardBox {
    size?: "normal" | "large" | "small" | "landScape" | "medium";
    imgSrc?: string;
    className?: string;
    onClick: () => void;
    pill?: IPillProps;
}

export interface ICardProps extends ICardBox {
    title?: ITitleProps;
    button?: IButtonProps;
}

interface ITitleProps {
    title: string;
    variant: "primary" | "secondary";
}