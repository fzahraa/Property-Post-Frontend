import { Loader } from '@googlemaps/js-api-loader';
const loader = new Loader({
  apiKey: 'AIzaSyBmnOt5N39SC5efqHg5w5ddVubetuiEEOw',
  version: 'weekly',
  libraries: ['places'],
});
export default loader;