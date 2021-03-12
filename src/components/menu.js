export default function Menu (props) {
    const { items } = props;
    return (
        <ul className="list-unstyled">
            {items.map(
                (data, index) => <li key={`menu-${index}`}><a href="." className="text-white">{data.text}</a></li>
            )}
        </ul>
    );
}
