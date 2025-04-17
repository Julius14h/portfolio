import Image from 'next/image';
import Projects from './components/Projects';
import Education from './components/Education';

export default function Home() {
  const skills = [
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Description */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8 max-w-5xl mx-auto">
            {/* Profile Section */}
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="w-48 h-48 relative rounded-full overflow-hidden mb-6">
                <Image
                  src="/profile-photo.png"
                  alt="Julius Henriques"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                <a href="mailto:juliushenriques@hotmail.com" className="text-blue-600 hover:text-blue-800">
                  Email
                </a>
                <a href="https://linkedin.com/in/juliushenriques" className="text-blue-600 hover:text-blue-800">
                  LinkedIn
                </a>
                <a href="https://github.com/Julius14h" className="text-blue-600 hover:text-blue-800">
                  GitHub
                </a>
              </div>
            </div>

            {/* Description Section */}
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">Julius Henriques</h1>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Nice to meet you! I am a fifth year undergraduate student at the University of Toronto pursuing a degree in Computer Science, Biology, and Forensic Science. 
                  
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I created this porfolio website using cursor just so I could apply for the UofT Computer Science internship position! Web developmet has been my favourite programming experience so far at UTM and I would love to get the chance to explore that further.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m passionate about creating innovative solutions and learning new technologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <Education />

      {/* Skills Section */}
      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                    <div className="w-12 h-12 relative mb-2">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <Projects />
    </main>
  );
}
