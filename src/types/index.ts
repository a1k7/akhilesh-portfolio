export type AdmissibilityStatus = 'ADMIT' | 'HOLD' | 'DENY';

export interface FailureExperiment {
  id: string;
  number: string;
  title: string;
  expectedOutcome: AdmissibilityStatus;
  hypothesis: string;
  setup: string;
  observedBehavior: string;
  decision: string;
  whatItTaughtMe: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas?: string[];
  tags: string[];
  githubUrl?: string;
  prUrl?: string;
  isUpstreamPr?: boolean;
}

export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
  isMilestone?: boolean;
}
