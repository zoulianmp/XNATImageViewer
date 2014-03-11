/**
 * @author amh1646@rih.edu (Amanda Hartung)
 * @author sunilk@mokacreativellc.com (Sunil Kumar)
 */

// goog
goog.require('goog.dom');
goog.require('goog.string');
goog.require('goog.ui.Slider');

// xtk
goog.require('X.renderer2D');
goog.require('X.renderer3D');

// utils
goog.require('moka.dom');
goog.require('moka.style');
goog.require('moka.ui.GenericSlider');

// xiv
goog.require('moka.ui.Component');




/**
 * xiv.ui.XtkPlane is a class that represents the ViewPlane (X, Y, Z or V) 
 * responsible for visualizing XObjects in 2D or 3D space.
 * @constructor
 * @param {!string}
 * @extends {moka.ui.Component}
 */
goog.provide('xiv.ui.XtkPlane');
xiv.ui.XtkPlane = function(id) {

    goog.base(this);


    /**
     * @type {!string}
     * @private
     */
    this.id_ = id;



    /**
     * @type {?X.renderer2D | ?X.renderer3D}
     */  
    this.Renderer_ = null;




    /**
     * @type {?moka.ui.GenericSlider}
     * @private
     */  
    this.Slider_ = null;




    /**
     * @type {!string}
     * @private
     */
    this.indexPlane_ = 
	(id === 'x') ? 'indexLR' : (id === 'y') ? 'indexPA' : 'indexIS';




    /**
     * @type {!number}
     * @private
     */
    this.indexNumber_ = (id === 'x') ? 0 : (id === 'y') ? 1 : 2;




    /**
     * @type {Array.string}
     * @private
     */
    this.xObjs_ = [];



    /**
     * @type {?Element}
     * @private
     */
    this.indexBox_ = null;



    /**
     * @private
     * @type {!Array.function}
     */
    this.onloadCallbacks_ = null;




    /**
     * @private
     * @type {?Object}
     */
    this.currVolume_ = null;



    //--------------------
    // Renderers
    //
    // NOTE: A 3d plane needs to be treated
    // a little differently (i.e. no slider
    // or frame index)
    //--------------------
    // 2D Planes
    if (id !== 'v') {   


	//
	// Slider
	//
	this.Slider_ = new moka.ui.GenericSlider({'parent': this.getElement(),
						'orientation' : 'horizontal'});
	goog.dom.classes.add(this.Slider_.getElement(),
			     xiv.ui.XtkPlane.SLIDER_CLASS);
	goog.dom.classes.add(this.Slider_.getThumb(), 
			     xiv.ui.XtkPlane.SLIDER_THUMB_CLASS);
	goog.dom.classes.add(this.Slider_.getTrack(), 
			     xiv.ui.XtkPlane.SLIDER_TRACK_CLASS);

	this.Slider_.setHoverClasses(xiv.ui.XtkPlane.SLIDER_THUMB_HOVERED_CLASS);
	

	//
	// IndexBox
	//
	this.indexBox_ = goog.dom.createDom('div', {
	    'id': 'IndexBox_' + goog.string.createUniqueString(),
	    'class': xiv.ui.XtkPlane.INDEXBOX_CLASS
	});


	goog.dom.append(this.getElement(), this.indexBox_);
    } 
    
    this.resetRenderer();

}
goog.inherits(xiv.ui.XtkPlane, moka.ui.Component);
goog.exportSymbol('xiv.ui.XtkPlane', xiv.ui.XtkPlane);



/**
 * @type {!string} 
 * @const
 * @expose
 */
xiv.ui.XtkPlane.ID_PREFIX =  'xiv.ui.XtkPlane';



/**
 * @type {!string} 
 * @const
*/
xiv.ui.XtkPlane.CSS_CLASS_PREFIX =
goog.string.toSelectorCase(
    moka.string.getLettersOnly(xiv.ui.XtkPlane.ID_PREFIX));



/**
 * @type {string} 
 * @const
 */
xiv.ui.XtkPlane.ELEMENT_CLASS = 
goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, '');




/**
 * This exists so that governing classes
 * know what axis this ViewPlane represents.
 *
 * @return {string}
 * @private
 */
xiv.ui.XtkPlane.prototype.getId = function() {
    return this.id_;
}




/**
 * @param {!XObject} vol The xtk volume to set.
 */
xiv.ui.XtkPlane.prototype.setCurrVolume = function(vol){
    this.currVolume_ = vol;
};




/**
 * @return {?XObject} The currently loaded xtk volume.
 */
xiv.ui.XtkPlane.prototype.getCurrVolume = function(){
    return this.currVolume_;
};




/**
 * @param {function}
 */
xiv.ui.XtkPlane.prototype.addOnloadCallback = function (callback) {
    this.onloadCallbacks_.push(callback);
}




/**
 * Clears the renderer of information so that it
 * can reload or take in new information.
 *
 * @type {function()}
 */
xiv.ui.XtkPlane.prototype.resetRenderer = function () {
    if (this.Renderer_) { this.Renderer_.destroy(); }
    this.Renderer_ = (this.id_ !== 'v') ? new X.renderer2D : new X.renderer3D();
    this.Renderer_.orientation = this.id_.toUpperCase();
    this.Renderer_.container = this.getElement();
    this.Renderer_.init();
}




/**
* @param {XObject}
*/
xiv.ui.XtkPlane.prototype.addToRenderer = function(xObj) {
    //console.log("add to renderer", xObj);
    //return;
    //------------------
    // Only add selected volumes to 2D renderers.
    //------------------
    if(xObj.isSelectedVolume === true) {
	//console.log("add selected vol", xObj);
	this.currVolume_ = xObj;
	this.Renderer_.add(xObj);

    

    //------------------
    // Add all else to the 3D renderer.
    //------------------
    } else if (this.id_ === 'v')  {
	 this.Renderer_.add(xObj);

    }


    this.xObjs_.push(xObj);


      goog.events.listen(xObj, X.event.events.COMPUTING_END, 
			 function(){
			     alert("END!");
			 });
};




/**
 * Callback that occurs right when renderer
 * redners.
 *
 * @param {function}
 */
xiv.ui.XtkPlane.prototype.setRendererOnShowtime = function(callback) {
    if (!this.Renderer_) { return };
    this.Renderer_.onShowtime = callback;
};



xiv.ui.XtkPlane.prototype.modifyProgBar = function() {


    // let's check again in a short time
    this._readyCheckTimer = goog.Timer.callOnce(function() {

	this._readyCheckTimer = null; // destroy the timer

	//window.console.log("SHOWTIME!");
	this.bars = goog.dom.getElementsByClass('progress-bar-horizontal');
	if (!this.bars || this.bars.length == 0){
	    this.bars = null;
	    this.progBar = null;
	    this.progBarThumb = null;

	    delete this.bars;
	    delete this.progBar;
	    delete this.progBarThumb;
	    return;
	}
	

	this.progBar = this.bars[0];
	this.progBarThumb = 
	    goog.dom.getElementsByClass('progress-bar-thumb')[0];

	this.progBarThumb.style.background = '#68C2DF';
	this.progBar.style.background = 'rgb(80,80,80)';
	this.progBar.style.width = '80%';
	this.progBar.style.height = '7px';
	this.progBar.style.left = '10%';
	this.progBar.style.border = '0px';
	this.progBar.style.padding = '0px';

	if (parseInt(this.progBarThumb.style.width) == 100){
	    if (!this.progClone){
		this.progBar.style.opacity = 0;
		this.progClone = this.progBar.cloneNode(true);
		this.progClone.style.opacity = 1;
		this.progBar.parentNode.appendChild(this.progClone);
		this.progClone.style.zIndex = 100000;
		moka.fx.fadeOutAndRemove(this.progClone, 1000)
	    }
	} else {
	    this.progBar.style.opacity = 1;
	}

	this.modifyProgBar();

    }.bind(this), 100); // check again in 500 ms
}


/**
 * @type {function}
 */
xiv.ui.XtkPlane.prototype.render = function() {

    this.Renderer_.render();  
    goog.dom.getElementsByClass('progress-bar-horizontal')[0].style.opacity = 0;
    this.modifyProgBar();
};




/**
 * Clears the slider of its callback events
 * that occur when sliding.  It should be noted
 * that the renderer detects 'scrolling' as well, which
 * changes the visible slice, so this also has to be
 * synced the the slider.
 */
xiv.ui.XtkPlane.prototype.resetSlider = function() {
    

    //------------------
    // Exit out if there's no slider for the xiv.ui.XtkPlane
    // (this is for 'V' viewplanes).
    //------------------
    if (!this.Slider_) return;

    var that = this;
    var plane = this.indexPlane_;
    var num = this.indexNumber_;



    //------------------
    // Clear slider callbacks.
    //------------------
    this.Slider_['EVENTS'].clearEvent('SLIDE');



    //------------------
    // Add slider listener
    //
    // NOTE: this is different from the default
    // 2D renderer listener on the xiv.ui.XtkPlane.  We basically
    // have to create two separate listers: one on the slider
    // and one on the Xtk plane.
    //------------------
    this.Slider_['EVENTS'].onEvent('SLIDE', function() { 
	var currVol = that.getCurrVolume();
	var planeSlices = currVol['_slices' + that.id_.toUpperCase()]['_children'].length;
	if (!currVol) return;
	currVol.modified();
	currVol['index' + that.id_.toUpperCase()] = that.Slider_.getValue();
	that.indexBox_.innerHTML = currVol['_index' + that.id_.toUpperCase()] + ' / ' + planeSlices;
    });	



    //------------------
    // Add Renderer Scroll listener (allows slider to slide)
    //
    // NOTE: this moves the slider when we move the Xtk plane.
    //------------------
    this.Renderer_.onScroll = function(event) {  
	var currVol = that.getCurrVolume();
	var currSlice = currVol['_index' + that.id_.toUpperCase()];
	var planeSlices = currVol['_slices' + that.id_.toUpperCase()]['_children'].length;
	if (!currVol) return;
	that.Slider_.setValue(currSlice)
	that.indexBox_.innerHTML =  currSlice + ' / ' + planeSlices;
    }; 


    //------------------
    // reset slider
    //------------------
    this.resetSliderValues();
};




/**
 * Resets the numerical properties (slice length)
 * of the slider.
 *
 * @param {X.volume=}
 */
xiv.ui.XtkPlane.prototype.resetSliderValues = function(opt_volume) {
	
    var that = this;
    var plane = this.indexPlane_;
    var num = this.indexNumber_;
    var currVol = opt_volume ? opt_volume : this.currVolume_;
    


    //------------------
    // V / 3D Plane won't have a slider.
    //------------------
    if (!this.Slider_ || !currVol) return;



    //------------------
    // Set properties accordingly.
    //------------------
    var currSlice = currVol['_index' + that.id_.toUpperCase()];
    currVol['_index' + that.id_.toUpperCase()] = Math.round(currSlice);
    //console.log(this.id_, plane, currVol[plane]);
    //console.log(currVol);
    var planeSlices = currVol['_slices' + that.id_.toUpperCase()]['_children'].length;
    this.Slider_.setMaximum(planeSlices);
    this.Slider_.setValue(Math.round(planeSlices/2));
    this.indexBox_.innerHTML = currSlice + ' / ' + planeSlices;  
};




/**
 * For window resizing and any other style changes.
 *
 * @param {Object=}
 */
xiv.ui.XtkPlane.prototype.updateStyle = function (opt_args) {

    var that = this;
   


    //------------------
    // Update widget css to be right size/place within frame holder
    //------------------
    if (opt_args) {
        moka.style.setStyle(this.getElement(), opt_args);
    }



    //------------------ 
    // Update the renderer.
    //------------------
    if (this.Renderer_) { this.Renderer_.onResize_(); }
    


    //------------------
    // Update the Slider.
    //------------------
    if (this.Slider_) {
	if (this.getElement().parentNode && this.Slider_.getElement().parentNode !== this.getElement().parentNode) {
	    this.getElement().parentNode.appendChild(this.Slider_.getElement());
	}
	this.Slider_.updateStyle();
    }

}




xiv.ui.XtkPlane.CSS_CLASS_PREFIX =  /**@type {string} @const*/ goog.getCssName('xiv-xtkplane');
xiv.ui.XtkPlane.ELEMENT_CLASS =  /**@type {string} @const*/  goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, '');
xiv.ui.XtkPlane.INDEXBOX_CLASS =  /**@type {string} @const*/ goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, 'indexbox');
xiv.ui.XtkPlane.SLIDER_CLASS =  /**@type {string} @const*/ goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, 'slider-widget');
xiv.ui.XtkPlane.SLIDER_THUMB_CLASS =  /**@type {string} @const*/ goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, 'slider-thumb');
xiv.ui.XtkPlane.SLIDER_THUMB_HOVERED_CLASS =  /**@type {string} @const*/ goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, 'slider-thumb-hovered');
xiv.ui.XtkPlane.SLIDER_TRACK_CLASS =  /**@type {string} @const*/ goog.getCssName(xiv.ui.XtkPlane.CSS_CLASS_PREFIX, 'slider-track');