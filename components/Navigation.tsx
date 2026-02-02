import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-brand-bg-secondary border-b border-brand-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-brand-accent-orange hover:text-brand-accent-orange-hover transition">
            HVAC Student Resources
          </Link>
          <div className="flex gap-4 items-center">
            <Link href="/g2" className="text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary px-3 py-2 rounded-md transition">
              G2 Resources
            </Link>
            <Link href="/g3" className="text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary px-3 py-2 rounded-md transition">
              G3 Resources
            </Link>
            <Link href="/quiz" className="text-brand-accent-orange hover:text-brand-accent-orange-hover px-3 py-2 rounded-md transition font-medium">
              📝 Quiz Generator
            </Link>
            <Link href="/csa" className="text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary px-3 py-2 rounded-md transition">
              CSA
            </Link>
            <Link href="/csa-reference" className="text-brand-accent-blue hover:text-brand-accent-blue-hover px-3 py-2 rounded-md transition font-medium">
              📚 Quick Ref
            </Link>
            <Link href="/tssa" className="text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-bg-tertiary px-3 py-2 rounded-md transition">
              TSSA
            </Link>
            <Link href="/career-calculator" className="bg-brand-accent-orange text-white px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition">
              🚀 Career Path
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}