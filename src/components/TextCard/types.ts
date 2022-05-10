import React from "react";

export interface ITextCardProps {
    type?: "2column" | "3column" | "4column";
    className?: string;
    hasOnerow?: boolean;
}