import React from "react";

export interface ITextProps {
    type: "heading" | "heading2" | "title" | "title2" | "paragraph" | "paragraph2" | "label";
    label?: string;
    className?: string;
    children?: React.ReactNode;
}