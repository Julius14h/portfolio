export default function TechStack() {
  const skills = {
    languages: ["Python", "R", "Linux", "C", "Java", "Assembly", "SQL", "JavaScript", "Typescript", "LaTex", "HTML", "CSS"],
    frameworks: ["SQLite", "VSCode", "Intellij", "Node.js", "Next.js", "JavaFx", "Postman", "React", "Tailwind", "GIT", "Prisma"],
    tools: ["Git", "VSCode", "Intellij", "PyCharm", "Figma", "Postman"]
  };

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Technical Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Languages</h3>
              <div className="flex flex-wrap gap-1">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Frameworks & Libraries</h3>
              <div className="flex flex-wrap gap-1">
                {skills.frameworks.map((skill, index) => (
                  <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-0.5 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Developer Tools</h3>
              <div className="flex flex-wrap gap-1">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-2 py-0.5 rounded-full text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 