import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error info to help with debugging
    console.error("ErrorBoundary caught an error:", error);
    console.error("Error info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white p-8">
          <h1 className="text-2xl font-bold mb-4">Une erreur est survenue</h1>
          <pre className="bg-red-800 p-4 rounded text-sm overflow-x-auto max-w-xl">{this.state.error && this.state.error.toString()}</pre>
          <p className="mt-4">Veuillez signaler ce message à l'administrateur du site.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
