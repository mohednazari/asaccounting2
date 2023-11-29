import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "public/assets/css/plugins/bootstrap.min.css"
// import "public/assets/css/plugins/owl.carousel.min.css"
import "public/assets/css/plugins/aos.css"
import "public/assets/css/plugins/fontawesome.css"
import "public/assets/css/plugins/slick-slider.css"
import "public/assets/css/plugins/nice-select.css"
import "public/assets/css/plugins/fonts.css"
import "public/assets/css/master.css"
import "public/assets/css/h4-master.css"

export const metadata = {
  title: 'SA Dental Accountants',
  description: 'Specialized Accounting for Dental & Healthcare Professionals.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" id="#top">
      <body>{children}</body>
    </html>
  )
}
