import { icons, CircleHelp, type LucideProps } from "lucide-react";

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = (icons as Record<string, React.ComponentType<LucideProps>>)[name] ?? CircleHelp;
  return <Cmp {...props} />;
}
