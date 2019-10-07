import { url as ApiUrlConfig } from './api';

export const environment = {
  production: false,
  api: {
    url(endpoint: string, args: any = null) {
      let url = ApiUrlConfig.protocol + '://';
      url += ApiUrlConfig.baseUrl;

      if (ApiUrlConfig.port) {
        url += ':' + ApiUrlConfig.port;
      }

      url += '/api/';

      if (!args) {
        return url + endpoint;
      }

      const parts = endpoint.split('/');
      parts.forEach((val, key) => {
        const cleanKey = val.replace(':', '');
        if (args.hasOwnProperty(cleanKey)) {
          parts[key] = args[cleanKey];
        }
      });

      return url + parts.join('/');
    }
  }
};

import 'zone.js/dist/zone-error';  // Included with Angular CLI.
