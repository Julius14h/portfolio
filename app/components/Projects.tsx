import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      title: "DreamScape",
      description: "First place winner at Deerhacks IV 2025 Hackathon - A journey of self-discovery through dreams",
      details: [
        "A full-stack web application that helps users analyze their dreams through AI-powered interpretations",
        "Users can input dreams via text or speech and receive three unique perspectives: psychological, symbolic, and actionable",
        "Designed and implemented the backend infrastructure for user management and dream logging",
        "Created a SQLite database schema to store user accounts and dream entries",
        "Built RESTful API endpoints for user authentication and dream entry management"
      ],
      tools: ["Next.js", "Prisma", "SQLite", "Postman", "Typescript", "Linux", "Python", "Gemini", "Express.js", "Node.js"],
      github: "https://github.com/Julius14h/dreamscape",
      link: "https://devpost.com/software/dreamspace?ref_content=user-portfolio&ref_feature=in_progress",
      linkText: "Devpost",
      team: [
        "Pratham Vijh: Led frontend development",
        "JahangirMinhas Minhas: Speech-to-text and full-stack integration",
        "Tejovardhan Nepala: AI Integration",
        "Julius Henriques: Backend database and API development"
      ],
      featured: true,
      image: "/dreamscape-home.png",
      secondaryImage: "/dreamscape-dream.png"
    },
    {
      title: "FlyNext",
      description: "A full-stack travel-planning web application",
      details: [
        "Worked in a team to build a full-stack travel-planning web application",
        "Implemented the API endpoints for user authentication and creation and hotel searching notification logic",
        "Designed and implemented all frontend features using React and TailwindCSS"
      ],
      tools: ["Next.js", "Linux", "Typescript", "Prisma", "Postgres", "Tailwind", "React", "Vercel"],
      link: "https://flynext-raj.vercel.app/",
      linkText: "Live Demo",
      github: "https://github.com/Julius14h/flynext",
      image: "/flynext-home.png"
    },
    {
      title: "Adventure Game",
      description: "Enhanced JavaFX game with advanced features",
      details: [
        "Enhanced an existing game with JavaFX, adding delete functionality using serialization",
        "Implemented zoom capabilities via the Decorator pattern for a more dynamic UI"
      ],
      tools: ["Java", "JavaFx", "Serialization", "Git", "IntelliJ"],
      github: "https://github.com/Julius14h/adventure-game",
      image: "/adventure-game.png"
    }
  ];

  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {project.secondaryImage && (
                    <div className="absolute bottom-2 right-2 w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-md">
                      <Image 
                        src={project.secondaryImage} 
                        alt={`${project.title} detail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="md:w-1/2">
                      <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{project.description}</p>
                      {project.featured && (
                        <div className="mb-2">
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
                            Featured Project
                          </span>
                        </div>
                      )}
                      <div className="flex gap-3 text-sm mb-4">
                        {project.link && (
                          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                            {project.linkText || "Live Demo"}
                          </a>
                        )}
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                          </svg>
                          GitHub
                        </a>
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="mb-3">
                        <h4 className="font-semibold text-sm mb-1">Details:</h4>
                        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                          {project.details.map((detail, i) => (
                            <li key={i} className="mb-1">{detail}</li>
                          ))}
                        </ul>
                      </div>
                      {project.team && (
                        <div className="mb-3">
                          <h4 className="font-semibold text-sm mb-1">Team:</h4>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-sm">
                            {project.team.map((member, i) => (
                              <li key={i} className="mb-1">{member}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-sm mb-1">Tools Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-0.5 rounded-full text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 