import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'getting-started/what-is-popup-city',
        'getting-started/why-popup-cities',
        'getting-started/key-principles',
        'getting-started/case-studies',
      ],
    },
    {
      type: 'category',
      label: 'Planning',
      items: [
        'planning/purpose-and-vision',
        'planning/location-selection',
        'planning/climate-considerations',
        'planning/funding-partnerships',
        'planning/risk-assessment',
      ],
    },
    {
      type: 'category',
      label: 'Infrastructure',
      items: [
        'infrastructure/core-components',
        'infrastructure/modular-design',
        'infrastructure/pathways',
        'infrastructure/accessibility',
        'infrastructure/safety',
      ],
    },
    {
      type: 'category',
      label: 'Digital Governance',
      items: [
        'digital-governance/implementation',
        'digital-governance/currency-system',
        'digital-governance/compliance',
        'digital-governance/privacy',
      ],
    },
    {
      type: 'category',
      label: 'Host Economy Integration',
      items: [
        'host-economy/local-partnerships',
        'host-economy/currency-integration',
        'host-economy/cultural-exchange',
        'host-economy/local-sourcing',
      ],
    },
    {
      type: 'category',
      label: 'Community Building',
      items: [
        'community/inclusivity',
        'community/engagement-activities',
        'community/feedback-systems',
        'community/events-management',
      ],
    },
    {
      type: 'category',
      label: 'Design Guidelines',
      items: [
        'design/aesthetic',
        'design/modular-principles',
        'design/signage',
        'design/green-spaces',
      ],
    },
    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/communication',
        'operations/roles',
        'operations/conflict-resolution',
        'operations/monitoring',
      ],
    },
    {
      type: 'category',
      label: 'Ticketing & Access',
      items: [
        'ticketing/sales-pricing',
        'ticketing/digital-integration',
        'ticketing/check-in',
        'ticketing/access-control',
      ],
    },
    {
      type: 'category',
      label: 'Accommodation',
      items: [
        'accommodation/housing-options',
        'accommodation/booking-system',
        'accommodation/sustainability',
        'accommodation/amenities',
      ],
    },
    {
      type: 'category',
      label: 'Exit Strategy',
      items: [
        'exit/monitoring',
        'exit/dismantling',
        'exit/improvements',
        'exit/legacy',
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/templates',
        'resources/glossary',
        'resources/faq',
        'resources/external-links',
      ],
    },
  ],
};

export default sidebars;
