import { Header } from '@/widgets/Header';

interface PageProps {
  whiteHeader?: boolean;
  children: React.ReactNode;
}
export const Page = ({ whiteHeader = false, children }: PageProps) => {
  return (
    <>
      <Header whiteBg={whiteHeader} />
      {children}
    </>
  );
};
