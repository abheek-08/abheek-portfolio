import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  { id: "p1", title: "AI-Powered Resume Screener", description: "Parses resumes, extracts skills/experience with NLP, matches to job descriptions, and suggests improvements with generative AI.", tags: ["NLP", "OpenAI", "Streamlit"] },
  { id: "p2", title: "Personalized Recommendation Engine", description: "Movie/book recommender using collaborative filtering and LLMs, with real-time feedback loops.", tags: ["Machine Learning", "Data Handling", "Model Fine-tuning"] },
  { id: "p3", title: "Image Colorizer for Old Photos", description: "Colorizes black-and-white photos with GANs, offering a web interface and experiments with custom training.", tags: ["Computer Vision", "GANs", "Image Processing"] },
  { id: "p4", title: "Chatbot for Financial Advice", description: "Conversational agent using LangChain and OpenAI API for budgeting queries, CSV analysis, and reports.", tags: ["LangChain", "LLMs", "Prompt Engineering"] },
  { id: "p7", title: "Sentiment Analysis Dashboard for Social Media", description: "Analyzes tweets with NLP and visualizes trends, adding predictive time-series insights.", tags: ["NLP", "Data Visualization", "APIs"] },
  { id: "p8", title: "AI Code Assistant Prototype", description: "Prototype tool that assists developers with AI-driven code suggestions.", tags: ["AI", "Prototyping", "Code Assistance"] },
  { id: "p9", title: "Collision Avoidance Vehicle System", description: "System leveraging sensors and AI to detect obstacles and avoid collisions in real time.", tags: ["AI", "Sensors", "Real-time Processing"] },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-black text-white antialiased relative overflow-hidden">
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">AB</div>
          <div>
            <p className="text-sm text-slate-400">Abheek Bhattacharyya</p>
            <p className="text-xs text-slate-500">Entrepreneur and AI deeptech nerd :)</p>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#about" className="text-sm hover:underline">About</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Building AI-driven projects & products to impact the world.
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            I&#39;m Abheek, a 20-year-old entrepreneur and AI deeptech nerd focused on creating impactful, scalable, and human-centered AI-first products.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
            <Stat label="Age" value="20" />
            <Stat label="Projects" value={projects.length.toString()} />
            <Stat label="Location" value="Kolkata" />
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Projects</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">A selection of my work in AI, machine learning, and product building.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} className="overflow-hidden p-4 bg-gray-800">
              <CardContent>
                <h3 className="font-semibold text-lg text-white">{p.title}</h3>
                <p className="text-sm text-slate-300 mt-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-700">{t}</span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-white">About me</h2>
        <p className="mt-3 text-slate-300">
          I&#39;m Abheek Bhattacharyya, 20, based in Kolkata, India. I&#39;m focused on building the next-generation internet: a web that serves both humans and machines. For humans, it works as a familiar platform to share and access information. For machines, every piece of that information is automatically refined, structured, and streamed into a live machine readable layer. This dual system not only improves the human web experience but also builds the realtime data backbone that AI models worldwide will rely on for continuous learning and intelligence.
        </p>

        <h3 className="mt-6 font-semibold text-white">Skills & tools</h3>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Badge label="Python" />
          <Badge label="React" />
          <Badge label="TypeScript" />
          <Badge label="Tailwind" />
          <Badge label="Figma" />
          <Badge label="Node.js" />
          <Badge label="AI/ML" />
        </div>

        <h3 className="mt-6 font-semibold text-white">Approach</h3>
        <ol className="mt-2 list-decimal list-inside text-slate-300">
          <li>Start with user problems and metrics.</li>
          <li>Create focused experiments & prototypes.</li>
          <li>Ship iteratively with measurement and learning.</li>
        </ol>
      </section>

      <section id="contact" className="max-w-3xl mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Contact me</h2>
        <p className="mt-2 text-slate-300">Email: <a href="mailto:autonomy.technology@gmail.com" className="text-indigo-500 underline">autonomy.technology@gmail.com</a></p>
      </section>

      <footer className="border-t border-gray-700 mt-12 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold">AB</div>
            <div>
              <p className="text-sm text-slate-400">Abheek Bhattacharyya</p>
              <p className="text-xs text-slate-500">Entrepreneur and AI deeptech nerd :)</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" aria-label="X">
              <X className="text-white" />
            </a>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} Abheek Bhattacharyya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-gray-800 rounded-lg text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-white">{label}</span>;
}