//Generate the new panel component
jviz.components.panel = new jviz.component({ attributes: [ 'closed' ] });

//Init method
jviz.components.panel.prototype._init = function()
{
  //Save the panel ID
  this._id = jviz.misc.gen_id({ prefix: 'jviz-panel-', length: 5 }).toLowerCase();

  //Save the panel class
  this._class = 'jviz-components-panel';

  //Panel is closed
  this._closed = false;
};

//Created method
jviz.components.panel.prototype._created = function()
{
  //Update the panel id
  this._id = this._parse_id(this._id);

  //Build the panel
  //self.innerHTML = jviz.dom.render('div', { id: self._id, class: self._class }, self.innerHTML);

  //Add the panel class
  jviz.dom.class.add(this, this._class);

  //Get the close value
  if(this.getAttribute('closed') !== null){ this.set_closed(true); }

  //Exit
  return;
};

//Destroyed method
jviz.components.panel.prototype._destroyed = function(){ };

//Attribute change method
jviz.components.panel.prototype._attribute = function(name, old_value, new_value)
{
  //Check the closed value
  if(name === 'closed'){ return this.set_closed(new_value !== null); }
};

//Close or open the panel
jviz.components.panel.prototype.set_closed = function(value)
{
  //Check the value
  if(typeof value !== 'boolean'){ return this; }

  //Check the actual value
  if(this._closed === value){ return this; }

  //Save the value
  this._closed = value;

  //Check the value
  if(value === true)
  {
    //Add the closed panel class
    jviz.dom.class.add(this._id, this._class + '--closed');

    //Add the attribute
    this.setAttribute('closed', '');
  }
  else
  {
    //Remove the closed panel class
    jviz.dom.class.remove(this._id, this._class + '--closed');

    //Remove the attribute
    this.removeAttribute('closed');
  }

  //Return this
  return this;
};

//Get if palen is closed
jviz.components.panel.prototype.get_closed = function(){ return this._closed; };

//Register the panel
window.customElements.define('jviz-panel', jviz.components.panel);
