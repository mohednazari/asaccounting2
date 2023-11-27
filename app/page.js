import Layout from "@/components/layout/Layout"

import About from "@/components/homepages/home1/About"
import About2 from "@/components/homepages/home1/About2"
import Blog from "@/components/homepages/home1/Blog"
import CaseStudy from "@/components/homepages/home1/CaseStudy"
import Pricing from "@/components/homepages/home1/Pricing"
import Subscribe from "@/components/homepages/home1/Subscribe"
import TaxBusiness from "@/components/homepages/home1/TaxBusiness"
import Testimonial from "@/components/homepages/home1/Testimonial"
import Welcome from "@/components/homepages/home1/Welcome"
import Logo from "@/components/homepages/home2/Logo"

export default function Page() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Welcome />
                <TaxBusiness />
                <About />
                <Testimonial />
                <About2 />
                <CaseStudy />
                <Logo />
                <Pricing />
                {/* <Blog /> */}
                <Subscribe />
            </Layout>
        </>
    )
}