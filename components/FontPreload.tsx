export default function FontPreload() {
  return (
    <>
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/npm/typeface-yekan@1.0.11/dist/Yekan.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}

