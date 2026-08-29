"use client";

import { useEffect, useRef, useState } from "react";

const flodeskTheme = `
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__container { max-width: none !important; background: transparent !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__form { padding: 0 !important; color: #f2f6f8 !important; font-family: Arial, Helvetica, sans-serif !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__field { margin-bottom: 16px !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__control { height: 50px !important; color: #f1f5f8 !important; border: 1px solid rgba(194, 214, 232, .18) !important; border-radius: 10px !important; padding: 14px !important; background: rgba(6, 12, 17, .52) !important; font-family: Arial, Helvetica, sans-serif !important; font-size: 16px !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__control:focus { border-color: #16e1bc !important; box-shadow: 0 0 0 3px rgba(22, 225, 188, .12) !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__label { color: #d7e0e9 !important; padding: 14px !important; font-family: Arial, Helvetica, sans-serif !important; font-size: 13px !important; font-weight: 800 !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__button { min-height: 55px !important; border: 0 !important; border-radius: 12px !important; padding: 14px 23px !important; color: #06110f !important; background: linear-gradient(100deg, #16e1bc, #18baf7 58%, #806bff) !important; box-shadow: 0 16px 34px rgba(19, 202, 190, .18) !important; font-family: Arial, Helvetica, sans-serif !important; font-size: 15px !important; font-weight: 800 !important; line-height: 1 !important; }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__button:hover { filter: brightness(1.1) !important; transform: translateY(-2px); }
  .flodesk-shell [data-ff-el="root"].ff-6a896c58cf84899acd170689 .ff-6a896c58cf84899acd170689__success-message { color: #dce6ec !important; font-family: Arial, Helvetica, sans-serif !important; font-weight: 700 !important; }
`;

export function FlodeskForm() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const formHost: HTMLDivElement = host;
    let isDisposed = false;
    let redirectTimer: number | undefined;
    let observer: MutationObserver | undefined;

    async function loadForm() {
      try {
        const response = await fetch("/flodesk-inline-form.html", { cache: "no-store" });
        if (!response.ok) throw new Error("Flodesk embed could not be loaded.");
        const html = await response.text();
        if (isDisposed) return;
        formHost.innerHTML = html;
        formHost.querySelectorAll("script").forEach((oldScript) => {
          const script = document.createElement("script");
          Array.from(oldScript.attributes).forEach(({ name, value }) => script.setAttribute(name, value));
          script.textContent = oldScript.textContent;
          oldScript.replaceWith(script);
        });
        const formRoot = formHost.querySelector<HTMLElement>('[data-ff-el="root"]');
        if (!formRoot) throw new Error("Flodesk form root could not be found.");
        const theme = document.createElement("style");
        theme.textContent = flodeskTheme;
        formHost.append(theme);
        let redirectScheduled = false;
        const redirectAfterSuccess = () => {
          if (redirectScheduled || formRoot.dataset.ffStage !== "success") return;
          redirectScheduled = true;
          redirectTimer = window.setTimeout(() => window.location.assign("/thanks"), 1500);
        };
        observer = new MutationObserver(redirectAfterSuccess);
        observer.observe(formRoot, { attributes: true, attributeFilter: ["data-ff-stage"] });
        redirectAfterSuccess();
      } catch {
        if (!isDisposed) setLoadError(true);
      }
    }

    loadForm();
    return () => {
      isDisposed = true;
      observer?.disconnect();
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  if (loadError) return <p className="flodesk-load-error" role="alert">The consultation form could not load. Please refresh the page and try again.</p>;
  return <div ref={hostRef} aria-live="polite" />;
}
