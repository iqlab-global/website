'use client';

import { useCallback, useState, useEffect } from 'react';

import { Page } from '@/components/Page';
import { Breadcrumb } from '@/widgets/Breadcrumb';
import { client } from '@/sanity/lib/client';

import { Intro } from './components/Intro';
import { ProjectList } from './components/ProjectList';
import { Project } from '@/lib/types';

const PAGE_SIZE = 3;

const queryContent = `{
  "showcasePage": *[_type == "showcasePageSingleton"][0] {
    introSection {
      title,
      subtitle,
      body,
      "image": image.asset->url,
    },
  }
}`;

const queryProjects = (start: number) => `{
  "projects": *[_type == "project"][${start}...${start + PAGE_SIZE}] {
    _id,
    primarySection {
      title,
      subTitle,
      slug,
      industries,
      serviceType,
      techStack,
      "previewImage": previewImage.asset->url
    }
  },
  "total": count(*[_type == "project"])
}`;

export default function Showcase() {
  const [startSlice, setStartSlice] = useState(0);
  const [projects, setProjects] = useState<Project[]>([]);
  const [introSection, setIntroSection] = useState({});
  const [total, setTotal] = useState(0);

  const fetchContent = useCallback(async () => {
    const { showcasePage } = await client.fetch(queryContent, {});
    const { introSection } = showcasePage ?? {};

    setIntroSection(introSection);
  }, []);

  const fetchProjects = useCallback(async () => {
    const { projects, total } = await client.fetch(
      queryProjects(startSlice),
      {}
    );

    setTotal(total);
    setProjects((prevProjects) => [...prevProjects, ...projects]);
  }, [startSlice]);

  const handleShowMore = useCallback(() => {
    if (projects.length < total) {
      setStartSlice((prev) => prev + PAGE_SIZE);
    }
  }, [projects, total]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects, setStartSlice]);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return (
    <Page whiteHeader>
      <Breadcrumb pages={[{ label: 'Showcase', href: '/showcase' }]} />
      <Intro {...introSection} />
      <ProjectList
        projects={projects}
        total={total}
        onShowMore={handleShowMore}
      />
    </Page>
  );
}
