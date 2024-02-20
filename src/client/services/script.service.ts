declare const window: {
  resolveUuid: (value: string) => void;
};
export async function injectTrackingScript(source: string) {
  const script = document.createElement('script');
  script.src = source;

  document.body.append(script);

  return new Promise<string>((resolve) => {
    window.resolveUuid = resolve;
  });
}
