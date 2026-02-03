var CACHE = 'sugarwise-v2';
var PAGES = [
  './', 'styles.css', 'favicon.svg',
  // English pages
  'index.html',
  'understanding-diabetes.html','type1-diabetes.html','lada-type15.html','type2-diabetes.html','prediabetes.html',
  'diabetes-reversal.html','lab-tests.html','blood-sugar-monitoring.html',
  'medications-oral.html','insulin-guide.html','insulin-pumps.html','cgm-guide.html','medication-interactions.html','latest-treatments.html',
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
  'children-teens-diabetes.html','pregnancy-gestational.html','diabetes-in-elderly.html',
  'vaccinations.html','comorbidity-screening.html',
  'alternative-therapies.html','home-remedies-myths.html',
  'tracking-tools.html','telemedicine-digital.html',
  'caregiver-guide.html','doctor-communication.html','emergency-preparedness.html',
  'financial-assistance.html','india-resources.html','video-references.html',
  'inspiration-stories.html','diabetes-glossary.html','resources.html','terms-of-use.html',
  // Kannada pages
  'index-kn.html',
  'understanding-diabetes-kn.html','type1-diabetes-kn.html','lada-type15-kn.html','type2-diabetes-kn.html','prediabetes-kn.html',
  'diabetes-reversal-kn.html','lab-tests-kn.html','blood-sugar-monitoring-kn.html',
  'medications-oral-kn.html','insulin-guide-kn.html','insulin-pumps-kn.html','cgm-guide-kn.html','medication-interactions-kn.html','latest-treatments-kn.html',
  'hypoglycemia-kn.html','hyperglycemia-kn.html',
  'diet-nutrition-kn.html','indian-diet-kn.html','meal-planning-kn.html','cooking-recipes-kn.html','hydration-beverages-kn.html',
  'exercise-fitness-kn.html','weight-management-kn.html','supplements-kn.html',
  'complications-overview-kn.html','heart-health-kn.html','kidney-health-kn.html','eye-health-kn.html',
  'nerve-damage-kn.html','foot-care-kn.html','dental-oral-health-kn.html','skin-care-kn.html',
  'liver-health-kn.html','osteoporosis-kn.html','hearing-loss-kn.html','brain-cognitive-kn.html',
  'wound-healing-kn.html','joint-pain-kn.html','sexual-health-kn.html','urinary-issues-kn.html',
  'infections-immunity-kn.html','thyroid-diabetes-kn.html',
  'mental-health-kn.html','sleep-fatigue-kn.html','stress-management-kn.html',
  'sick-day-management-kn.html','fasting-festivals-kn.html','weather-seasonal-kn.html',
  'travel-tips-kn.html','workplace-management-kn.html',
  'children-teens-diabetes-kn.html','pregnancy-gestational-kn.html','diabetes-in-elderly-kn.html',
  'vaccinations-kn.html','comorbidity-screening-kn.html',
  'alternative-therapies-kn.html','home-remedies-myths-kn.html',
  'tracking-tools-kn.html','telemedicine-digital-kn.html',
  'caregiver-guide-kn.html','doctor-communication-kn.html','emergency-preparedness-kn.html',
  'financial-assistance-kn.html','india-resources-kn.html','video-references-kn.html',
  'inspiration-stories-kn.html','diabetes-glossary-kn.html','resources-kn.html','terms-of-use-kn.html'
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
