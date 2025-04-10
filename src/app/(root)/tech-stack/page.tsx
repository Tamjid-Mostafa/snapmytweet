import React from "react";

const techStack = {
  "Front-End": [
    { name: "React", logo: "/icons/react.svg" },
    { name: "TailwindCSS", logo: "/icons/tailwind.svg" },
    { name: "shadcn/ui", logo: "/icons/shadcn.svg" },
    { name: "NextJS", logo: "/icons/nextjs.svg" },
  ],
  "Back-End": [
    { name: "NextJS", logo: "/icons/nextjs.svg" },
    { name: "MongoDB", logo: "/icons/mongodb.svg" },
  ],
  Language: [
    { name: "Typescript", logo: "/icons/typescript.svg" },
    { name: "JavaScript", logo: "/icons/javascript.svg" },
  ],
  Hosting: [
    { name: "Vercel", logo: "/icons/vercel.svg" },
    { name: "Mongo Atlas", logo: "/icons/mongodb.svg" },
  ],

  "Third Party": [
    { name: "AuthJS", logo: "/icons/authjs.webp" },
    { name: "Resend", logo: "/icons/resend.svg" },
    { name: "Stripe", logo: "/icons/stripe.svg" },
    { name: "Upstash", logo: "/icons/upstash.svg" },
    { name: "MUX", logo: "/icons/mux.svg" },
  ],
  AI: [
    { name: "Cursor", logo: "/icons/cursor.svg" },
    { name: "OpenAI", logo: "/icons/openai.svg" },
  ],
};

const TechStackGrid = () => {
  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold  text-center">My Tech Stack</h2>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 p-6 max-w-2xl mx-auto">
        {Object.entries(techStack).map(([category, tools]) => (
          <div
            key={category}
            className="mb-6 break-inside-avoid p-4 bg-white rounded-lg shadow"
          >
            <h3 className="text-lg uppercase mb-4 underline">{category}</h3>
            <ul className="space-y-3">
              {tools.map((tool) => (
                <li key={tool.name} className="flex items-center space-x-3">
                  <img src={tool.logo} alt={tool.name} className="w-6 h-6" />
                  <span className="text-lg">{tool.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackGrid;
