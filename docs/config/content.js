// Optify Landing Page Content Configuration
// Centralized content to maintain consistency with brand guidelines

export const content = {
  site: {
    title: 'Optify | Supervisory Optimization for Industrial Process Drift',
    description: 'Optify provides a bounded, edge-resident supervisory optimization layer for industrial process drift. It works above existing PLC, DCS, APC, or MPC systems to recommend inspectable trims and support controlled re-baselining after maintenance.',
    url: 'https://optify.io',
    keywords: ['industrial process optimization', 'supervisory optimizer', 'process drift detection', 'edge control system', 'local digital twin', 'industrial AI', 'PLC optimization layer', 'process control advisory system', 'maintenance re-baselining', 'bounded optimization'],
    email: 'validation@optify.io',
    phone: '+91-XXXX-XXXX-XX',
  },

  navigation: {
    items: [
      { label: 'Problem', href: '#problem' },
      { label: 'Architecture', href: '#architecture' },
      { label: 'Maintenance', href: '#maintenance' },
      { label: 'Validation', href: '#validation' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: {
      label: 'Request Validation',
      href: '#contact',
    },
  },

  hero: {
    headline: 'Bounded Supervisory Optimization for Industrial Process Drift',
    subheadline: 'Optify sits above existing PLC, DCS, APC, or MPC systems to identify localized process drift, recommend inspectable trims, and support controlled re-baselining after maintenance.',
    trustLine: 'Edge-resident. Physics-informed. Advisory-first. Built for bounded deployment.',
    cta: {
      primary: {
        label: 'Request an Engineering Validation',
        href: '#contact',
      },
      secondary: {
        label: 'View Architecture',
        href: '#architecture',
      },
    },
  },

  problem: {
    headline: 'Optimization rarely fails on day one. It fails after the plant changes.',
    copy: `Industrial models often perform well during commissioning. The harder test comes later.

Sensors are replaced. Actuators age. Cleaning changes heat transfer. Air leakage is corrected. Ambient conditions shift. Recipes change. Startup data becomes noisy. Operators intervene.

A model that cannot separate steady-state behavior from transient noise will eventually lose trust.

The question is not whether optimization is possible.

The question is whether optimization remains trustworthy after the plant changes.`,
  },

  whatOptifyDoes: {
    headline: 'A supervisory layer for localized process behavior',
    intro: 'Optify does not attempt to learn the entire factory from raw data. It builds smaller, physics-informed local digital twins around selected high-value process loops and operating zones.',
    cards: [
      {
        id: 'drift-detection',
        icon: 'chart-icon',
        headline: 'Local Drift Detection',
        description: 'Detects shifts in machine behavior, process response, or operating-zone performance using relevant historical comparison sets.',
      },
      {
        id: 'inspectable-math',
        icon: 'calculator-icon',
        headline: 'Inspectable Mathematical Layer',
        description: 'Uses distance-based similarity, local interpolation, and regularized solvers instead of a generic black-box AI model.',
      },
      {
        id: 'advisory-trim',
        icon: 'slider-icon',
        headline: 'Advisory Trim Recommendations',
        description: 'Recommends conservative trims or setpoint support that can remain advisory or be mapped into strict PLC-bounded limits.',
      },
      {
        id: 'reset-learn',
        icon: 'maintenance-icon',
        headline: 'Reset & Learn After Maintenance',
        description: 'Supports controlled re-baselining after maintenance using verified steady-state data, not noisy startup transients.',
      },
    ],
  },

  containedDeployment: {
    headline: 'Designed for contained deployment',
    copy: 'Optify is designed to reduce the risk profile of industrial AI adoption. It can begin in advisory mode, operate within defined process boundaries, and reduce authority when confidence is low.',
    highlight: 'Core principle: low confidence reduces authority.',
    checklist: [
      'Sits above existing automation',
      'Does not replace PLC or safety logic',
      'Starts in advisory mode',
      'Uses engineer-visible thresholds',
      'Blocks low-confidence recommendations',
      'Supports fallback to base automation',
      'Handles maintenance through human-gated re-baselining',
      'Operates locally at the edge without cloud dependency',
    ],
  },

  architecture: {
    headline: 'Edge architecture built around process context',
    copy: 'Optify\'s model quality depends on context, not raw data volume. Data is filtered and classified by recipe, operating mode, sensor validity, machine state, maintenance context, and operating zone before it is used for local comparison.',
    engineeringNote: 'The model does not treat all historical data as equally valid. It compares the current state only against relevant, verified operating conditions.',
  },

  maintenance: {
    headline: 'Reset & Learn: controlled re-baselining after maintenance',
    copy: `Post-maintenance startup data is often chaotic. Lines are being cleared. Temperatures are settling. Operators may intervene more frequently. Mechanical behavior may stabilize only after initial running.

Optify does not blindly self-tune on this data.

After maintenance, affected local models can be placed into advisory or restricted mode. The system continues to observe, but re-baselining is performed only after a verified steady-state learning window is approved.`,
    highlight: 'The goal is not blind self-learning. The goal is disciplined re-baselining.',
  },

  engineeringVisibility: {
    headline: 'Engineer-visible parameters, not magic AI sliders',
    copy: 'Optify exposes the important mathematical and control-governance levers to engineers during commissioning and review. Operators see clear recommendations. Engineers can inspect the thresholds behind those recommendations.',
    note: 'These are commissioning and governance parameters, not everyday operator controls.',
    parameters: [
      { name: 'Mahalanobis distance threshold', purpose: 'Rejects dissimilar historical states' },
      { name: 'Minimum neighbor count', purpose: 'Prevents weak interpolation from sparse comparison sets' },
      { name: 'Interpolation radius', purpose: 'Defines the local operating neighborhood' },
      { name: 'Ridge regularization strength', purpose: 'Stabilizes local fitting under noisy or sparse data' },
      { name: 'Confidence floor', purpose: 'Blocks recommendations below accepted certainty' },
      { name: 'Maximum advisory trim', purpose: 'Limits recommendation amplitude' },
      { name: 'Freshness weighting', purpose: 'Controls how recent verified data influences local behavior' },
      { name: 'Zone classification', purpose: 'Separates physically different operating regions' },
      { name: 'Fallback rule', purpose: 'Defines behavior when confidence is low' },
    ],
  },

  existingControlSystems: {
    headline: 'Works with the existing control stack',
    copy: `Optify is not designed to displace the plant's existing PLC, DCS, APC, or MPC systems.

Core automation remains responsible for execution, interlocks, safety, and established control strategy. Optify sits above this foundation as a supervisory optimizer for selected local behaviors affected by drift, maintenance, recipe variation, ambient conditions, or machine-specific response.

This makes Optify a low-conflict addition to the control environment.`,
    highlight: 'Existing automation protects the plant. Optify improves visibility and recommendation quality around it.',
  },

  validationPath: {
    headline: 'Validate on one high-value loop',
    copy: 'Optify does not require a plant-wide deployment to prove value. The recommended starting point is one bounded validation on a selected process loop where drift, variation, or manual correction currently affects consistency.',
    highlight: 'The validation is designed to be reversible, inspectable, and limited in scope.',
    steps: [
      {
        number: 1,
        title: 'Select One Loop',
        description: 'Identify one high-value process loop with measurable quality, energy, throughput, or consistency impact.',
      },
      {
        number: 2,
        title: 'Define Boundaries',
        description: 'Define operating zones, valid data windows, exclusion rules, actuator limits, and fallback behavior.',
      },
      {
        number: 3,
        title: 'Build Local Digital Twin',
        description: 'Use verified historical data to build a physics-informed local model around the selected behavior.',
      },
      {
        number: 4,
        title: 'Run Advisory Comparison',
        description: 'Compare Optify\'s recommendations against actual plant outcomes without changing the process.',
      },
      {
        number: 5,
        title: 'Review With Engineers',
        description: 'Inspect distance thresholds, neighbor quality, confidence scores, and recommendation logic.',
      },
      {
        number: 6,
        title: 'Decide Integration Level',
        description: 'Continue advisory mode, map recommendations into PLC-bounded limits, or stop the validation.',
      },
    ],
  },

  finalCta: {
    headline: 'Start with one loop. Prove the behavior. Then decide.',
    copy: 'Optify is built for controlled industrial validation. Select one process loop, define the operating envelope, and test whether bounded local mathematics can improve drift visibility and recommendation quality before deeper integration.',
    cta: {
      primary: {
        label: 'Request an Engineering Validation',
        href: '#contact',
      },
      secondary: {
        label: 'Download Technical Note',
        href: '#',
      },
    },
  },

  contact: {
    headline: 'Request an Engineering Validation',
    description: 'Tell us about your process. We\'ll review the context and respond with the next validation step.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true },
      { name: 'company', label: 'Company', type: 'text', required: true },
      { name: 'email', label: 'Work Email', type: 'email', required: true },
      { name: 'role', label: 'Role', type: 'text', required: true },
      { name: 'industry', label: 'Industry', type: 'text', required: true },
      { name: 'processArea', label: 'Process Area', type: 'text', required: true },
      { name: 'interest', label: 'What would you like to evaluate?', type: 'select', required: false, options: [
        'Moisture control',
        'Dryer / cooler optimization',
        'Energy consistency',
        'Process drift',
        'Maintenance re-baselining',
        'Operator advisory system',
        'Other',
      ] },
      { name: 'message', label: 'Message', type: 'textarea', required: false },
    ],
    submitLabel: 'Request Validation',
    successMessage: 'Thank you. Optify will review the process context and respond with the next validation step.',
  },

  footer: {
    company: 'Optify Industrial Solutions Pvt. Ltd.',
    location: 'Pune, India',
    email: 'validation@optify.io',
    tagline: 'Bounded supervisory optimization for industrial process drift.',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Technical Note', href: '/technical-note.pdf' },
    ],
  },
};
