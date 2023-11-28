export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="inner-1 bg-13" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 m-auto">
                            <div className="inner-title text-center">
                                <h2>{breadcrumbTitle}</h2>
                                <p>We’re making work meaningful for everyone, everywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}