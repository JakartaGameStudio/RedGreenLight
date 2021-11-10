import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';

import styles from './LayoutPage.module.scss';
import { LayoutPageProps } from './LayoutPage.types';

export function LayoutPage({ children }: LayoutPageProps) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <LayoutContainer>{children}</LayoutContainer>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
