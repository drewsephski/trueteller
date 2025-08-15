"use client"

import * as React from "react"
import { Home, FileText, Info, BarChart2, BarChart3, Mail, MessageCircle, Users } from "lucide-react"
import { AnimeNavBar } from "./anime-navbar"

const items = [
  {
    name: "Home",
    url: "/",
    icon: Home,
  },
  {
    name: "Take Test",
    url: "/test",
    icon: FileText,
  },
  {
    name: "Results",
    url: "/results",
    icon: BarChart3,
  },
  {
    name: "Analysis",
    url: "/detailed-results",
    icon: BarChart2,
  },
  {
    name: "Personality Types",
    url: "/personality-types",
    icon: Users,
  },
  {
    name: "About Us",
    url: "/about",
    icon: Info,
  },
  {
    name: "Contact",
    url: "/contact",
    icon: Mail,
  },
  {
    name: "Feedback",
    url: "/feedback",
    icon: MessageCircle,
  }
]

export function AnimeNavBarDemo() {
  return <AnimeNavBar items={items} defaultActive="Home" />
}
