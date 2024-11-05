import React from 'react'
import Hero from "../../../components/containers/hero"
import Features from "../../../components/containers/features"
import Discover from "../../../components/containers/discover"
import Unlocking from "../../../components/containers/unlocking"

import Genesis from "../../../components/containers/genesis"
import Unleashing from "../../../components/containers/unleashing"
import Distributed from "../../../components/containers/distributed"
import MultiLanguage from "../../../components/containers/multi-language"
import FAQs from "../../../components/containers/faqs"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Discover />
      <Unlocking />
      <Genesis />
      <Unleashing />
      <Distributed />
      <MultiLanguage />
      <FAQs />
    </>
  )
}
