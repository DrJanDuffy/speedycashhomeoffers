import { Link } from "react-router";

interface FlowStep {
  title: string;
  description: string;
  path: string;
  icon: string;
  isExternal?: boolean;
}

interface PageFlowProps {
  title: string;
  description: string;
  steps: FlowStep[];
  className?: string;
}

export default function PageFlow({ title, description, steps, className = "" }: PageFlowProps) {
  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const stepClassName = "bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group";
            
            return (
              step.isExternal ? (
                <a
                  key={step.path}
                  href={step.path}
                  className={stepClassName}
                >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Get started
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                </a>
              ) : (
                <Link
                  key={step.path}
                  to={step.path}
                  className={stepClassName}
                >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {step.description}
                </p>
                
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Get started
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                </Link>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
}
