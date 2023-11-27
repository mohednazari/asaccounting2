import LogoSlider1 from "@/components/slider/LogoSlider1"


export default function Logo() {
    return (
        <>
            <div className="logo-area section-padding bg-14">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="heading4 text-center" data-aos="fade-up" data-aos-duration={900}>
                                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                    <h4>Our Trusted Partners</h4>
                                    <LogoSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
