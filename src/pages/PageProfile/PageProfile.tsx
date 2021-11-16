import { LayoutPage } from 'components/LayoutPage/LayoutPage';
import { Profile } from 'containers/Profile/Profile';
import { ProfileProps } from 'containers/Profile/Profile.types';

export function PageProfile(props: ProfileProps) {
  return (
    <LayoutPage>
      <Profile {...props} />
    </LayoutPage>
  );
}
