export default function FontPreload() {
  return (
    <>
      <link
        rel="preload"
        href="https://cdn.sqp.ir/Plugins/fonts/IRANYekan/iran-yekan-400.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://cdn.sqp.ir/Plugins/fonts/IRANYekan/iran-yekan-500.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="https://cdn.sqp.ir/Plugins/fonts/IRANYekan/iran-yekan-700.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </>
  );
}

