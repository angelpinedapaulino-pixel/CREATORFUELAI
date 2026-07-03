'use client'

import {
  Flame, Anchor, Type, AlignLeft, MousePointerClick, Clapperboard, CalendarDays,
  Sparkles, Youtube, Instagram, Music2, Twitter, Linkedin, Facebook, Globe,
  type LucideIcon,
} from 'lucide-react'

const MAP: Record<string, LucideIcon> = {
  Flame, Anchor, Type, AlignLeft, MousePointerClick, Clapperboard, CalendarDays,
  Sparkles, Youtube, Instagram, Music2, Twitter, Linkedin, Facebook, Globe,
}

export function ToolIcon({ name, className }: { name: string; className?: string }) {
  const Icon = MAP[name] ?? Sparkles
  return <Icon className={className} />
}

const PLATFORM_ICON: Record<string, LucideIcon> = {
  YouTube: Youtube,
  Instagram: Instagram,
  TikTok: Music2,
  'Twitter / X': Twitter,
  Twitter: Twitter,
  LinkedIn: Linkedin,
  Facebook: Facebook,
  'All Platforms': Globe,
}

export function PlatformIcon({ name, className }: { name: string; className?: string }) {
  const Icon = PLATFORM_ICON[name] ?? Globe
  return <Icon className={className} />
}
