import { i18n } from './next-i18next.config'; // Import i18n using ES modules
import remarkGfm from 'remark-gfm'; // Import remark-gfm
import { withMDX } from '@next/mdx'; // Import withMDX function from @next/mdx

export default {
  i18n, // Add the i18n configuration
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  // Configure MDX with remark-gfm
  mdx: {
    extensions: ['.mdx', '.md'],
    options: {
      remarkPlugins: [remarkGfm],
      // If you use `MDXProvider`, uncomment the following line.
      // providerImportSource: "@mdx-js/react",
    },
  },
};
