import keys from './../constants/EventKeys';

export default new class Events {

  execFromEvent(event) {
    if (event.ctrlKey || event.metaKey) {
      switch (event.keyCode) {
        case keys.B:
          this.execCommand("bold", event);
          break;
        case keys.U:
          this.execCommand("underline", event);
          break;
        case keys.I:
          this.execCommand("italic", event);
          break;
      }
    }
  }

  execCommand(command, event) {
    document.execCommand(command, false, null);
    if (event.preventDefault){
      event.preventDefault()}
    else {
      event.stop()
    }
    event.returnValue = false;
    event.stopPropagation();
  }
}