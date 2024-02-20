type MessagePayload = {
  uuid: string;
  checked: string | null;
};

export function injectTrackingIframe(
  src: string,
): Promise<MessagePayload & { iframe: HTMLIFrameElement }> {
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.style.display = 'none';

  document.body.appendChild(iframe);

  return new Promise((resolve) => {
    window.addEventListener(
      'message',
      (event: MessageEvent<MessagePayload>) => {
        if (!iframe.src.includes(event.origin)) return;
        resolve({ ...event.data, iframe });
      },
    );
  });
}
