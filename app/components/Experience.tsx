export default function Experience() {
  const experiences = [
    {
      title: "Research Assistant",
      organization: "Exploring Critical Algorithmic Literacies - University of Toronto",
      period: "5/2025 – 7/2025",
      responsibilities: [
        "Will conduct a comprehensive literature review and needs assessment to identify best practices and challenges in teaching algorithmic literacy",
        "Will contribute to developing and refining educational modules for Introducing Critical Algorithmic Literacies in Computer Programming",
        "Will edit and add new content to the eBook on the Open Library Publishing Platform"
      ]
    },
    {
      title: "Research Assistant",
      organization: "AI in Clinical Decision Making – University of Toronto",
      period: "9/2025 – 4/2026",
      responsibilities: [
        "Will conduct literature reviews on large language models (e.g., ChatGPT, Deepseek) to evaluate their application in clinical decision-making across various disease areas",
        "Will analyze and summarize AI-generated responses, identifying errors and contributing to best practices for clinical use and synthetic psychology development"
      ]
    }
  ];

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <div className="mb-2">
                <h3 className="text-lg font-bold">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{experience.organization}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{experience.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                {experience.responsibilities.map((responsibility, i) => (
                  <li key={i} className="mb-1">{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 