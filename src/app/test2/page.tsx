import Groups from '@/components/Groups/Groups';
import Page from '@/components/layout/Page/Page';
import { META_DESCRIPTION, META_TITLE } from '@/constants/meta';
import { type Metadata } from 'next/types';

export const metadata: Metadata = {
  title: `Вход - ${META_TITLE}`,
  description: META_DESCRIPTION,
};

const GroupsPage = (): React.ReactNode => (
  <Page>
    <h1>test2</h1>
    <Groups />
  </Page>
);

export default GroupsPage;
