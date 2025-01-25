"use client"

import React from "react"
import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"
import { useSectionInView } from "@/lib/hooks"
import { useLocale, useTranslations } from "next-intl"

export default function About() {
  const { ref } = useSectionInView("About")
  const t = useTranslations("AboutSection")
  const sectionLan = useTranslations("SectionName")
  const activeLocale = useLocale()

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <div>
        <p className="mb-3">
          My journey as a full-stack developer started when I gained hands-on
          experience with <span className="font-medium italic">.NET Core</span> and
          <span className="font-medium italic"> Angular</span> at Aptech. After
          that, I joined Governor House GIAIC where I learned <span className="font-medium italic">Next.js</span>,
          <span className="font-medium italic"> Sanity CMS</span>, and <span className="font-medium italic">TypeScript</span>.
        </p>

        <p className="mb-3">
          I had the opportunity to work on various projects, including API
          integration and the creation of dynamic components using <span className="font-medium italic">Next.js</span> and
          <span className="font-medium italic"> Sanity CMS</span>. My passion for building
          user-centric applications motivated me to enhance my skills in frontend
          development with <span className="font-medium italic">React</span>, <span className="font-medium italic">Tailwind CSS</span>, and backend integrations.
        </p>

        <p className="mb-3">
          One of my major projects was Comforty Marketplace, developed during a
          hackathon. The project utilized <span className="font-medium italic">Next.js</span>, <span className="font-medium italic">Sanity CMS</span>, and third-party
          APIs like <span className="font-medium italic">ShipEngine</span> for shipment tracking. It was deployed on Vercel and tested for performance with a
          <span className="font-medium italic"> 100% Lighthouse score</span>.
        </p>

        <p className="mb-3">
          My technical expertise includes building dynamic frontend components, integrating third-party APIs, and optimizing performance for better user experiences. I also enjoy working with analytics dashboards, order tracking features, and content management through <span className="font-medium italic">Sanity CMS</span>.
        </p>

        <p>
          When I’m not coding, I enjoy sharing my insights and experiences on platforms like LinkedIn. Outside of tech, I love exploring new technologies, mentoring others, and gaming. I believe in the power of continuous learning, resilience, and collaboration in driving impactful results in the tech industry.
        </p>
      </div>
    </motion.section>
  )
}
