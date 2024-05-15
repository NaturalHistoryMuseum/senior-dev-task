import { Title } from "@/components/ui/title";
interface ILayout {
  children: React.ReactNode;
  noPadding?: boolean;
}
export default function Layout({ children }: ILayout) {
  return (
    <main id="main">
      <Title
        heading="What's on"
        text="Find out what exhibitions and events are on at the Museum."
      />
      <div className="wrapper flow">{children}</div>
    </main>
  );
}
