import AcademicInterests from '../components/AcademicInterests';

export default function About() {
  return (
    <main className="min-h-screen">
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6 text-center">About Me</h1>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                I&apos;m a Computer Science student at the University of Toronto, specializing in Software Engineering. I&apos;m passionate about creating innovative solutions and learning new technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Currently, I am focused on web development and healthcare technology, aiming to create solutions that make a positive 
                impact on people&apos;s lives. My goal is to become a software developer and gain admission to UTM&apos;s Digital Health graduate program.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AcademicInterests />
    </main>
  );
} 