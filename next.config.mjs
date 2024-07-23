import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [
      [
        "@preact-signals/safe-react/swc",
        {
          mode: "auto",
        },
      ],
    ],
  },
};
export default MillionLint.next({
  rsc: true,
})(nextConfig);
