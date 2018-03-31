import Events from './events';

const EDITOR_ID = 'editor';

export default new class Editor {

  constructor() {
    var editor = document.getElementById(EDITOR_ID);
    editor.addEventListener('keydown', this.keyup);
  }

  keyup(e) {
    Events.execFromEvent(e);
  }
}