import TechStack from '../components/TechStack';

export default function SkillsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Technical Skills</h1>
        </div>
      </section>
      <TechStack />
    </main>
  );
} 