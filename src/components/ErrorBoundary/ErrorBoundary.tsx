import { PageError } from 'components/PageError/PageError';
import { Component } from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, { hasError: boolean }> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo) {
    // eslint-disable-next-line no-console
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <PageError title="Что-то пошло не так. Мы скоро все починим." />;
    }

    return this.props.children;
  }
}
