"use client";
import {
  ReactNode,
  ReactElement,
  useState,
  useEffect,
  useRef,
  cloneElement,
  isValidElement,
} from "react";
import { useInView } from "framer-motion";

interface TypewriterTextProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TypewriterText({
  children,
  delay = 0,
  duration = 1.5,
  className = "",
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fullText = extractText(children);

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const chars = fullText.length;
      const delayPerChar = (duration * 1000) / chars;

      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= chars) {
          setDisplayedText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, delayPerChar);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, fullText, duration, delay]);

  return (
    <div ref={ref} className={className}>
      <div style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
        {renderWithText(children, displayedText)}
      </div>
    </div>
  );
}

function extractText(children: ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) {
    return children.map(extractText).join("");
  }
  if (isValidElement(children)) {
    return extractText(
      (children as ReactElement<{ children?: ReactNode }>).props.children,
    );
  }
  return "";
}

function renderWithText(children: ReactNode, text: string): ReactNode {
  let charIndex = 0;

  function processNode(node: ReactNode): ReactNode {
    if (typeof node === "string") {
      const endIndex = charIndex + node.length;
      const slice = text.slice(charIndex, endIndex);
      charIndex = endIndex;
      return slice;
    }

    if (Array.isArray(node)) {
      return node.map((child, i) => <span key={i}>{processNode(child)}</span>);
    }

    if (isValidElement(node)) {
      const element = node as ReactElement<{ children?: ReactNode }>;
      return cloneElement(element, {
        children: processNode(element.props.children),
      });
    }

    return node;
  }

  return processNode(children);
}
