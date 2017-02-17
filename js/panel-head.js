//Generate the new panel head component
jviz.components.panel_head = new jviz.component({ attributes: [ 'title', 'detail', 'loading' ] });

//Init method
jviz.components.panel_head.prototype._init = function()
{
  //Save the panel ID
  this._id = jviz.misc.gen_id({ prefix: 'jviz-panel-head-', length: 5 }).toLowerCase();

  //Save the panel class
  this._class = 'jviz-components-panel-head';

  //Head arrow
  this._arrow = {};
  this._arrow.id = this._id + '-arrow'; //Head arrow ID
  this._arrow.class = this._class + '-arrow'; //Head arrow class
  this._arrow.visible = true; //Arrow is visible

  //Head checkbox
  this._checkbox = {};
  this._checkbox.id = this._id + '-checkbox'; //Head checkbox ID
  this._checkbox.class = this._class + '-checkbox'; //Head checkbox class
  this._checkbox.visible = false; //Checkbox is visible
  this._checkbox.default = false; //Checkbox is checked

  //Head info
  this._info = {};
  this._info.id = this._id + '-info'; //Head info ID
  this._info.class = this._class + '-info'; //Head info class

  //Info title
  this._info.title = {};
  this._info.title.id = this._info.id + '-title'; //Info title ID
  this._info.title.class = this._info.class + '-title'; //Info title class
  this._info.title.text = ''; //Title text

  //Info detail
  this._info.detail = {};
  this._info.detail.id = this._info.id + '-detail'; //Info detail ID
  this._info.detail.class = this._info.class + '-detail'; //Info detail class
  this._info.detail.text = ''; //Detail text

  //Head loading
  this._loading = {};
  this._loading.id = this._id + '-loading'; //Loading ID
  this._loading.class = this._class + '-loading'; //Loading class
  this._loading.animation = this._loading.class + '-animation'; //Loading animation class
  this._loading.visible = false; //Loading is visible
};

//Created method
jviz.components.panel_head.prototype._created = function()
{
  //Update the id
  this._id = this._parse_id(this._id);

  //Add the panel head class
  jviz.dom.class.add(this, this._class);

  //Build the loading div
  jviz.dom.append_begin(this, jviz.dom.render('div', { id: this._loading.id, class: this._loading.class }) + '');

  //Add the animation element
  jviz.dom.append(this._loading.id, jviz.dom.render('jviz-animation', { class: this._loading.animation }) + '');

  //Build the title content
  var info_title = jviz.dom.render('div', { id: this._info.title.id, class: this._info.title.class });

  //Build the detail content
  var info_detail = jviz.dom.render('div', { id: this._info.detail.id, class: this._info.detail.class });

  //Append the info content
  jviz.dom.append_begin(this, jviz.dom.render('div', { id: this._info.id, class: this._info.class }, info_title, info_detail) + '');

  //Add the arrow
  jviz.dom.append_begin(this, jviz.dom.render('div', { id: this._arrow.id, class: this._arrow.class }) + '');

  //Build the panel
  //this.innerHTML = jviz.dom.render('div', { id: this._id, class: this._class }, content, this.innerHTML);

  //Hide loading
  jviz.dom.hide(this._loading.id);

  //Get the title value
  if(this.getAttribute('title') !== null){ this.set_title(this.getAttribute('title')); }

  //Get the detail value
  if(this.getAttribute('detail') !== null){ this.set_detail(this.getAttribute('detail')); }

  //Check the loading value

  //Exit
  return;
};

//Destroyed method
jviz.components.panel_head.prototype._destroyed = function(){ };

//Attribute change method
jviz.components.panel_head.prototype._attribute = function(name, old_value, new_value)
{
  //Check the title value
  if(name === 'title'){ return this.set_title(new_value); }

  //Check the detail value
  if(name === 'detail'){ return this.set_detail(new_value); }

  //Check the loading value
  if(name === 'loading'){ return this.set_loading(new_value !== null); }
};

//Update the panel head title
jviz.components.panel_head.prototype.set_title = function(value)
{
  //Check the text value
  if(value === this._info.title.text){ return; }

  //Save the title value
  this._info.title.text = value;

  //Display the title
  jviz.dom.html(this._info.title.id, value);

  //Update the panel title attribute
  this.setAttribute('title', this._info.title.text);

  //Return this
  return this;
};

//Get the panel title
jviz.components.panel_head.prototype.get_title = function(){ return this._info.title.text; };

//Update the panel head detail
jviz.components.panel_head.prototype.set_detail = function(value)
{
  //Check the text value
  if(value === this._info.detail.text){ return; }

  //Save the detail value
  this._info.detail.text = value;

  //Display the detail value
  jviz.dom.html(this._info.detail.id, value);

  //Update the panel detail attribute
  this.setAttribute('detail', this._info.detail.text);

  //Return this
  return this;
};

//Get the panel detail
jviz.components.panel_head.prototype.get_detail = function(){ return this._info.detail.text; };

//Get if panel is loading
jviz.components.panel_head.prototype.get_loading = function(){ return this._loading.visible; };

//Set loading
jviz.components.panel_head.prototype.set_loading = function(value)
{
  //Check for boolean value
  if(typeof value !== 'boolean'){ return this; }

  //Check the actual value
  if(value === this._loading.visible){ return this; }

  //Save the new value
  this._loading.visible = value;

  //Check the value
  if(this._loading.visible === true)
  {
    //Show the loading div
    jviz.dom.show(this._loading.id, 'inline-block');
  }
  else
  {
    //Hide the loading
    jviz.dom.hide(this._loading.id);
  }

  //Return this
  return this;
};

//Register the panel
window.customElements.define('jviz-panel-head', jviz.components.panel_head);
