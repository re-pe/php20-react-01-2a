import Menu from './menu';

export default function NavbarHeader() {
    return (
        <div className="collapse bg-dark" id="navbarHeader">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-md-7 py-4">
                        <h4 className="text-white">About</h4>
                        <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                    </div>
                    <div className="col-sm-4 offset-md-1 py-4">
                        <h4 className="text-white">Contact</h4>
                        <Menu items={[
                            { text: "Follow on Twitter" },
                            { text: "Like on Facebook" },
                            { text: "Email me" }
                        ]} />
                    </div>
                </div>
            </div>
        </div>
    )
}