import remarkGfm from 'remark-gfm'
import createMDX from '@next/mdx'
import i18nextConfig from './next-i18next.config.js';
/** @type {import('next').NextConfig} */
 
const withMDX = createMDX({
  options: {
    extension: /\.mdx?$/,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
//     providerImportSource: "@mdx-js/react",
  },
})
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  // Optionally, add any other Next.js config below
  reactStrictMode: false,
    // Include i18n configuration
    i18n: i18nextConfig.i18n,
}
 
export default withMDX(nextConfig)
