import Experience from '../components/Experience';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">Work Experience</h1>
        </div>
      </section>
      <Experience />
    </main>
  );
} 