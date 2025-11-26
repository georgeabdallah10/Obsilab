// src/pages/404.tsx  ← ideally rename the file to 404.tsx so Next.js treats it as the 404 page

import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      router.asPath
    );
  }, [router.asPath]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold leading-[1] tracking-[-0.02em] text-[3.052rem]">
          404
        </h1>
        <p className="mb-4 text-xl text-muted-foreground leading-[1.5]">
          Oops! Page not found
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
