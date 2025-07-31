import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { Dots } from '@/components/Dots';

interface FeaturedProjectsProps {
  data: Project[];
}

export const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
  return (
    <section className={s.section}>
      <Dots className={s.dottedHeader}>
        <Container className={s.header}>
          <h2>Featured Projects</h2>
        </Container>
        <Container className={s.header}>
          <Button className={s.showcase} href='/showcase' transparentBg outline>
            / All Projects
          </Button>
        </Container>
      </Dots>
      <Dots className={s.dottedProjects}>
        <Container className={s.list}>
          {data.map((project) => (
            <ProjectBlock key={project._id} {...project} blueBg firstLarge />
          ))}
        </Container>
      </Dots>
    </section>
  );
};
