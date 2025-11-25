"use client";

import { ErrorFallback } from "@/components/ErrorBoundary";
import { ErrorBoundary } from "react-error-boundary";

export default function WrapperErrorBoundary({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
}
