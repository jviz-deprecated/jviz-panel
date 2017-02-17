//Generate the new panel body component
jviz.components.panel_body = new jviz.component({ attributes: [] });

//Panel body main
jviz.components.panel_body.prototype._init = function()
{
  //Bpdy id
  this._id = jviz.misc.get_id({ prefix: 'jviz-panel-body-', length: 5 }).toLowerCase();

  //Body class
  this._class = 'jviz-components-panel-body';
};

//Created callback
jviz.components.panel_body.prototype._created = function()
{
  //Update the panel id
  this._id = this._parse_id(this._id);

  //Add the panel body class
  jviz.dom.class.add(this, this._class);
};

//Register the panel body element
window.customElements.define('jviz-panel-body', jviz.components.panel_body);
