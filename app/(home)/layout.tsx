import { Topbar } from "@/components/Topbar";

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
