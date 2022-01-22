import classNames from 'classnames';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { ThemeSwither } from 'containers/ThemeSwither/ThemeSwither';

import styles from './Footer.module.scss';
import { FooterProps } from './Footer.types';

export function Footer({ className }: FooterProps) {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={classNames(styles.footer, className)}>
      <ThemeSwither />
      <LayoutContainer>© Jakarta Games Studio {year}</LayoutContainer>
    </footer>
  );
}
