import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Title } from 'components/Title/Title';
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
      return (
        <LayoutContainer>
          <Title size="h1">Что-то пошло не так. Мы скоро все починим.</Title>
        </LayoutContainer>
      );
    }

    return this.props.children;
  }
}
