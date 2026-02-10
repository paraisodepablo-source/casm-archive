import { readFileSync } from 'node:fs';

const source = readFileSync('src/components/home/HeroSection.tsx', 'utf8');

const checks = [
  {
    name: 'headline copy',
    pattern: /A public standard for clinical competence\./,
  },
  {
    name: 'primary CTA copy',
    pattern: /Explore the credential/,
  },
  {
    name: 'secondary CTA copy',
    pattern: /View exam blueprints/,
  },
  {
    name: 'tertiary link copy',
    pattern: /Read governance structure/,
  },
  {
    name: 'institutional controls card label',
    pattern: /CASM STANDARD · v1\.0/,
  },
  {
    name: 'ledger row Standards',
    pattern: /label: "Standards"/,
  },
  {
    name: 'ledger row Ethics',
    pattern: /label: "Ethics"/,
  },
  {
    name: 'ledger row Registry',
    pattern: /label: "Registry"/,
  },
  {
    name: 'reduced-motion support',
    pattern: /useReducedMotion\(\)/,
  },
];

const failed = checks.filter(({ pattern }) => !pattern.test(source));

if (failed.length > 0) {
  console.error('Hero validation failed:');
  for (const item of failed) {
    console.error(` - Missing ${item.name}`);
  }
  process.exit(1);
}

console.log(`Hero validation passed (${checks.length} checks).`);
