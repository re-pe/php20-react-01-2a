export default function DivCard(props) {
    const { itemData } = props;
    const { id, url, name, description, price, amount, unit, category, image } = itemData;


    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                {/*<img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="Card cap with graphics" />*/}
                <img className="card-img-top" src={require(`../images/${image}`).default} alt="Card cap with graphics" />
                <div className="card-body">
                    <p className="card-text rem-2">{description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {["View", "Edit"].map((text, index) => (
                                <button key={index} type="button" className="btn btn-sm btn-outline-secondary">{text}</button>
                            ))}
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}