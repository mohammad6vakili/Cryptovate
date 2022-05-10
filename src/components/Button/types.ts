export interface IButtonProps {
    /**
    * Button contents
    */
    label?: string;
    className?: string;
    variant?: "primary" | 'secondary' | 'tertiary';
    children?: any;
    /**
    * Optional click handler
    */
    onClick: () => void;
}