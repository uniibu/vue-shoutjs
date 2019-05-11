import * as shortid from 'shortid';
import { eventBus } from '../eventBus';

class Shout {
  constructor(options) {
    this.options = options;
  }

  isHidden() {
    if ('hidden' in document) {
      return document.hidden;
    }
    return document.visibilityState === 'hidden';
  }

  show(options = {}) {
    if (!this.options.triggerOnHidden && this.isHidden()) return;
    if (typeof options.text !== 'string') {
      throw new Error('options.text is a required string');
    }
    options.id = options.id || shortid.generate();
    options = Object.assign({}, this.options, options);
    eventBus.$emit('shout:show', options);
  }

  destroyId(id) {
    if (!this.options.triggerOnHidden && this.isHidden()) return;
    if (typeof id === 'undefined') {
      throw new Error('id is a required string');
    }
    eventBus.$emit('shout:destroy:id', { id });
  }

  destroyAll() {
    if (!this.options.triggerOnHidden && this.isHidden()) return;
    eventBus.$emit('shout:destroy:all');
  }
}

export default Shout;
