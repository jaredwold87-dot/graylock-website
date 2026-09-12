import React from "react";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";

export function RichText({ text, linkColorClass = "text-inherit" }: { text: string, linkColorClass?: string }) {
  if (!text) return null;

  const parts: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let lastIndex = 0;
  let match;

  let key = 0;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(<React.Fragment key={key++}>{text.substring(lastIndex, match.index)}</React.Fragment>);
    }
    const label = match[1];
    const url = match[2];
    const isExternal = url.startsWith("http");
    
    const combinedClass = `font-semibold hover:underline decoration-current/45 underline-offset-4 transition-opacity hover:opacity-80 ${linkColorClass}`;

    if (isExternal) {
      parts.push(
        <a
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 ${combinedClass}`}
        >
          {label} <ExternalLink size={14} className="flex-shrink-0" />
        </a>
      );
    } else {
      parts.push(
        <Link
          key={key++}
          href={url}
          className={combinedClass}
        >
          {label}
        </Link>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(<React.Fragment key={key++}>{text.substring(lastIndex)}</React.Fragment>);
  }

  return <>{parts}</>;
}