import Image from 'next/image';

export default function Profile() {
  return (
    <section className="py-8 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="w-32 h-32 relative rounded-full overflow-hidden">
            <Image
              src="/profile-placeholder.jpg"
              alt="Julius Henriques"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">Julius Henriques</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-2">
              Computer Science, Biology, and Forensic Science Student at University of Toronto
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a href="mailto:juliushenriques@hotmail.com" className="text-blue-600 hover:text-blue-800">
                juliushenriques@hotmail.com
              </a>
              <a href="https://linkedin.com/in/juliushenriques" className="text-blue-600 hover:text-blue-800">
                LinkedIn
              </a>
              <a href="https://github.com/Julius14h" className="text-blue-600 hover:text-blue-800">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 