import { type ComponentPropsWithoutRef } from "react";

const Close = (properties: ComponentPropsWithoutRef<"svg">) => (
    <svg viewBox="0 0 10 10" aria-hidden="true" {...properties}>
        <path
            d="M0 0L10 10M10 0L0 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        ></path>
    </svg>
);

const icons = {
    Close,
};

export type IconType = keyof typeof icons;

export const Icon = ({
    icon,
    ...properties
}: ComponentPropsWithoutRef<"svg"> & { icon: IconType }) => {
    const Icon = icons[icon];
    return <Icon data-scope="icon" {...properties} />;
};

export const ButtonIcon = ({
    icon,
    side = "right",
    ...properties
}: ComponentPropsWithoutRef<"svg"> & {
    icon: IconType;
    side?: "left" | "right";
}) => {
    return <Icon icon={icon} data-scope="button" data-part={side + "-icon"} {...properties} />;
};
