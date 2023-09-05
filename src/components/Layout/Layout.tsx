import classes from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.layout}>
      {children}
    </div>
  );
}