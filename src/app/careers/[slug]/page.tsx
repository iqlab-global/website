import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { CareersSingleIntro } from '@/widgets/CareersSingleIntro';

type CareersSingleProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function CareersSingle({ params }: CareersSingleProps) {
  const param = await params;

  if (!param.slug) {
    notFound();
  }

  return (
    <Page whiteHeader>
      <Breadcrumb />
      <CareersSingleIntro />
      {/*TODO: Add & populate section with job data*/}
      {/*TODO: Add Apply for this job section.*/}
    </Page>
  );
}
