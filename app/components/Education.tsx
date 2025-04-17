export default function Education() {
  const education = {
    university: "University of Toronto",
    period: "09/2020 – 06/2026",
    degree: "Honours Bachelor of Science",
    majors: ["Computer Science", "Biology", "Forensic Science"],
    coursework: [
      "Software Design",
      "Computer Organization",
      "Software Tools and Systems Programming",
      "Design of Interactive Computational Media",
      "Programming on the Web",
      "Theory of Computation Mathematical Proofs",
      "Biological Data"
    ]
  };

  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <div className="mb-3">
              <h3 className="text-xl font-bold mb-1">{education.university}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{education.period}</p>
            </div>
            
            <div className="mb-3">
              <h4 className="text-lg font-semibold mb-2">{education.degree}</h4>
              <div className="flex flex-wrap gap-2">
                {education.majors.map((major, index) => (
                  <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-2 py-1 rounded-full text-sm">
                    {major}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-2">Relevant Coursework</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {education.coursework.map((course, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-blue-600">•</span>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 