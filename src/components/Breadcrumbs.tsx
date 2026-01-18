import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on home page
  if (location.pathname === "/") {
    return null;
  }

  const breadcrumbNames: Record<string, string> = {
    "annual-conference": "Annual Conference",
    "seminars": "Seminars",
    "about": "About",
    "team": "Team",
    "contact": "Contact",
  };

  return (
    <nav aria-label="Breadcrumb" className="pt-24 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-transparent">
      <div className="max-w-6xl mx-auto">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Home size={16} />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </li>
          
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = breadcrumbNames[name] || name;

            return (
              <li key={name} className="flex items-center gap-2">
                <ChevronRight size={16} className="text-slate-400" />
                {isLast ? (
                  <span className="text-blue-600 font-medium capitalize">
                    {displayName}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-slate-600 hover:text-blue-600 transition-colors capitalize"
                  >
                    {displayName}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
