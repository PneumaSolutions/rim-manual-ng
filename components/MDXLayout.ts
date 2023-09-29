import { MDXProviderComponentsProp } from '@mdx-js/react';

interface MDXLayoutProps {
  children: React.ReactNode;
  components: MDXProviderComponentsProp;
}

export const MDXLayout: React.FC<MDXLayoutProps> = ({ children, components }) => {
  return (
    <div>
      {/* You can customize the layout here */}
      <header>
        <h1>{components?.h1}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
