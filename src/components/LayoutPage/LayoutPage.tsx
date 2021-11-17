import { Footer } from 'components/Footer/Footer';
import { Header } from 'components/Header/Header';
import { LayoutContainer } from 'components/LayoutContainer/LayoutContainer';
import { Title } from 'components/Title/Title';

import styles from './LayoutPage.module.scss';
import { LayoutPageProps } from './LayoutPage.types';

export function LayoutPage({ children, title }: LayoutPageProps) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>
        <LayoutContainer>
          {title && (
            <Title size="h1" className={styles.title}>
              {title}
            </Title>
          )}
          {children}
        </LayoutContainer>
      </main>
      <Footer className={styles.footer} />
    </div>
  );
}
