import s from './style.module.scss';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Project } from '@/lib/types';
import clsx from 'clsx';
import { ProjectBlock } from '@/widgets/ProjectBlock';
import { Dots } from '@/components/Dots';

interface FeaturedProjectsProps {
  data: Project[];
}

export const FeaturedProjects = ({ data }: FeaturedProjectsProps) => {
  return (
    <section className={s.section}>
      <Dots
        queryChildrenBy='.featuredProjectChild'
        dotsWrapperClassName={s.dotsWrapper}
      >
        <Container className={s.container}>
          <div className={s.header}>
            <h2 className='featuredProjectChild'>Featured Projects</h2>
            <div className={clsx(s.showcaseWrapper, 'featuredProjectChild')}>
              <Button
                className={s.showcase}
                href='/showcase'
                transparentBg
                outline
              >
                / All Projects
              </Button>
            </div>
          </div>
          <div className={s.list}>
            {data.map((project) => (
              <ProjectBlock
                className='featuredProjectChild'
                key={project._id}
                {...project}
                blueBg
                firstLarge
              />
            ))}
          </div>
          <div className={s.links}>
            <Button href='/showcase' transparentBg outline>
              / All Projects
            </Button>
          </div>
        </Container>
      </Dots>
    </section>
  );
};
