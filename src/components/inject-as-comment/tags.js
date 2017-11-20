import dateFormat from 'dateformat';
import config from 'config';

export default {
  version: (context) => {
    return context.version;
  },
  fix: (context) => {
    return context.build;
  },
  date: () => {
    return dateFormat(new Date(), config.componentsOptions.InjectAsComment.dateFormat);
  }
};
