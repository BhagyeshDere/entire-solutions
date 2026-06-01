"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // This function runs the moment the progress counter reaches 100%
  const handleLoadingComplete = () => {
    setIsExiting(true); // Start the smooth fade-out
    
    setTimeout(() => {
      setLoading(false); // Instantly show the homepage/website
    }, 500); // Matches the visual fade duration perfectly
  };

  if (loading) {
    return <Loader isExiting={isExiting} onComplete={handleLoadingComplete} />;
  }

  return children;
}