var CACHE = 'sugarwise-v1';
var PAGES = [
  './', 'styles.css', 'favicon.svg',
  'understanding-diabetes.html','type1-diabetes.html','type2-diabetes.html','prediabetes.html',
  'diabetes-reversal.html','lab-tests.html','blood-sugar-monitoring.html',
  'medications-oral.html','insulin-guide.html','medication-interactions.html','latest-treatments.html',
  'hypoglycemia.html','hyperglycemia.html',
  'diet-nutrition.html','indian-diet.html','meal-planning.html','cooking-recipes.html','hydration-beverages.html',
  'exercise-fitness.html','weight-management.html','supplements.html',
  'complications-overview.html','heart-health.html','kidney-health.html','eye-health.html',
  'nerve-damage.html','foot-care.html','dental-oral-health.html','skin-care.html',
  'liver-health.html','osteoporosis.html','hearing-loss.html','brain-cognitive.html',
  'wound-healing.html','joint-pain.html','sexual-health.html','urinary-issues.html',
  'infections-immunity.html','thyroid-diabetes.html',
  'mental-health.html','sleep-fatigue.html','stress-management.html',
  'sick-day-management.html','fasting-festivals.html','weather-seasonal.html',
  'travel-tips.html','workplace-management.html',
  'pregnancy-gestational.html','diabetes-in-elderly.html',
  'vaccinations.html','comorbidity-screening.html',
  'alternative-therapies.html','home-remedies-myths.html',
  'tracking-tools.html','telemedicine-digital.html',
  'caregiver-guide.html','doctor-communication.html','emergency-preparedness.html',
  'financial-assistance.html','india-resources.html','video-references.html',
  'inspiration-stories.html','diabetes-glossary.html','resources.html','terms-of-use.html'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(cache) { return cache.addAll(PAGES); }));
});

self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(names) {
    return Promise.all(names.filter(function(n) { return n !== CACHE; }).map(function(n) { return caches.delete(n); }));
  }));
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    fetch(e.request).then(function(resp) {
      var clone = resp.clone();
      caches.open(CACHE).then(function(cache) { cache.put(e.request, clone); });
      return resp;
    }).catch(function() {
      return caches.match(e.request);
    })
  );
});
