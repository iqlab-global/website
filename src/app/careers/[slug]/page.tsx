import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { JobIntroSection } from './components/JobIntroSection';
import { JobDetailsSection } from './components/JobDetailsSection';
import { JobApplicationForm } from './components/JobApplicationForm';

const query = (slug: string) => `{
  "job": *[_type == "job" && introSection.slug.current == "${slug}" && status == "active"][0] {
    _id,
    introSection {
      title,
      location,
      employmentType,
      experienceLevel,
      description
    },
    keyResponsibilities,
    requiredSkills,
    qualifications,
    preferredQualifications,
    applicationDeadline
  }
}`;

type CareersSingleProps = {
  params: Promise<{ slug: string }>;
};

export default async function CareersSingle({ params }: CareersSingleProps) {
  const { slug } = await params;

  if (!slug) {
    notFound();
  }

  const { job } = await client.fetch(query(slug));

  if (!job) {
    notFound();
  }

  const {
    introSection,
    keyResponsibilities,
    requiredSkills,
    qualifications,
    preferredQualifications,
    applicationDeadline,
  } = job;

  const pages = [
    { label: 'Careers', href: '/careers' },
    { label: introSection?.title, href: `/careers/${slug}` },
  ];

  return (
    <Page whiteHeader>
      <Breadcrumb pages={pages} />
      <JobIntroSection
        {...introSection}
        applicationDeadline={applicationDeadline}
      />
      <JobDetailsSection
        title='Key Responsibilities:'
        items={keyResponsibilities}
      />
      <JobDetailsSection title='Required Skills:' items={requiredSkills} />
      <JobDetailsSection title='Qualifications:' items={qualifications} />
      <JobDetailsSection
        title='Preferred Qualifications:'
        items={preferredQualifications}
      />
      <JobApplicationForm jobId={job._id} />
    </Page>
  );
}
