import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';

type ServiceProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function Service({ params }: ServiceProps) {
  const param = await params;

  if (!param.slug) {
    notFound();
  }

  return (
    <Page whiteHeader>
      <Breadcrumb />
    </Page>
  );
}
