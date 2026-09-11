import type { ComponentType } from 'react'
import {
  SiCplusplus,
  SiCss,
  SiFirebase,
  SiGoogleanalytics,
  SiHtml5,
  SiShopify,
  SiStrapi,
  SiVmware,
} from 'react-icons/si'
import { TbBrandAzure, TbBrandOffice, TbBrandWindows } from 'react-icons/tb'
import { BarChart3, Cloud, Megaphone, Radar, Store } from 'lucide-react'

type IconComponent = ComponentType<{ size?: number; color?: string; className?: string }>

/**
 * Maps a skill name to a recognizable icon and its real brand color.
 * Where no official brand mark exists (internal tools, process skills like
 * "Root Cause Analysis"), a generic Lucide icon is used instead of a fake
 * logo — colored to match the skill's category so it still reads as part
 * of a coherent, colorful set.
 */
export const skillIconMap: Record<string, { Icon: IconComponent; color: string }> = {
  'Microsoft Azure': { Icon: TbBrandAzure, color: '#0078D4' },
  'Azure Compute': { Icon: TbBrandAzure, color: '#0078D4' },
  'Azure Portal': { Icon: TbBrandAzure, color: '#0078D4' },
  'Power BI': { Icon: BarChart3, color: '#F2C811' },
  'Google Analytics (GA4)': { Icon: SiGoogleanalytics, color: '#E37400' },
  Firebase: { Icon: SiFirebase, color: '#FFCA28' },
  AppsFlyer: { Icon: Radar, color: '#F06060' },
  MoEngage: { Icon: Megaphone, color: '#EC4899' },
  Magento: { Icon: Store, color: '#F26322' },
  Shopify: { Icon: SiShopify, color: '#95BF47' },
  Strapi: { Icon: SiStrapi, color: '#4945FF' },
  'VMware Virtualization': { Icon: SiVmware, color: '#607078' },
  'Windows Server': { Icon: TbBrandWindows, color: '#00A4EF' },
  'Office 365': { Icon: TbBrandOffice, color: '#EB3C00' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#663399' },
  'C++': { Icon: SiCplusplus, color: '#00599C' },
}

/** Fallback icon for a category, used for skills with no dedicated brand mark. */
export const categoryFallbackIcon: IconComponent = Cloud
