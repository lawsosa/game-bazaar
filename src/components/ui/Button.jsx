export default function Button({children, isActive, className, ...props}) {

    return (
        <button className={`$btn ${className} ${isActive ? "active": ""}`} {...props}>{children}</button>
    )
}