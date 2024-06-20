import { Topbar } from "@/components/layout/Topbar";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default HomeLayout;
