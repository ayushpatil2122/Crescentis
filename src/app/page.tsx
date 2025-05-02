import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import { Testimonials } from "@/components/Testimonials";

export default function page() {
    return <div>
        <Hero/>
        <Services/>
        <Partners/>
        <Testimonials/>        
    </div>
}