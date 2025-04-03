import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';

interface FeaturedProjectsProps {
  data: Project[];
}

export const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.header}>
            <h2>Featured Projects</h2>
            <Button href='/showcase' transparentBg outline>
              / All Projects
            </Button>
          </div>
          <div className={s.list}>
            {data.map((project) => (
              <ProjectBlock key={project._id} {...project} blueBg firstLarge />
            ))}
          </div>
          <div className={s.links}>
            <Button href='/showcase' transparentBg outline>
              / All Projects
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
