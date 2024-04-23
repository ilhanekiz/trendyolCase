let initialState = {
  fcp: undefined, // First Contentful Paint
  ttfb: undefined, // Time To First Byte
  domLoad: undefined,
  windowLoad: undefined,
  timeToCreate: new Date()
};

const asSeconds = ms => ms / 1000;

const isPerformanceSupported = () => {
  return window.performance && !!window.performance.getEntriesByType && !!window.performance.timing
}

const getFcpTime = () => {
  let fcpStartTime = undefined;
  let fcpEndTime = undefined;

  let performance = window.performance;
  let performanceEntries = performance.getEntriesByType('paint');

  performanceEntries.forEach( (performanceEntry) => {
    if (performanceEntry.name === 'first-paint') {
      fcpStartTime = performanceEntry.startTime;
    }
    if (performanceEntry.name === 'first-contentful-paint') {
      fcpEndTime = performanceEntry.startTime;
    }
  });

  return asSeconds(fcpEndTime - fcpStartTime);
}

export const getPerfanalytics = () => {
  if(!isPerformanceSupported()) {
    return;
  }

  let timing = window.performance.timing;
  initialState.fcp = getFcpTime();
  initialState.ttfb = asSeconds(timing.responseStart - timing.requestStart);
  initialState.domLoad = asSeconds(timing.domContentLoadedEventEnd - timing.navigationStart);
  initialState.windowLoad = asSeconds(new Date().valueOf() - timing.navigationStart);
  return initialState;
}

// FCP ( First Contentful Paint)
// Sayfanın yüklenmeye başlamasından sayfa içeriğinin herhangi bir bölümünün ekranda görüntülenmesine kadar geçen süreyi ölçer.

// // Time To First Byte
// Tarayıcının sunucudan veri almaya başlamasına kadar geçen bekleme süresidir.