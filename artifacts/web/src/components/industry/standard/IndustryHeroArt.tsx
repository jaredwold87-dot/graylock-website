import React from "react";

export function IndustryHeroArt({ route }: { route: string }) {
  // We can vary the SVG based on the route, but keep it abstract.
  
  const isHealthcare = route.includes("dentist") || 
                       route.includes("chiropractor") || 
                       route.includes("physician") || 
                       route.includes("optometrist") || 
                       route.includes("psychologist") || 
                       route.includes("physical-therapist");
                       
  const isConstruction = route.includes("builder") || 
                         route.includes("contractor") || 
                         route.includes("industrial") || 
                         route.includes("cabinet") ||
                         route.includes("well");

  if (isHealthcare) {
    return (
      <svg className="w-full h-full text-white/5" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="2" strokeDasharray="4 8" />
        <circle cx="200" cy="200" r="100" stroke="#E85D26" strokeWidth="1" strokeOpacity="0.5" />
        <path d="M 200 0 L 200 400" stroke="currentColor" strokeWidth="1" />
        <path d="M 0 200 L 400 200" stroke="currentColor" strokeWidth="1" />
        <circle cx="200" cy="200" r="4" fill="#E85D26" />
        <path d="M 200 50 Q 280 120 350 200 Q 280 280 200 350 Q 120 280 50 200 Q 120 120 200 50 Z" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      </svg>
    );
  }

  if (isConstruction) {
    return (
      <svg className="w-full h-full text-white/5" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="300" height="300" stroke="currentColor" strokeWidth="2" />
        <path d="M 50 150 L 350 150" stroke="currentColor" strokeWidth="1" />
        <path d="M 50 250 L 350 250" stroke="currentColor" strokeWidth="1" />
        <path d="M 150 50 L 150 350" stroke="currentColor" strokeWidth="1" />
        <path d="M 250 50 L 250 350" stroke="currentColor" strokeWidth="1" />
        <rect x="150" y="150" width="100" height="100" stroke="#E85D26" strokeWidth="1" strokeOpacity="0.5" fill="#E85D26" fillOpacity="0.05" />
        <path d="M 50 50 L 350 350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
        <path d="M 350 50 L 50 350" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    );
  }

  // Default / Realtors / General
  return (
    <svg className="w-full h-full text-white/5" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M 50 350 L 150 150 L 250 250 L 350 50" stroke="currentColor" strokeWidth="2" />
      <path d="M 50 350 L 150 150 L 250 250 L 350 50" stroke="#E85D26" strokeWidth="1" strokeOpacity="0.5" transform="translate(0, 10)" />
      <path d="M 50 350 L 150 150 L 250 250 L 350 50" stroke="#E85D26" strokeWidth="1" strokeOpacity="0.2" transform="translate(0, 20)" />
      
      <circle cx="150" cy="150" r="4" fill="#E85D26" />
      <circle cx="250" cy="250" r="4" fill="#E85D26" />
      <circle cx="350" cy="50" r="4" fill="#E85D26" />

      <rect x="40" y="40" width="320" height="320" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" />
      <path d="M 40 200 L 360 200" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <path d="M 200 40 L 200 360" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    </svg>
  );
}