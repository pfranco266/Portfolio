const gtag = (...args) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
};

export const trackEvent = (eventName, params = {}) => {
  gtag('event', eventName, params);
};

export const trackNavClick = (sectionName) => {
  gtag('event', 'select_content', {
    content_type: 'navigation',
    item_id: sectionName,
  });
};

export const trackProjectClick = (projectName, projectUrl) => {
  gtag('event', 'select_content', {
    content_type: 'project',
    item_id: projectName,
    project_url: projectUrl,
  });
};

export const trackThemeToggle = (newTheme) => {
  gtag('event', 'theme_toggle', {
    theme: newTheme,
  });
};

export const trackContactClick = (platform) => {
  gtag('event', 'click', {
    event_category: 'Contact',
    event_label: platform,
  });
};

export const trackSectionView = (sectionName) => {
  gtag('event', 'section_view', {
    section: sectionName,
  });
};
