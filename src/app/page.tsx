"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroOverlayBottomSplit from '@/components/sections/hero/HeroOverlayBottomSplit';
import ProductCardSix from '@/components/sections/product/ProductCardSix';
import TagAbout from '@/components/sections/about/TagAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactFaq from '@/components/sections/contact/ContactFaq';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="bounce-effect"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="smallSizeLargeTitles"
      background="noise"
      cardStyle="gradient-radial"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="AutoVista"
          button={{
            text: "Schedule Test Drive",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlayBottomSplit
          title="Experience Premium Vehicles"
          description="Discover our exclusive collection of luxury and performance vehicles. Find your perfect car with expert guidance and unbeatable service."
          buttons={[
            {
              text: "Browse Inventory",
              href: "products"
            },
            {
              text: "Schedule Test Drive",
              href: "contact"
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880298391-atyanl1t.jpg"
          imageAlt="Featured luxury vehicle in showroom"
          showDimOverlay={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardSix
          products={[
            {
              id: "1",
              name: "Executive Sedan",
              price: "$45,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880299640-mrkf6hen.jpg",
              imageAlt: "Premium executive sedan"
            },
            {
              id: "2",
              name: "Adventure SUV",
              price: "$52,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880301210-41gpm7kt.jpg",
              imageAlt: "Modern adventure SUV"
            },
            {
              id: "3",
              name: "Performance Sports",
              price: "$65,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880302347-zgjnm4lg.jpg",
              imageAlt: "Sports car performance vehicle"
            },
            {
              id: "4",
              name: "Business Class",
              price: "$48,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880303236-k840l6e5.jpg",
              imageAlt: "Business class sedan"
            },
            {
              id: "5",
              name: "Elegant Coupe",
              price: "$58,000",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880304407-4lcr61y0.jpg",
              imageAlt: "Elegant coupe design"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          title="Featured Inventory"
          description="Explore our carefully curated selection of premium vehicles"
          tag="Latest Arrivals"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About Us"
          description="AutoVista has been delivering premium automotive experiences for over 25 years. We combine expert knowledge with exceptional service to help you find the perfect vehicle. Our commitment to transparency and customer satisfaction sets us apart in the automotive industry."
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardSeven
          title="Why Choose AutoVista"
          description="Industry-leading results and customer satisfaction"
          metrics={[
            {
              id: "1",
              value: "25+",
              title: "Years of Excellence",
              items: [
                "Trusted by thousands of customers",
                "Premium vehicle selection",
                "Expert team guidance"
              ]
            },
            {
              id: "2",
              value: "98%",
              title: "Customer Satisfaction",
              items: [
                "Quality service guarantee",
                "Transparent pricing",
                "Post-sale support"
              ]
            },
            {
              id: "3",
              value: "500+",
              title: "Happy Vehicle Owners",
              items: [
                "Diverse inventory",
                "Competitive financing",
                "Trade-in programs"
              ]
            },
            {
              id: "4",
              value: "24/7",
              title: "Customer Support",
              items: [
                "Expert advice available",
                "Test drive scheduling",
                "Service coordination"
              ]
            }
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Common Questions"
          description="Find answers about our vehicles, financing, and services"
          faqs={[
            {
              id: "1",
              title: "Do you offer financing options?",
              content: "Yes, we offer competitive financing through multiple lenders. Our financial specialists will work with you to find the best rates and terms for your situation."
            },
            {
              id: "2",
              title: "What is your return or exchange policy?",
              content: "We offer a 7-day money-back guarantee on all vehicles. If you're not completely satisfied, we'll work with you on an exchange or full refund."
            },
            {
              id: "3",
              title: "Are your vehicles inspected and certified?",
              content: "All our vehicles undergo a comprehensive 150-point inspection and come with a detailed vehicle history report. Many are certified pre-owned with extended warranties."
            },
            {
              id: "4",
              title: "Can I schedule a test drive online?",
              content: "Absolutely! You can schedule test drives through our website or mobile app. We offer flexible scheduling to accommodate your busy lifestyle."
            },
            {
              id: "5",
              title: "Do you accept trade-ins?",
              content: "Yes, we accept trade-ins on any vehicle. We offer competitive valuations and can apply the trade-in value directly to your new purchase."
            },
            {
              id: "6",
              title: "What warranty coverage is included?",
              content: "Warranty coverage varies by vehicle. We offer standard warranties and optional extended coverage plans for added peace of mind."
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34kFQ1mvageIxtFsoHwjFOCooyh/uploaded-1765880310830-9x6bosjx.jpg"
          imageAlt="Professional car dealership showroom"
          mediaPosition="left"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactFaq
          ctaTitle="Ready to find your perfect vehicle?"
          ctaDescription="Connect with our team today for personalized automotive solutions"
          ctaButton={{
            text: "Contact Us Now",
            href: "tel:+1-800-AUTO-VIA"
          }}
          ctaIcon={Phone}
          faqs={[
            {
              id: "1",
              title: "How do I get started?",
              content: "Browse our inventory online, schedule a test drive, or contact our sales team directly. We're here to help you every step of the way."
            },
            {
              id: "2",
              title: "What documents do I need?",
              content: "Typically, you'll need a valid driver's license, proof of insurance, and proof of income. Our team will guide you through the complete documentation process."
            },
            {
              id: "3",
              title: "How long does the process take?",
              content: "Most customers complete their purchase in 2-3 hours. We handle all paperwork efficiently while maintaining accuracy and transparency."
            }
          ]}
          useInvertedBackground="noInvert"
          animationType="slide-up"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="AutoVista"
          columns={[
            {
              title: "Explore",
              items: [
                {
                  label: "Our Inventory",
                  href: "/inventory"
                },
                {
                  label: "New Arrivals",
                  href: "/new"
                },
                {
                  label: "Special Offers",
                  href: "/offers"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Financing",
                  href: "/financing"
                },
                {
                  label: "Trade-In",
                  href: "/trade-in"
                },
                {
                  label: "Vehicle Service",
                  href: "/service"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "/about"
                },
                {
                  label: "Contact",
                  href: "/contact"
                },
                {
                  label: "Blog",
                  href: "/blog"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "FAQ",
                  href: "/faq"
                },
                {
                  label: "Support",
                  href: "/support"
                },
                {
                  label: "Careers",
                  href: "/careers"
                }
              ]
            }
          ]}
          copyrightText="© 2025 AutoVista Motors. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}