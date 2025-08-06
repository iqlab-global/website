import s from './style.module.scss';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { Button } from '@/components/Button';

type Props = {
  projects?: Project[];
};

export const NextProjectsSection = ({ projects = [] }: Props) => {
  return (
    <section>
      <Container className={s.wrapper}>
        <div className={s.body}>
          <div className={s.info}>
            <h3>Next projects</h3>
            <div>
              <p>
                We are delighted to showcase all the projects we have created
                for you.
              </p>
              <Button className={s.back} href='/showcase'>
                back to case studies
              </Button>
            </div>
          </div>
          <div className={s.projects}>
            {projects.map((p) => (
              <ProjectBlock key={p._id} {...p} firstLarge />
            ))}
          </div>
          <Button className={s.mobileBack} href='/showcase'>
            back to case studies
          </Button>
        </div>
      </Container>
    </section>
  );
};
