//Generate the new panel foot component
jviz.components.panel_foot = new jviz.component({ attributes: [] });

//Panel Footmain
jviz.components.panel_foot.prototype._init = function()
{
  //Foot id
  this._id = jviz.misc.get_id({ prefix: 'jviz-panel-foot-', length: 5 }).toLowerCase();

  //Foot class
  this._class = 'jviz-components-panel-foot';
};

//Created callback
jviz.components.panel_foot.prototype._created = function()
{
  //Update the panel id
  this._id = this._parse_id(this._id);

  //Add the panel foot class
  jviz.dom.class.add(this, this._class);
};

//Register the panel body element
window.customElements.define('jviz-panel-foot', jviz.components.panel_foot);
