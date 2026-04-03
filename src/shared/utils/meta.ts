export const collectMeta = () => {
  const meta = {
    url: window.location.href,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    browserPreferredLanguage: navigator.language,
    siteLanguage: document.documentElement.lang,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    date: new Date().toDateString(),
    time: new Date().toTimeString(),
  };

  return meta;
};
