import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false,
  }

  public static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error): void {
    // Keep logs minimal and avoid exposing internals in the UI.
    console.error('Unhandled application error', error.message)
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <main className="section">
          <h1>Something went wrong</h1>
          <p>Please refresh the page and try again.</p>
        </main>
      )
    }

    return this.props.children
  }
}
