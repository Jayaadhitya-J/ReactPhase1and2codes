import "./badge.css";

function Badge({ variant = "success", size = "md", children }) {
    return <span className={`badge ${variant} ${size}`}>{children}</span>;
}

export default Badge;
