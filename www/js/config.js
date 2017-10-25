angular.module('app.constants')
.constant('CONFIG', {
  client_id_google: '454244314136-cjk44aqgk9ansc2q12bjh9avk4v600m6.apps.googleusercontent.com',
  google_apis: ["https://www.googleapis.com/auth/urlshortener",
                "https://www.googleapis.com/auth/userinfo.email"],
  client_id_facebook: '109212696449169',
  tile_layer: 'https://api.mapbox.com/styles/v1/patovala/cipg1xl10000ebkmbvvjsu2sm/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoicGF0b3ZhbGEiLCJhIjoiY2lwYnd4dDRhMDA3dHNubTdoYXdtNGo0biJ9.toWS2Bj6wwEgR18UmZhoMg',
  map_zoom: 18,
  nearest_point_url: 'http://172.17.29.248/es',
  login_url: 'http://172.17.29.248/api/login',
  threshold: 5000,
  max_threshold: 1000000,
  min_distance_zoom: 500,
  track_charge_url: 'http://172.17.29.248/api/charge',
  page_limit: 5,
  duration_notification: 3000,
  promociones_url: 'http://172.17.29.248/api/promotions',
  min_distance_for_store: 50,
  check_location_num: 3,
  register_url:  'http://172.17.29.248/api/register',
  legacylogin_url: 'http://172.17.29.248/api/legacylogin',
  base_url: 'http://172.17.29.248/api'
});
