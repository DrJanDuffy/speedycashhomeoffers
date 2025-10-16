import { Link } from "react-router";

interface EnhancedCTAProps {
  title: string;
  description: string;
  primaryAction: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
  secondaryAction?: {
    text: string;
    href: string;
    isExternal?: boolean;
  };
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

export default function EnhancedCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  backgroundColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
}: EnhancedCTAProps) {
  const PrimaryButton = primaryAction.isExternal ? 'a' : Link;
  const SecondaryButton = secondaryAction?.isExternal ? 'a' : Link;

  return (
    <section className={`py-16 ${backgroundColor} ${textColor} ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-xl mb-8">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <PrimaryButton
            {...(primaryAction.isExternal 
              ? { href: primaryAction.href }
              : { to: primaryAction.href }
            )}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            onClick={() => {
              if (typeof window !== 'undefined' && window.trackCTAClick) {
                window.trackCTAClick(primaryAction.text, window.location.href);
              }
            }}
          >
            {primaryAction.text}
          </PrimaryButton>
          
          {secondaryAction && (
            <SecondaryButton
              {...(secondaryAction.isExternal 
                ? { href: secondaryAction.href }
                : { to: secondaryAction.href }
              )}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              onClick={() => {
                if (typeof window !== 'undefined' && window.trackCTAClick) {
                  window.trackCTAClick(secondaryAction.text, window.location.href);
                }
              }}
            >
              {secondaryAction.text}
            </SecondaryButton>
          )}
        </div>
      </div>
    </section>
  );
}
