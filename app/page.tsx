'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ArrowRight, Sparkles, Brain, Share2, BarChart3, LayoutTemplate, Users,
  PenLine, Wand2, Rocket, Check, Star, Youtube, Instagram, Twitter, Linkedin,
  Facebook, Music2, Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from '@/components/ui/accordion'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { ContactForm } from '@/components/landing/contact-form'
import { PLANS } from '@/lib/constants'

const FEATURES = [
  { icon: PenLine, title: 'Content Generator', desc: 'Generate blog posts, captions, scripts and ad copy in seconds, tuned to your brand voice.' },
  { icon: Brain, title: 'Business Brain', desc: 'Teach the AI about your business once and get consistent, on-brand output everywhere.' },
  { icon: Share2, title: 'Multi-Platform', desc: 'Optimize content for YouTube, Instagram, TikTok, LinkedIn, X and Facebook automatically.' },
  { icon: BarChart3, title: 'Analytics', desc: 'Track credits, projects and content performance from a single premium dashboard.' },
  { icon: LayoutTemplate, title: 'Templates', desc: 'Kick-start any project with proven, high-converting content templates.' },
  { icon: Users, title: 'Team Collaboration', desc: 'Invite your team, share brand profiles and create together in one workspace.' },
]

const STEPS = [
  { icon: Brain, title: 'Build your Business Brain', desc: 'Answer a short guided wizard about your brand, audience and goals.' },
  { icon: Wand2, title: 'Generate on-brand content', desc: 'Pick a format and let the AI create content that sounds exactly like you.' },
  { icon: Rocket, title: 'Publish everywhere', desc: 'Export and share optimized content across every platform that matters.' },
]

const PLATFORMS = [
  { name: 'YouTube', icon: Youtube, color: '#FF0000' },
  { name: 'Instagram', icon: Instagram, color: '#E1306C' },
  { name: 'TikTok', icon: Music2, color: '#22d3ee' },
  { name: 'Twitter / X', icon: Twitter, color: '#38bdf8' },
  { name: 'LinkedIn', icon: Linkedin, color: '#0A66C2' },
  { name: 'Facebook', icon: Facebook, color: '#1877F2' },
]

const TESTIMONIALS = [
  { name: 'Maya Rodriguez', role: 'YouTube Creator, 480K subs', quote: 'CreatorFuel AI cut my scripting time in half. The Business Brain keeps every video sounding like me.' },
  { name: 'James Carter', role: 'Founder, Brightleaf SaaS', quote: 'We went from sporadic posts to a daily content engine. Our LinkedIn engagement tripled in six weeks.' },
  { name: 'Aisha Bello', role: 'Social Media Manager', quote: 'Managing five brands used to be chaos. Now each one has its own brain and voice. Total game changer.' },
  { name: 'Daniel Kim', role: 'E-commerce Owner', quote: 'Product descriptions and ad copy that actually convert, generated in minutes. It paid for itself fast.' },
  { name: 'Sofia Rossi', role: 'Marketing Consultant', quote: 'The multi-platform optimization is brilliant. One idea, perfectly reshaped for every channel.' },
  { name: 'Liam O’Connor', role: 'Fitness Coach & Influencer', quote: 'My captions and reels scripts have never been better. My audience keeps asking how I post so consistently.' },
]

const FAQS = [
  { q: 'What is CreatorFuel AI?', a: 'CreatorFuel AI is an AI-powered content creation platform that learns your brand through a Business Brain and generates on-brand content for every major platform.' },
  { q: 'Do I need any technical skills?', a: 'Not at all. You set up your Business Brain with a simple guided wizard, then generate content with a few clicks. No prompts or coding required.' },
  { q: 'How do credits work?', a: 'Every plan comes with monthly credits that are used when you generate content. Free includes 100 credits per month, and paid plans include far more.' },
  { q: 'Which platforms are supported?', a: 'YouTube, Instagram, TikTok, Twitter / X, LinkedIn and Facebook — with content automatically tailored to each one.' },
  { q: 'Can I use it for multiple brands?', a: 'Yes. Pro and Enterprise plans support unlimited Business Brain profiles so you can manage several brands from one workspace.' },
  { q: 'Is my data secure?', a: 'Absolutely. Your brand data and content are stored securely and are never shared. You stay in full control of your workspace at all times.' },
]

const STATS = [
  { value: 2, suffix: 'M+', label: 'Pieces of content created' },
  { value: 50, suffix: 'K+', label: 'Creators & businesses' },
  { value: 6, suffix: '', label: 'Platforms supported' },
  { value: 98, suffix: '%', label: 'Would recommend' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: 'easeOut' } }),
}

function SectionHeader({ badge, title, desc }: { badge: string; title: React.ReactNode; desc: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <Badge variant="secondary" className="mb-4 gap-1.5"><Sparkles className="h-3.5 w-3.5 text-primary" /> {badge}</Badge>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-3 text-muted-foreground">{desc}</p>
    </div>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
        <div className="relative mx-auto w-full max-w-[1200px] px-4 text-center sm:px-6">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <Badge variant="secondary" className="mb-6 gap-1.5 px-3 py-1.5">
              <Zap className="h-3.5 w-3.5 text-primary" /> AI content creation, on autopilot
            </Badge>
          </motion.div>
          <motion.h1
            initial="hidden" animate="show" custom={1} variants={fadeUp}
            className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Fuel your content engine with{' '}
            <span className="brand-gradient-text">AI that knows your brand</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="show" custom={2} variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            CreatorFuel AI turns your brand knowledge into scroll-stopping content for every platform.
            Set up your Business Brain once and generate on-brand posts, scripts and campaigns in seconds.
          </motion.p>
          <motion.div
            initial="hidden" animate="show" custom={3} variants={fadeUp}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/signup">Get started free <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <a href="#how">See how it works</a>
            </Button>
          </motion.div>
          <p className="mt-4 text-xs text-muted-foreground">No credit card required • 100 free credits every month</p>

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl bg-card/70 p-4 shadow-sm backdrop-blur">
                <div className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  {s.value}{s.suffix}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="Features"
            title={<>Everything you need to <span className="brand-gradient-text">create faster</span></>}
            desc="A complete toolkit built to help creators and businesses produce consistent, high-quality content."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}
                className="group rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-card/40 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="How it works"
            title={<>From idea to published in <span className="brand-gradient-text">3 steps</span></>}
            desc="No prompts to master, no blank pages. Just a simple flow from brand setup to published content."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="relative rounded-2xl bg-card p-7 shadow-sm"
              >
                <span className="absolute right-6 top-6 font-display text-5xl font-bold text-primary/15">{i + 1}</span>
                <span className="mb-5 grid h-12 w-12 place-items-center rounded-xl brand-gradient text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms" className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="Platforms"
            title={<>Optimized for every <span className="brand-gradient-text">channel</span></>}
            desc="Create once and publish everywhere. CreatorFuel AI tailors your content to each platform's format and audience."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center gap-3 rounded-2xl bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary" style={{ color: p.color }}>
                  <p.icon className="h-6 w-6" />
                </span>
                <span className="text-sm font-medium">{p.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-card/40 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="Pricing"
            title={<>Simple, transparent <span className="brand-gradient-text">pricing</span></>}
            desc="Start free and upgrade as you grow. No hidden fees, cancel anytime."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.id} custom={i} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
                className={`relative flex flex-col rounded-2xl p-7 shadow-sm ${plan.highlighted ? 'bg-card ring-2 ring-primary brand-glow' : 'bg-card'}`}
              >
                {plan.highlighted && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most popular</Badge>
                )}
                <h3 className="font-display text-lg font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="font-display text-4xl font-bold">${plan.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="mt-1 text-xs font-medium text-primary">{plan.credits}</p>
                <ul className="mt-6 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7" variant={plan.highlighted ? 'default' : 'outline'}>
                  <Link href="/signup">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="Testimonials"
            title={<>Loved by <span className="brand-gradient-text">creators &amp; teams</span></>}
            desc="Join thousands of creators and businesses already fueling their content with AI."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-40px' }} variants={fadeUp}
                className="flex flex-col rounded-2xl bg-card p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="flex-1 text-sm text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full brand-gradient text-sm font-semibold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-card/40 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeader
            badge="FAQ"
            title={<>Frequently asked <span className="brand-gradient-text">questions</span></>}
            desc="Everything you need to know about CreatorFuel AI."
          />
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="mb-3 rounded-2xl border-none bg-card px-5 shadow-sm">
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <SectionHeader
            badge="Contact"
            title={<>Let&apos;s <span className="brand-gradient-text">talk</span></>}
            desc="Have a question or want a demo? Send us a message and we'll be in touch."
          />
          <div className="mx-auto max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-[24px] brand-gradient p-10 text-center shadow-lg sm:p-16">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to fuel your content?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-white/85">
                Start creating on-brand content in minutes. Free forever plan, no credit card required.
              </p>
              <Button asChild size="lg" variant="glass-dark" className="mt-7 text-white">
                <Link href="/signup">Create your free account <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
