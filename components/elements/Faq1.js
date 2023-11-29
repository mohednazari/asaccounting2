
'use client'
import { useState } from 'react'

export default function Faq1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <div id="faqs">
                <div className="single-faq">
                    <h2 className={isActive.key == 1 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(1)}>
                        What accounting services do you offer for dental and healthcare practices?
                    </h2>
                    <div id="collapse1" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            We provide a comprehensive range of accounting services tailored specifically for dental and healthcare professionals. This includes Financial and Management Accounting, Advanced Taxation advice, Bookkeeping, Payroll, and specialized financial planning and reporting tailored to the unique needs of your practice.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 2 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(2)}>
                        How can your firm help my practice with tax planning?
                    </h2>
                    <div id="collapse2" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Our team offers expert tax planning services designed to optimize your practice’s financial health. We focus on identifying tax-saving opportunities, ensuring compliance with current regulations, and strategizing for efficient tax management, all tailored to the specific needs of the dental and healthcare industry.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 3 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(3)}>
                        Do you offer personalized financial advice for my specific practice needs?
                    </h2>
                    <div id="collapse3" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Absolutely! We believe that each practice has its unique financial challenges and opportunities. Our services are highly personalized – we take the time to understand your practice's specific needs and goals to provide customized financial advice and strategies.
                        </p>
                    </div>
                </div>
                <div className="single-faq">
                    <h2 className={isActive.key == 4 ? "faq-heading" : "faq-heading collapsed"} onClick={() => handleClick(4)}>
                        What makes your firm different from other accounting services?
                    </h2>
                    <div id="collapse4" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"}>
                        <p>
                            Our firm stands out due to our specialized focus on the dental and healthcare sectors. With extensive experience in these fields, we offer not just accounting services, but a deep understanding of industry-specific financial challenges and opportunities. This expertise allows us to provide unparalleled service and advice that is genuinely tailored to your practice.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
