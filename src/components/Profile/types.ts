export interface IProfileProps {
    /**
    * Profile contents
    */
    label?: string;
    className?: string;
    variant?: "primary" | 'secondary' | 'tertiary';
    children?: any;
    /**
    * Optional click handler
    */
}