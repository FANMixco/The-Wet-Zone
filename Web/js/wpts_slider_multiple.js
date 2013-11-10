/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-rgba-csstransforms3d-csstransitions-hashchange-inlinesvg-iepp-mq-cssclasses-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function F(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+o.join(c+" ")+c).split(" ");return E(d,b)}function E(a,b){for(var d in a)if(k[a[d]]!==c)return b=="pfx"?a[d]:!0;return!1}function D(a,b){return!!~(""+a).indexOf(b)}function C(a,b){return typeof a===b}function B(a,b){return A(n.join(a+";")+(b||""))}function A(a){k.cssText=a}var d="2.0.6",e={},f=!0,g=b.documentElement,h=b.head||b.getElementsByTagName("head")[0],i="modernizr",j=b.createElement(i),k=j.style,l,m=Object.prototype.toString,n=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),o="Webkit Moz O ms Khtml".split(" "),p={svg:"http://www.w3.org/2000/svg"},q={},r={},s={},t=[],u=function(a,c,d,e){var f,h,j,k=b.createElement("div");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:i+(d+1),k.appendChild(j);f=["&shy;","<style>",a,"</style>"].join(""),k.id=i,k.innerHTML+=f,g.appendChild(k),h=c(k,a),k.parentNode.removeChild(k);return!!h},v=function(b){if(a.matchMedia)return matchMedia(b).matches;var c;u("@media "+b+" { #"+i+" { position: absolute; } }",function(b){c=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position=="absolute"});return c},w=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=C(e[d],"function"),C(e[d],c)||(e[d]=c),e.removeAttribute(d))),e=null;return f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),x,y={}.hasOwnProperty,z;!C(y,c)&&!C(y.call,c)?z=function(a,b){return y.call(a,b)}:z=function(a,b){return b in a&&C(a.constructor.prototype[b],c)};var G=function(a,c){var d=a.join(""),f=c.length;u(d,function(a,c){var d=b.styleSheets[b.styleSheets.length-1],g=d.cssRules&&d.cssRules[0]?d.cssRules[0].cssText:d.cssText||"",h=a.childNodes,i={};while(f--)i[h[f].id]=h[f];e.csstransforms3d=i.csstransforms3d.offsetLeft===9},f,c)}([,["@media (",n.join("transform-3d),("),i,")","{#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);q.hashchange=function(){return w("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},q.rgba=function(){A("background-color:rgba(150,255,150,.5)");return D(k.backgroundColor,"rgba")},q.csstransforms3d=function(){var a=!!E(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in g.style&&(a=e.csstransforms3d);return a},q.csstransitions=function(){return F("transitionProperty")},q.inlinesvg=function(){var a=b.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==p.svg};for(var H in q)z(q,H)&&(x=H.toLowerCase(),e[x]=q[H](),t.push((e[x]?"":"no-")+x));A(""),j=l=null,a.attachEvent&&function(){var a=b.createElement("div");a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function s(a){var b=-1;while(++b<g)a.createElement(f[b])}a.iepp=a.iepp||{};var d=a.iepp,e=d.html5elements||"abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",f=e.split("|"),g=f.length,h=new RegExp("(^|\\s)("+e+")","gi"),i=new RegExp("<(/*)("+e+")","gi"),j=/^\s*[\{\}]\s*$/,k=new RegExp("(^|[^\\n]*?\\s)("+e+")([^\\n]*)({[\\n\\w\\W]*?})","gi"),l=b.createDocumentFragment(),m=b.documentElement,n=m.firstChild,o=b.createElement("body"),p=b.createElement("style"),q=/print|all/,r;d.getCSS=function(a,b){if(a+""===c)return"";var e=-1,f=a.length,g,h=[];while(++e<f){g=a[e];if(g.disabled)continue;b=g.media||b,q.test(b)&&h.push(d.getCSS(g.imports,b),g.cssText),b="all"}return h.join("")},d.parseCSS=function(a){var b=[],c;while((c=k.exec(a))!=null)b.push(((j.exec(c[1])?"\n":c[1])+c[2]+c[3]).replace(h,"$1.iepp_$2")+c[4]);return b.join("\n")},d.writeHTML=function(){var a=-1;r=r||b.body;while(++a<g){var c=b.getElementsByTagName(f[a]),d=c.length,e=-1;while(++e<d)c[e].className.indexOf("iepp_")<0&&(c[e].className+=" iepp_"+f[a])}l.appendChild(r),m.appendChild(o),o.className=r.className,o.id=r.id,o.innerHTML=r.innerHTML.replace(i,"<$1font")},d._beforePrint=function(){p.styleSheet.cssText=d.parseCSS(d.getCSS(b.styleSheets,"all")),d.writeHTML()},d.restoreHTML=function(){o.innerHTML="",m.removeChild(o),m.appendChild(r)},d._afterPrint=function(){d.restoreHTML(),p.styleSheet.cssText=""},s(b),s(l);d.disablePP||(n.insertBefore(p,n.firstChild),p.media="print",p.className="iepp-printshim",a.attachEvent("onbeforeprint",d._beforePrint),a.attachEvent("onafterprint",d._afterPrint))}(a,b),e._version=d,e._prefixes=n,e._domPrefixes=o,e.mq=v,e.hasEvent=w,e.testProp=function(a){return E([a])},e.testAllProps=F,e.testStyles=u,g.className=g.className.replace(/\bno-js\b/,"")+(f?" js "+t.join(" "):"");return e}(this,this.document);
//end moderzr
/*
 * jQuery RefineSlide plugin v0.3
 * http://github.com/alexdunphy/refineslide
 * Requires: jQuery v1.7+
 * Copyright 2012, Alex Dunphy
 * MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Includes: jQuery imagesLoaded plugin v2.0.1
 * http://github.com/desandro/imagesloaded
 * MIT License. by Paul Irish et al.
 */

;(function ($, window, document, undefined) {

	// Baked-in settings for extension
	var defaults = {
		transition            : 'cubeV',  // String (default 'cubeV'): Transition type ('random', 'cubeH', 'cubeV', 'fade', 'sliceH', 'sliceV', 'slideH', 'slideV', 'scale', 'blockScale', 'kaleidoscope', 'fan', 'blindH', 'blindV')
		fallback3d            : 'sliceV', // String (default 'sliceV'): Fallback for browsers that support transitions, but not 3d transforms (only used if primary transition makes use of 3d-transforms)
		controls              : 'arrows', // String (default 'thumbs'): Navigation type ('thumbs', 'arrows', null)
		thumbMargin           : 3,        // Int (default 3): Percentage width of thumb margin
		autoPlay              : false,    // Int (default false): Auto-cycle slider
		delay                 : 5000,     // Int (default 5000) Time between slides in ms
		transitionDuration    : 800,      // Int (default 800): Transition length in ms
		startSlide            : 0,        // Int (default 0): First slide
		keyNav                : true,     // Bool (default true): Use left/right arrow keys to switch slide
		captionWidth          : 50,       // Int (default 50): Percentage of slide taken by caption
		arrowTemplate         : '<div class="rs-arrows"><a href="#" class="rs-prev"></a><a href="#" class="rs-next"></a></div>', // String: The markup used for arrow controls (if arrows are used). Must use classes '.rs-next' & '.rs-prev'
		onInit                : function (data) {}, // Func: User-defined, fires with slider initialisation
		onChange              : function () {}, // Func: User-defined, fires with transition start
		afterChange           : function () {}  // Func: User-defined, fires after transition end
	};

	// RS (RefineSlide) object constructor
	function RS(elem, settings) {
		this.$slider            = $(elem).addClass('rs-slider');      // Elem: Slider element
		this.settings           = $.extend({}, defaults, settings);    // Obj: Merged user settings/defaults
		this.$slides            = this.$slider.find('> li');           // Elem Arr: Slide elements
		this.totalSlides        = this.$slides.length;                 // Int: Number of slides
		this.cssTransitions     = testBrowser.cssTransitions();        // Bool: Test for CSS transition support
		this.cssTransforms3d    = testBrowser.cssTransforms3d();       // Bool: Test for 3D transform support
		this.currentPlace       = this.settings['startSlide'];         // Int: Index of current slide (starts at 0)
		this.$currentSlide      = $(this.$slides[this.currentPlace]);  // Elem: Starting slide
		this.inProgress         = false;                               // Bool: Prevents overlapping transitions
		this.$sliderWrap        = this.$slider.wrap('<div class="rs-wrap" />').parent();      // Elem: Slider wrapper div
		this.$sliderBG          = this.$slider.wrap('<div class="rs-slide-bg" />').parent();  // Elem: Slider background (useful for styling & essential for cube transitions)
		this.settings['slider'] = this;  // Make slider object accessible to client call code with 'this.slider' (there's probably a better way to do this)

		this.init();  // Call RS initialisation method
	}

	// RS object Prototype
	RS.prototype = {
        init: function () {
            var _this = this;
            // User-defined function to fire on slider initialisation
            this.settings['onInit'](_this);

            // Setup captions
            this.captions();

            // Setup arrow navigation
            if (this.settings['controls'] === 'arrows') this.setArrows();

            // Setup keyboard navigation
            if (this.settings['keyNav']) this.setKeys();

            // Add slide identifying classes
            for (var i = 0; i < this.totalSlides; i++) {
                $(this.$slides[i]).attr('class', 'rs-slide-' + i);
            }

            // Setup slideshow
            if (this.settings['autoPlay']) {
                this.setAutoPlay();

                // Listen for slider mouseover
                this.$slider.on('mouseenter', function () {
                    clearTimeout(_this.cycling); // Pause if hovered
                });

                // Listen for slider mouseout
                this.$slider.on('mouseleave', function () {
                    _this.setAutoPlay(); // Resume slideshow
                });
            }

            // Get the first image in each slide <li>
            var images = $(this.$slides).find('img:eq(0)').addClass('rs-slide-image'),
                clones = [];

            // Fires once all images have been loaded
            $(images).imagesLoaded(function () {

                // Loop through images & append clones to slider (for dimension testing and thumbnails)
                for (var i = 0; i < _this.totalSlides; i++) {
                    clones.push($(images[i]).clone().css({'position':'absolute', 'visibility':'hidden', 'display':'block'}).appendTo(_this.$slider));
                }
                setTimeout(function () {
                    _this.setup(clones);
                }, 0); // Webkit requires this instant timeout to avoid premature rendering
            });
        }

        ,setup: function (clones) {
            var _this = this,
                // Get padding of '.rs-slide-bg' elem
                padding =   parseInt(this.$sliderBG.css('padding-left').replace('px', ''))
                            + parseInt(this.$sliderBG.css('padding-right').replace('px', '')),
                widths = [];

            // Loop through image clones & create array of widths
            var i = clones.length;
            while (i--) {
                widths.push($(clones[i]).width());

                // If not needed for thumbnails, remove image clones from the DOM
                if (_this.settings['controls'] !== 'thumbs') {
                    $(clones[i]).remove();
                }
            }

            // Apply width to '.rs-wrap' elem (width of slimmest slide image + container padding)
            this.$sliderWrap.css('width', Math.floor.apply(Math, widths) + padding);

            // Use the clones generated in this.init() to make thumbnails
            if (this.settings['controls'] === 'thumbs') {
                this.setThumbs(clones);
            }

            // Display first slide
            this.$currentSlide.css({'opacity' : 1, 'z-index' : 2});

            // Trigger hardware acceleration (if supported)
            this.$sliderBG.prefixes({'transform' : 'translateZ(0)'});
        }

        ,setArrows:function () {
            var _this = this;

            // Append user-defined arrow template (elems) to '.rs-wrap' elem
            this.$sliderWrap.append(this.settings['arrowTemplate']);

            // Fire next() method when clicked
            $('.rs-next', this.$sliderWrap).on('click', function (e) {
                e.preventDefault();
                _this.next();
            });

            // Fire prev() method when clicked
            $('.rs-prev', this.$sliderWrap).on('click', function (e) {
                e.preventDefault();
                _this.prev();
            });
        }

        ,next: function () {
            // If on final slide, loop back to first slide
            if (this.currentPlace === this.totalSlides - 1) {
                this.transition(0, true); // Call transition
            } else {
                this.transition(this.currentPlace + 1, true); // Call transition
            }
        }

        ,prev: function () {
            // If on first slide, loop round to final slide
            if (this.currentPlace == 0) {
                this.transition(this.totalSlides - 1, false); // Call transition
            } else {
                this.transition(this.currentPlace - 1, false); // Call transition
            }
        }

        ,setKeys: function () {
            var _this = this;

            // Bind keyboard left/right arrows to next/prev methods
            $(document).on('keydown', function (e) {
                if (e.keyCode === 39) { // Right arrow key
                    _this.next();
                } else if (e.keyCode === 37) { // Left arrow key
                    _this.prev();
                }
            });
        }

        ,setAutoPlay: function () {
            var _this = this;

            // Set timeout to object property so it can be accessed/cleared externally
            this.cycling = setTimeout(function () {
                _this.next();
            }, this.settings['delay']);
        }

        ,setThumbs: function (clones) {
            var _this = this,
                // Set percentage width (minus user-defined margin) to span width of slider
                width = (100 - ((this.totalSlides - 1) * this.settings['thumbMargin'])) / this.totalSlides + '%';

            // <div> wrapper to contain thumbnails
            this.$thumbWrap = $('<div class="rs-thumb-wrap" />').appendTo(this.$sliderWrap);

            // Loop to apply thumbnail widths/margins to <a> wraps, appending an image clone to each
            for (var i = 0; i < this.totalSlides; i++) {
                var $thumb = $('<a class="rs-slide-link-'+ i +'" />').css({'width' : width, 'marginLeft' : this.settings['thumbMargin'] + '%'}).attr({'href' : '#'});
                $(clones[i]).removeAttr('style').appendTo(this.$thumbWrap).wrap($thumb);
            }

            // Safety margin to stop IE7 wrapping the thumbnails (no visual effect in other browsers)
            this.$thumbWrap.children().last().css('margin-right', -10);

            // Add active class to starting slide's respective thumb
            $(this.$thumbWrap.find('a')[this.settings['startSlide']]).addClass('active');

            // Listen for click events on thumnails
            this.$thumbWrap.on('click', 'a', function (e) {
                e.preventDefault();

                // Get identifier from thumb class
                var cl = parseInt($(this).attr('class').split('-')[3]);

                // Call transition
                _this.transition(cl);
            });
        }

        ,captions: function() {
            var _this = this,
                $captions = this.$slides.find('.rs-caption');

            // User-defined caption width
            $captions.css({'width' : _this.settings['captionWidth'] + '%', 'opacity' : 0});

            // Display starting slide's caption
            this.$currentSlide.find('.rs-caption').css({'opacity' : 1});

            // Add CSS3 transition vendor prefixes
            $captions.each(function() {
                $(this).prefixes({
                    'transition':'opacity ' + _this.settings['transitionDuration'] + 'ms ease-in-out',
                    'transform' : 'translateZ(0)' // Necessary for some reason to stop caption opacity jumping when translateZ is also applied to '.rs-slide-bg' (RS.$sliderBG)
                });
            });
        }

        ,transition: function (slideNum, forward) {
            // If inProgress flag is not set (i.e. if not mid-transition)
            if (!this.inProgress) {
                // If not already on requested slide
                if (slideNum !== this.currentPlace) {
                    // Check whether the requested slide index is ahead or behind in the array (if not passed in as param)
                    if(forward === undefined) {
                    	forward = slideNum > this.currentPlace ? true : false;
                    }

                    // Assign next slide prop (elem)
                    this.$nextSlide = $(this.$slides[slideNum]);

                    // Assign next slide index prop (int)
                    this.currentPlace = slideNum;

                    // User-defined function, fires with transition
                    this.settings['onChange']();

                    // Instantiate new Transition object, passing in self (RS obj), transition type (string), direction (bool)
                    new Transition(this, this.settings['transition'], forward);

                    // If thumbnails exist, revise active class states
                    if (this.settings['controls'] === 'thumbs') {
                        this.$thumbWrap.find('a').removeClass('active');
                        $(this.$thumbWrap.find('a')[slideNum]).addClass('active');
                    }
                }
            }
        }
    };

	// Transition object constructor
	function Transition(RS, transition, forward) {
		this.RS = RS; // RS (RefineSlide) object
		this.RS.inProgress = true; // Set RS inProgress flag to prevent additional Transition objects being instantiated until transition end
		this.forward = forward; // Bool: true for forward, false for backward
		this.transition = transition; // String: name of transition requested
		this.fallback3d = this.RS.settings['fallback3d']; // String: fallback to use when 3D transforms aren't supported

		this.init(); // Call Transition initialisation method
	}

	// Transition object Prototype
	Transition.prototype = {
        // Fallback to use if CSS transitions are unsupported
        fallback: 'fade'

        // Array of possible animations
        ,anims: [ 'fade', 'sliceH', 'sliceV', 'slideH', 'slideV', 'scale', 'blockScale', 'kaleidoscope', 'fan', 'blindH', 'blindV']

        ,init: function () {
            // Call requested transition method
            this[this.transition]();
        }

        ,before: function (callback) {
            var _this = this;

            // Prepare slide opacity & z-index
            this.RS.$currentSlide.css('z-index', 2);
            this.RS.$nextSlide.css({'opacity' : 1, 'z-index' : 1});

            // Fade out/in captions with CSS/JS depending on browser capability
            if (this.RS.cssTransitions) {
                this.RS.$currentSlide.find('.rs-caption').css('opacity', 0);
                this.RS.$nextSlide.find('.rs-caption').css('opacity', 1);
            } else {
                this.RS.$currentSlide.find('.rs-caption').animate({'opacity' : 0}, _this.RS.settings['transitionDuration']);
                this.RS.$nextSlide.find('.rs-caption').animate({'opacity' : 1}, _this.RS.settings['transitionDuration']);
            }

            // Check if transition describes a setup method
            if (typeof this.setup === 'function') {
                // Setup required by transition
                var transition = this.setup();
                setTimeout(function () {
                    callback(transition);
                }, 40);
            } else {
                // Transition execution
                this.execute();
            }

            // Listen for CSS transition end on elem (set by transition)
            if (this.RS.cssTransitions) {
                $(this.listenTo).one('webkitTransitionEnd transitionend oTransitionEnd msTransitionend MSTransitionEnd', function () {
                    // Post-transition reset
                    _this.after();
                });
            }
        }

        ,after: function () {
            // Reset transition CSS
            this.RS.$slider.removeAttr('style');
            this.RS.$currentSlide.removeAttr('style').css('opacity', 0);
            this.RS.$nextSlide.removeAttr('style').css({'z-index': 2,'opacity' : 1});

            // Additional reset steps required by transition (if any exist)
            if (typeof this.reset === 'function') this.reset();

            // If slideshow is active, reset the timeout
            if (this.RS.settings['autoPlay']) {
                clearTimeout(this.RS.cycling);
                this.RS.setAutoPlay();
            }

            // Assign new slide position
            this.RS.$currentSlide = this.RS.$nextSlide;

            // Remove RS obj inProgress flag (i.e. allow new Transition to be instantiated)
            this.RS.inProgress = false;

            // User-defined function, fires after transition has ended
            this.RS.settings['afterChange']();
        }

        ,fade: function () {
            var _this = this;

            // If CSS transitions are supported by browser
            if (this.RS.cssTransitions) {
                // Setup steps
                this.setup = function () {
                    // Set event listener to next slide elem
                    _this.listenTo = _this.RS.$currentSlide;
                    // Add CSS3 transition vendor prefixes
                    _this.RS.$currentSlide.prefixes({'transition' : 'opacity ' + _this.RS.settings['transitionDuration'] + 'ms ease-in-out'});
                };

                // Execution steps
                this.execute = function () {
                    // Display next slide over current slide
                    _this.RS.$currentSlide.css({'opacity' : 0});
                }
            } else { // JS animation fallback
                this.execute = function () {
                    _this.RS.$currentSlide.animate({'opacity' : 0}, _this.RS.settings['transitionDuration'], function () {
                        // Reset steps
                        _this.after();
                    });
                }
            }

            this.before(function () {
                // Fire on setup callback
                _this.execute();
            });
        }

        // cube() method is used by cubeH() & cubeV() - not for calling directly
        ,cube: function (tz, ntx, nty, nrx, nry, wrx, wry) { // Args: translateZ, (next slide) translateX, (next slide) translateY, (next slide) rotateX, (next slide) rotateY, (wrap) rotateX, (wrap) rotateY

            // Fallback if browser does not support 3d transforms/CSS transitions
            if (!this.RS.cssTransitions || !this.RS.cssTransforms3d) {
                return this[this['fallback3d']](); // User-defined transition
            }

            var _this = this;

            // Setup steps
            this.setup = function () {
                // Set event listener to '.rs-slider' <ul>
                _this.listenTo = _this.RS.$slider;

                // Set CSS3 perspective vendor prefixes on '.rs-slide-bg' elem
                // see http://desandro.github.com/3dtransforms/docs/perspective.html
                this.RS.$sliderBG.prefixes({'perspective' : 1000});

                var slideProps = {
                    'transform' : 'translateZ(' + tz + 'px)',
                    'backface-visibility' : 'hidden'
                };

                // CSS3 props for slide <li>s
                _this.RS.$currentSlide.prefixes(slideProps);
                _this.RS.$nextSlide.prefixes(slideProps);

                // CSS3 props for slider <ul>
                _this.RS.$slider.prefixes({
                    'transition' : 'none',
                    'transform-style' : 'preserve-3d',
                    'transform' : 'translateZ(-' + tz + 'px)'
                });

                // CSS3 prop for next slide <li>
                _this.RS.$nextSlide.css({'opacity':1}).prefixes({
                    'transform' : 'translateZ(0px) translateY(' + nty + 'px) translateX(' + ntx + 'px) rotateY('+ nry +'deg) rotateX('+ nrx +'deg)'
                });
            };

            // Execution steps
            this.execute = function () {
                var output = [];

                // Loop through vendor prefixes to make CSS3 transform rules (more involved than just calling prefixes() func in this case as need prefix twice: e.g. '-moz-transition: -moz-transition...')
                for (var i = 0; i < testBrowser.browserVendors.length; i++) {
                    output[testBrowser.browserVendors[i] + 'transition'] = testBrowser.browserVendors[i] + 'transform ' + _this.RS.settings['transitionDuration'] + 'ms ease-in-out';
                }

                // Add CSS3 props to elem
                _this.RS.$slider.prefixes(output);

                // Additional CSS3 prop
                _this.RS.$slider.prefixes({'transform' : 'translateZ(-' + tz + 'px) rotateX('+ wrx +'deg) rotateY('+ wry +'deg)'});
            };

            this.before(function () {
                // Fire on setup callback
                _this.execute();
            });
        }

        ,cubeH: function () {
            // Set to half of slide width
            var dimension = $(this.RS.$slides).width() / 2;

            // If next slide is ahead in array
            if (this.forward) {
                this.cube(dimension, dimension, 0, 0, 90, 0, -90);
            } else {
                this.cube(dimension, -dimension, 0, 0, -90, 0, 90);
            }
        }

        ,cubeV: function () {
            // Set to half of slide height
            var dimension = $(this.RS.$slides).height() / 2;

            // If next slide is ahead in array
            if (this.forward) {
                this.cube(dimension, 0, -dimension, 90, 0, -90, 0);
            } else {
                this.cube(dimension, 0, dimension, -90, 0, 90, 0);
            }
        }

        // grid() method is used by many transitions - not for calling directly
        // Grid calculations are based on those in the awesome flux slider (joelambert.co.uk/flux)
        ,grid: function (cols, rows, ro, tx, ty, sc, op) { // Args: columns, rows, rotate, translateX, translateY, scale, opacity

            // Fallback if browser does not support CSS transitions
            if (!this.RS.cssTransitions) {
                return this[this['fallback']]();
            }

            var _this = this;

            // Setup steps
            this.setup = function () {
                // The time (in ms) added to/subtracted from the delay total for each new gridlet
                var count = (_this.RS.settings['transitionDuration']) / (cols + rows);

                // Gridlet creator (divisions of the image grid, positioned with background-images to replicate the look of an entire slide image when assembled)
                function gridlet(width, height, top, left, top_bk, left_bk, mar_left, src, imgWidth, imgHeight, c, r) {
                    var delay = (c + r) * count;

                    // Return a gridlet elem with styles for specific transition
                    return $('<div class="rs-gridlet" />').css({
                        'width' : width,
                        'height' : height,
                        'top' : top,
                        'left' : left,
                        'background-image' : 'url(' + src + ')',
                        'background-position' : '-' + left_bk + 'px -' + top_bk + 'px',
                        'background-size' : imgWidth + 'px ' + imgHeight + 'px'
                    }).prefixes({
                        'transition' : 'all ' + _this.RS.settings['transitionDuration'] + 'ms ease-in-out ' + delay + 'ms',
                        'transform' : 'none'
                    });
                }

                // Get the next slide's image
                _this.$img = _this.RS.$currentSlide.find('img.rs-slide-image');

                // Create a grid to hold the gridlets
                _this.$grid = $('<div />').addClass('rs-grid');

                // Prepend the grid to the next slide (i.e. so it's above the slide image)
                _this.RS.$currentSlide.prepend(_this.$grid);

                // vars to calculate positioning/size of gridlets
                var imgWidth = _this.$img.width(),
                    imgHeight = _this.$img.height(),
                    imgSrc = _this.$img.attr('src'),
                    colWidth = Math.floor(imgWidth / cols),
                    rowHeight = Math.floor(imgHeight / rows),
                    colRemainder = imgWidth - (cols * colWidth),
                    colAdd = Math.ceil(colRemainder / cols),
                    rowRemainder = imgHeight - (rows * rowHeight),
                    rowAdd = Math.ceil(rowRemainder / rows);//default is 0

                // tx/ty args can be passed as 'auto'/'min-auto' (meaning use slide width/height or negative slide width/height)
                tx = tx === 'auto' ? imgWidth : tx;
                tx = tx === 'min-auto' ? - imgWidth : tx;
                ty = ty === 'auto' ? imgHeight : ty;
                ty = ty === 'min-auto' ? - imgHeight : ty;

                // Loop through cols
				top_init=parseInt(_this.$img.css('margin-top'));				
				mar_left=0;
				
				switch (_this.$img.css('text-align')){
					case 'left':
						left_init=parseInt(_this.$img.css('margin-left'));
						var leftDist = parseInt(_this.$img.css('margin-left'));
					break;
					case 'center':
						//left_init=0;
						left_pos=(_this.$grid.width() / 2);
						get_margin=-(parseInt(_this.$img.css('margin-left')));
						mar_half=_this.$img.width()/2
						console.log(get_margin);
						var leftDist = left_pos-mar_half-get_margin/2;
						left_init=leftDist;				
					break;
					case 'right':
						var leftDist = parseInt(_this.$grid.width())-parseInt(_this.$img.width());
						left_init=leftDist;							
					break;
				}
                for (var i = 0; i < cols; i++) {
                    var topDist = top_init,// parseInt(_this.$img.css('margin-top')),
                        newColWidth = colWidth;//defult topDist=0;

                    // If imgWidth (px) does not divide cleanly into the specified number of cols, adjust individual col widths to create correct total
                    if (colRemainder > 0) {
                        var add = colRemainder >= colAdd ? colAdd : colRemainder;
                        newColWidth += add;
                        colRemainder -= add;
                    }

                    // Nested loop to create row gridlets for each col
                    for (var j = 0; j < rows; j++)  {
                        var newRowHeight = rowHeight,
                            newRowRemainder = rowRemainder;

                        // If imgHeight (px) does not divide cleanly into the specified number of rows, adjust individual row heights to create correct total
                        if (newRowRemainder > 0) {
                            add = newRowRemainder >= rowAdd ? rowAdd : rowRemainder;
                            newRowHeight += add;
                            newRowRemainder -= add;
                        }

                        // Create & append gridlet to grid
						//console.log(topDist,leftDist);
                        _this.$grid.append(gridlet(newColWidth, newRowHeight, topDist, leftDist, topDist-top_init,leftDist-left_init,mar_left, imgSrc, imgWidth, imgHeight, i, j));
                        topDist += newRowHeight;
                    }

                    leftDist += newColWidth;
                }

                // Set event listener on last gridlet to finish transitioning
                _this.listenTo = _this.$grid.children().last();

                // Show grid & hide the image it replaces
                _this.$grid.show();
                _this.$img.css('opacity', 0);

                // Add identifying classes to corner gridlets (useful if applying border radius)
                _this.$grid.children().first().addClass('rs-top-left');
                _this.$grid.children().last().addClass('rs-bottom-right');
                _this.$grid.children().eq(rows - 1).addClass('rs-bottom-left');
                _this.$grid.children().eq(- rows).addClass('rs-top-right');
            };

            // Execution steps
            this.execute = function () {
                _this.$grid.children().css('opacity', op).prefixes({'transform' : 'rotate('+ ro +'deg) translateX('+ tx +'px) translateY('+ ty +'px) scale('+ sc +')'});
            };

            this.before(function () {
                // Fire on setup callback
                _this.execute();
            });

            // Reset steps
            this.reset = function () {
                _this.$img.css('opacity', 1);
                _this.$grid.remove();
            }
        }

        ,sliceH: function () {
            this.grid(1, 8, 0, 'min-auto', 10, 1, 0);
        }

        ,sliceV: function () {
            this.grid(10, 1, 0, 0, 'auto', 1, 0);
        }

        ,slideV: function () {
            this.grid(1, 1, 0, 0, 'auto', 1, 1);
        }

        ,slideH: function () {
            this.grid(1, 1, 0, 'min-auto', 0, 1, 1);
        }

        ,scale: function () {
            this.grid(1, 1, 0, 0, 0, 1.5, 0);
        }

        ,blockScale: function () {
            this.grid(8, 6, 0, 0, 0, .6, 0);
        }

        ,kaleidoscope: function () {
            this.grid(10, 8, 0, 0, 0, 1, 0);
        }

        ,fan: function () {
            this.grid(1, 10, 45, 100, 0, 1, 0);
        }

        ,blindV: function () {
            this.grid(1, 8, 0, 0, 0, .7, 0);
        }

        ,blindH: function () {
            this.grid(10, 1, 0, 0, 0, .7, 0);
        }

        ,random: function () {
            // Pick a random transition from the anims array (obj prop)
            this[this.anims[Math.floor(Math.random() * this.anims.length)]]();
        }
    };

	// Obj to check browser capabilities
	var testBrowser = {
        // Browser vendor CSS prefixes
        browserVendors: ['', '-webkit-', '-moz-', '-ms-', '-o-', '-khtml-']

        // Browser vendor DOM prefixes
        ,domPrefixes: ['', 'Webkit', 'Moz', 'ms', 'O', 'Khtml']

        // Method to iterate over a property (using all DOM prefixes)
        // Returns true if prop is recognised by browser (else returns false)
        ,testDom: function (prop) {
            var i = this.domPrefixes.length;
            while (i--) {
                if (document.body.style[this.domPrefixes[i] + prop] !== undefined) {
                    return true;
                }
            }

            return false;
        }

        ,cssTransitions: function () {
            // Use Modernizr if available & implements csstransitions test
            if (window.Modernizr && Modernizr.csstransitions !== undefined) {
                return Modernizr.csstransitions;
            }

            // Use testDom method to check prop (returns bool)
            return this.testDom('Transition');
        }

        ,cssTransforms3d: function () {
            // Use Modernizr if available & implements csstransforms3d test
            if (window.Modernizr && Modernizr.csstransforms3d !== undefined) {
                return Modernizr.csstransforms3d;
            }

            // Check for vendor-less prop
            if (document.body.style['perspectiveProperty'] !== undefined) {
                return true;
            }

            // Use testDom method to check prop (returns bool)
            return this.testDom('Perspective');
        }
    };

	// CSS vendor prefix generator
	$.fn['prefixes'] = function (props) {
        var output = [];

        // Loop through props, add with each vendor prefix to output array
        for (var prop in props) {
            if(props.hasOwnProperty(prop)) {
                var i = testBrowser.browserVendors.length;
                while (i--) {
                    output[testBrowser.browserVendors[i] + prop] = props[prop];
                }
            }
        }

        // Add output array of vendor-ised props to elem
        this.css(output);
        return this;
    };

    /*!
     * David Desandro's imagesloaded plugin is included here as a cross-browser way to ensure all images have loaded before slider setup (e.g. testing for image dimensions)
     * Another reliable method would be to wait until the window.load event before setup - though that could cause considerable delays on certain pages
     *
     * jQuery imagesLoaded plugin v2.0.1
     * http://github.com/desandro/imagesloaded
     *
     * MIT License. by Paul Irish et al.
     */
    // blank image data-uri bypasses webkit log warning (thx doug jones)
    var BLANK = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

    $.fn.imagesLoaded = function( callback ) {
        var $this = this,
            deferred = $.isFunction($.Deferred) ? $.Deferred() : 0,
            hasNotify = $.isFunction(deferred.notify),
            $images = $this.find('img').add( $this.filter('img') ),
            loaded = [],
            proper = [],
            broken = [];

        function doneLoading() {
            var $proper = $(proper),
                $broken = $(broken);

            if ( deferred ) {
                if ( broken.length ) {
                    deferred.reject( $images, $proper, $broken );
                } else {
                    deferred.resolve( $images );
                }
            }

            if ( $.isFunction( callback ) ) {
                callback.call( $this, $images, $proper, $broken );
            }
        }

        function imgLoaded( img, isBroken ) {
            // don't proceed if BLANK image, or image is already loaded
            if ( img.src === BLANK || $.inArray( img, loaded ) !== -1 ) {
                return;
            }

            // store element in loaded images array
            loaded.push( img );

            // keep track of broken and properly loaded images
            if ( isBroken ) {
                broken.push( img );
            } else {
                proper.push( img );
            }

            // cache image and its state for future calls
            $.data( img, 'imagesLoaded', { isBroken: isBroken, src: img.src } );

            // trigger deferred progress method if present
            if ( hasNotify ) {
                deferred.notifyWith( $(img), [ isBroken, $images, $(proper), $(broken) ] );
            }

            // call doneLoading and clean listeners if all images are loaded
            if ( $images.length === loaded.length ){
                setTimeout( doneLoading );
                $images.unbind( '.imagesLoaded' );
            }
        }

        // if no images, trigger immediately
        if ( !$images.length ) {
            doneLoading();
        } else {
            $images.bind( 'load.imagesLoaded error.imagesLoaded', function( event ){
                // trigger imgLoaded
                imgLoaded( event.target, event.type === 'error' );
            }).each( function( i, el ) {
                    var src = el.src;

                    // find out if this image has been already checked for status
                    // if it was, and src has not changed, call imgLoaded on it
                    var cached = $.data( el, 'imagesLoaded' );
                    if ( cached && cached.src === src ) {
                        imgLoaded( el, cached.isBroken );
                        return;
                    }

                    // if complete is true and browser supports natural sizes, try
                    // to check for image status manually
                    if ( el.complete && el.naturalWidth !== undefined ) {
                        imgLoaded( el, el.naturalWidth === 0 || el.naturalHeight === 0 );
                        return;
                    }

                    // cached images don't fire load sometimes, so we reset src, but only when
                    // dealing with IE, or image is complete (loaded) and failed manual check
                    // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
                    if ( el.readyState || el.complete ) {
                        el.src = BLANK;
                        el.src = src;
                    }
                });
        }

        return deferred ? deferred.promise( $this ) : $this;
    };

	// jQuery plugin wrapper
	$.fn['refineSlide'] = function (settings) {
		return this.each(function () {
            // Check if already instantiated on this elem
			if (!$.data(this, 'refineSlide')) {
                // Instantiate & store elem + string
				$.data(this, 'refineSlide', new RS(this, settings));
			}
		});
	}
})(jQuery, window, document);
//refineslider
/* ===================================================
 * bootstrap-transition.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  $(function () {

    "use strict"; // jshint ;_;


    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd'
            ,  'msTransition'     : 'MSTransitionEnd'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.0.4
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.slide && this.slide(this.options.slide)
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e = $.Event('slide')

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (typeof option == 'string' || (option = options.slide)) data[option]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL DATA-API
  * ================= */

  $(function () {
    $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      $target.carousel(options)
      e.preventDefault()
    })
  })

}(window.jQuery)
//boostrap
/*===============================================================================
 * ThemeShock Slider Plugin
 * http://wordpressThemeshock.com
 * ================================================= 
 * Copyright 2012 DesignShock, Inc.
 *
 * This plugins is built on top of twiiter bootstrap carousel plugin
 * and also uses the jsuqery gallery plugin from codrops
 * 
 * ======================================================
 *
 *	In order for this plugin to work properly you'll need to include some
 *  scripts and styles 
 *  
 * @requires: bootstrap-carousel.css
 * @requires: bootstrap-carousel.js
 * @requires: bootstrap-transition.js -> not vital but better for smoth transitios
 * @requires: ts-slider.css
 * 
 * For 3D mode
 * @requires: 3d-style.css
 * @requires: modernizr.custom.53451.js
 * @requires: 3dGallery.js
 * 
 *
 * ===================================================== */

 !function ( $ ) {


 	/* TSSLIDER CLASS DEFINITION
 	 ================================ */
 	 var WptsSlider = function( element, options ) {
 	 	this.$element = $(element)
 	 	this.options = options
 	 	this.mainId =  this.$element.find('.carousel').attr('id')
 	 }

 	 WptsSlider.prototype = {
 	 	normalMode : function( customizable ) {
 	 		// Apply Carousel to the Element we've the id of
 	 		this.id = this.$element.find('.carousel').attr('id')
 	 		//Get Elements
 	 		this.$leftControl = this.$element.find('[href=#' + this.id + ']:nth-child(2)')
 	 		this.$rightControl = this.$element.find('[href=#' + this.id + ']:nth-child(3)' )

 	 		//Add the Skin Class
 	 		this.$element.addClass(  this.options.skin  )
 	 		this.$element.css('visibility', 'hidden')

 	 		//Add arrow Classes
 	 		this.$leftControl.html('<p class="arrow-inside">‹</p>')
 	 		this.$leftControl.addClass( this.options.arrows )
 	 		this.$leftControl.addClass(  this.options.arrows + '-left' )
 	 		this.$rightControl.html('<p class="arrow-inside">›</p>')
 	 		this.$rightControl.addClass(  this.options.arrows )
 	 		this.$rightControl.addClass(  this.options.arrows + '-right' )
			var autoplay=this.options.autoplay;
			var effects=this.options.effects;
 	 		// Carousel Method
			if(effects==''){
				this.carrousel_bosstrap("#"+this.id,autoplay);
			}
 	 		var $mainElement = this.$element

 	 		//Make the element visible only when it is ready
 	 		$(window).load( function(){
 	 			$mainElement.css('visibility', 'visible')
 	 		})
 	 	},
		carrousel_bosstrap:function(element,autoplay){
			jQuery(element).carousel({
				interval: autoplay
			});
		},
		refineslider:function(main_id,element,effects,css_var,autoplay){
			var bk_sld=this.options.background_sld;
			if(jQuery.browser.msie){
				effects='fade';
			}
			//alert(element);
			autoplay_st=(autoplay===0)?false:true;
			jQuery(element).each(function(index, e) {
				get_id=this.id;
				jQuery(this).replaceWith('<ul id="'+this.id+'" class="'+this.className+'"  >'+jQuery(this).html()+'</ul>');
			});
			jQuery(element+' .item').each(function(index, element) {
				jQuery(this).replaceWith('<li class="'+this.className+'" >'+jQuery(this).html()+'</li>');
			});

			jQuery(main_id+' .carousel-custom').each(function(index, element) {//change arroww by effect refineslider
				datasld_pos=jQuery(this).attr('data-slide');
				switch(datasld_pos){
					case 'prev':
					case 'next':
						jQuery(this).removeAttr('data-slide').attr('data-rs',datasld_pos);
					break;
				}
			});
			var bk_anim=false;
			switch(effects){
				case 'random':
				case 'fade': 
				case 'sliceH': 
				case 'sliceV': 
				case 'slideH': 
				case 'slideV': 
				case 'scale': 
				case 'blockScale':
				case 'kaleidoscope':
				case 'fan': 
				case 'blindH':
				case 'blindV':
					bk_anim=true;
					switch (bk_sld){
						case '':
						case 'transparent':
						break;
						default:
							jQuery('#'+this.mainId+' .ts_border').css('background','none');
						break;
					}
				break;
			}
			//'carousel-custom'
		 get_height=jQuery(element+' .item').height();
		 jQuery(element).refineSlide({
					transition : effects,
					autoPlay  : autoplay_st,
					delay : autoplay,
					onInit : function (object_rs) {
					var _this=object_rs;
						if (bk_anim==true){
							switch (bk_sld){
								case '':
								case 'transparent':
								break;
								default:
									jQuery(main_id+' .rs-wrap').css('background','url('+bk_sld+')');
								break;
							}
						}
						jQuery(main_id+' a[data-rs="prev"]').click(function(e) {
							e.preventDefault();
							_this.settings['slider'].prev();
						});
						jQuery(main_id+' a[data-rs="next"]').click(function(e) {
							e.preventDefault();
							_this.settings['slider'].next();						
						});
						jQuery(main_id+' a.ts_refine_st').click(function(e){
							get_cur_pos=jQuery(this).attr('data-to')-1;
							_this.settings['slider'].transition(get_cur_pos, true);
						});
						jQuery(element+' li[class*="rs-slide-"]').css(css_var);
					},
					onChange:function(){
						jQuery(element+' li[class*="rs-slide-"]').css(css_var);
					},
					afterChange:function(){
						jQuery(element+' li[class*="rs-slide-"]').css(css_var);
					},				
					controls : 'arrows'
				});
			jQuery(element+' .rs-slider li').addClass('item');			
		},
 	 	customizable : function() {
			var bk_sld=this.options.background_sld;
			var bk_sld_cap=this.options.background_caption;			
			var css_var_sld={'background': ''},css_var_capt={};			
				switch (bk_sld){
					case '':
					case 'transparent':
						css_var_sld['background']="transparent";
						if (this.options.skin	==='transparent'){						
							css_var_sld['border']='1px solid #FFF';
							css_var_sld['outline']='1px solid #bbb';
							jQuery('#'+this.mainId).addClass('ts_transparent');
						}
					break;
					default:
					
						css_var_sld['background']=(bk_sld[0]==='#')?bk_sld:'url('+bk_sld+')';
					break;
				}
			jQuery('#'+this.mainId+' .ts_border').css(css_var_sld);
			switch (bk_sld_cap){
				case '':
				case 'transparent':
					css_var_capt['background']="transparent";
				break;
				default:
					css_var_capt['background']=(bk_sld_cap[0]==='#')?bk_sld_cap:'url('+bk_sld_cap+')';
					css_var_capt['opacity']='0.75';
				break;
			}
			jQuery('#'+this.mainId+' .ts_border .carousel-caption').css(css_var_capt);
			
 	 		this.normalMode( customizable = true );
			var effects=this.options.effects;
			/*refdefine silider*/
			id_inner='#'+this.$element.find('.carousel-inner').attr('id');//id del tercer contenedor
			img_align=this.options.imgAlignment;
			height_slider=this.options.sliderHeight;
			thumbs=this.options.thumbs
			switch(img_align){
				case 'center':
				case 'left':
				case 'right':
					text_align= img_align;
				break;
				default:
					text_align= 'left';
				break;
			}
			css_var={'height': height_slider
							,'text-align': text_align
										,width:'100%'
							};
			switch(effects){
				case 'random':
				case 'cubeH': 
				case 'cubeV': 
				case 'fade': 
				case 'sliceH': 
				case 'sliceV': 
				case 'slideH': 
				case 'slideV': 
				case 'scale': 
					this.refineslider('#'+this.mainId,id_inner,effects,css_var,this.options.autoplay);
					element_find='li[class*="rs-slide-"]';				
				break;
				default:
					jQuery(id_inner).removeClass('rs-slider');
					element_find='.item';
				break;				
			}

			/**/
 	 		/*
 	 		* Makes the slider available for users to put elements in it in
 	 		* a custom way
 	 		* 
 	 		* @param -> sliderHeight .item - height
 	 		*
 	 		*/
			width=this.options.width;
//			height=this.options.height;
			width_final=(width==='responsive')?'auto':width;
			this.$element.css({width:width_final	});
			
 	 		var that = this
 	 		,   mainId = this.mainId
 	 		,	$sliderHeight = this.options.sliderHeight
 	 		, $mainContainer = this.$element
 	 		,	$carouselContainer = $mainContainer.find('.carousel')
 	 		,	$carouselInner = $carouselContainer.find('.carousel-inner')
 	 		,	$carouselItem = $carouselInner.find(element_find)
 	 		,	$carouselImg = $carouselItem.find('img')
 	 		,	$carouselCaption = $carouselItem.find('.carousel-caption')
 	 		,	$captionTitle = $carouselCaption.find('h4')
 	 		,	$captionContent = $carouselCaption.find('p')
 	 		,	$itemHeight	= this.options.sliderHeight
 	 		,	$imgHeight = this.options.imgHeight
 	 		,	$imgWidth = this.options.imgWidth
 	 		,	$textPosition = this.options.textPosition
 	 		,	$textWidth = this.options.textWidth
 	 		,	$imgAlignment = this.options.imgAlignment
 	 		, $imgMarginTop = this.options.imgMarginTop
 	 		,	$imgMarginBottom = this.options.imgMarginBottom
 	 		,	$imgMarginLeft = this.options.imgMarginLeft
 	 		,	$imgMarginRight = this.options.imgMarginRight
 	 		,	$textBgColor = this.options.textBgColor.split(' ')
 	 		,	$textColor = this.options.textColor
			,	$textBold = this.options.textBold
			,	$textItalic = this.options.textItalic
			,	$titleBold = this.options.titleBold
			,	$titleItalic = this.options.titleItalic			
 	 		,	$showText = this.options.showText
 	 		,	$imgFrame = this.options.imgFrame
 	 		,	$textFrame = this.options.textFrame
 	 		,	$squared = this.options.squared
 	 		,	$textSquarePosition = this.options.textSquarePosition
			

 	 		$(window).load(function(){
				$carouselItem.css(css_var);
 	 			$carouselItem.css({
 	 				'height' : $itemHeight
 	 			})
 			// Set the images width and height
 	 			$carouselImg.css({
 	 				 	'width' : $imgWidth + '%'
 	 				, 	'height' : $imgHeight + '%'
 	 				, 	'margin-top': $imgMarginTop
 	 				,	'margin-bottom': $imgMarginBottom
 	 				,	'margin-left': $imgMarginLeft
 	 				, 	'margin-right': $imgMarginRight
 	 			})
 	 			// If showText is false, hide the text
 	 			if( ! $showText ) $carouselCaption.css({'visibility': 'hidden'})

				if ( $titleBold === 'true' ) {
					$captionTitle.css('font-weight', 'bold');
				}else{
					$captionTitle.css('font-weight', 'normal');
				}
				if ( $titleItalic === 'true' ) {
					$captionTitle.css('font-style', 'italic');
				}else{
					$captionTitle.css('font-style', 'normal');				
				}
				if ( $textBold === 'true' ){
					$captionContent.css('font-weight', 'bold');
				}else{
					$captionContent.css('font-weight', 'normal');				
				}
				if ( $textItalic === 'true' ) {
					$captionContent.css('font-style', 'italic');
				}else{
					$captionContent.css('font-style', 'normal');				
				}
				
 	 			// Set the content color
 	 			$captionContent.css({
 	 				'color': '#' + $textColor
 	 			})

 	 			// Set the image frame 
 	 			// If the text is squared

 	 			if( $squared ) {
 	 				$instance = new WptsSlider()
 	 			 	$instance.positionSquaredItems( $carouselCaption, $textWidth, $textSquarePosition, $textBgColor )
 	 			 	return
 	 			} 
 	 			// Set the caption position
				switch( $textPosition )	{
 	 				
 	 				case 'top' :
 	 					$carouselCaption.css({ 
 	 						'top' : 0, 'left': 0,'bottom':'auto'
 	 					,	'background': 'rgba(' + $textBgColor[0] + ', ' + $textBgColor[1] + ', ' + $textBgColor[2] + ', '  + '.75)'
 	 					})
 	 				break

 	 				case 'bottom' :
 	 				  	$carouselCaption.css({ 
 	 				  		'bottom' : 0, 'left': 0,'top':'auto'
 	 				  	,	'background': 'rgba(' + $textBgColor[0] + ', ' + $textBgColor[1] + ', ' + $textBgColor[2] + ', '  + '.75)'
 	 				  	})
 	 				break

 	 				case 'left' :

 	 					if ( $textWidth < 10 ) $textWidth = 10

 	 					$carouselCaption.css({ 
 	 						'right': 'auto'
 	 					,	'left': 0
	 	 				,	'top': 0
 	 					,	'bottom': 0
 	 					,	'width' : $textWidth + '%'
 	 					,	'background': 'rgba(' + $textBgColor[0] + ', ' + $textBgColor[1] + ', ' + $textBgColor[2] + ', '  + '.75)'
 	 					})
 	 				break

 	 				case 'right' :

 	 					if ( $textWidth < 10 ) $textWidth = 10

 	 					$carouselCaption.css({
							'left':'auto'
 	 					,	'right': 0
 	 					,	'top': 0
 	 					,	'bottom': 0
 	 					,	'width': $textWidth + '%'
 	 					,	'background': 'rgba(' + $textBgColor[0] + ', ' + $textBgColor[1] + ', ' + $textBgColor[2] + ', '  + '.75)'
 	 					 })
 	 				break

 	 				case 'center':

 	 					// Center the text container inside its container
 	 					if ( $textWidth < 10 ) $textWidth = 10

 	 					// No centered 50% top but 0% top
 	 					$carouselCaption.css({
 	 						'top': 0 + '%'
 	 					,	'left': 50 + '%'
 	 					
 	 					})

						var $captionHeight = $carouselCaption.height()
						,	$captionWidth = $carouselCaption.width()


						$carouselCaption.css({
							/*'margin-top': - $captionHeight / 2
						,*/	'margin-left': - parseInt( $textWidth / 2 ) - 2.4  + '%'
						,	'width': $textWidth + '%'
						,	'background': 'rgba(' + $textBgColor[0] + ', ' + $textBgColor[1] + ', ' + $textBgColor[2] + ', '  + '.75)'
						})

 	 				break

 	 			}

				switch(effects){	
					case 'fadein':
					case 'blind':
					case 'fallingbars':
					case 'appear': 
					case 'fillin':
					case 'explode': 
					case 'jumble': 
					case 'risingbars': 
					case 'paint': 
					case 'diagonal': 
					case 'crunchingbars':
					case 'slidein':
						$carouselImg.attr({'width':$imgWidth+'%','height':$imgHeight+'%'});
						this_s.slider_gallery();
					break; 
					case 'scrollVert3d':
					case 'scrollHorz3d':
					case 'scrollVert':
					case 'scrollHorz':
						this_s.box_slider();
					break;
				}
 	 		})
 	 	},
 	 	positionSquaredItems: function( element, width, position, bgColor ) {
			
			// No less than 10% width
			if ( width < 10 ) width = 10;

 	 		//alert( 'Position squared items ')
 	 		switch( position ) {
 	 			case 1:
 	 				addSquareCss( element, width, bgColor, 5, '', 'auto', 5, false )
 	 			break
 	 			case 2:
 	 				addSquareCss( element, width, bgColor, 5, 5, 'auto', 'auto', false )
 	 			break
 	 			case 3:
 	 				addSquareCss( element, width, bgColor, 'auto', 5, 5, 'auto', false )
 	 			break
 	 			case 4:
 	 				addSquareCss( element, width, bgColor, 'auto', 'auto', 5, 5, false )
 	 			break
 	 			case 5:
 	 				addSquareCss( element, width, bgColor, '50%', 'auto', 'auto', '50%', true )
 	 			break
 	 		}	 //marginLeft, marginTop,

 	 		function addSquareCss( element, width, textBgColor, a, b, c, d, centered ) {
 	 				
 	 			// Predefined 50% width
 	 			if ( centered ) width = 50

 	 			element.css({
 	 				'top': a
 	 			,	'right': b
 	 			,	'bottom': c
 	 			,	'left': d
 	 			,	'width': width + '%'
 	 			,	'background': 'rgba(' + textBgColor[0] + ', ' + textBgColor[1] + ', ' + textBgColor[2] + ', '  + '.75)'
 	 			})

 	 			// Stop execution if the text is not centered
 	 			if( ! centered ) return

 	 			/* Note: in order for the squared box to be centered, the added 30's had to be remmoved
 	 			var elHeight = element.height() + 30,
 	 				elWidth	 = width + 30
				*/

				var elHeight = element.height(),
					elWidth = width;

 	 			console.log(  elWidth )
 	 			element.css({
 	 				'margin-left': - parseInt( elWidth / 2 ) + '%'
 	 			,	'margin-top': - elHeight / 2
 	 			})

 	 		}
 	 	},

 	 	ControlFontFix : function() {
 	 		$(window).bind('resize', this.fontFix )
 	 		// FixMe -> There is a problem in detecting the dimensions
 	 		// of the element once it has been resized by javascript
 	 		// we should run the following actions once the element has been loaded
 	 		// not before otherwise it'll be buggy - 
 	 		$(window).bind('load', this.fontFix )
 	 		$(window).load( this.fontFix )

 	 	},

 	 	fontFix : function( ) {

 	 		var mainElement = this.$element
 	 		  , $pTargets    = $('p.arrow-inside')

 	 			$pTargets.each(function(){
 	 				var $pContainer  = $('a.carousel-custom')
 					  , $pContWidth  = $pContainer.width()
 					  ,	$pContHeight = $pContainer.height()
 					  ,	$pHeight     = $pTargets.height()
 				
 					//$('#monitor').text( $pContainer.width() )

 					if( $pContainer.width() > 44 ) {

 						$(this).css({ 
 							'font-size': 39,
 							'margin-top': - ( $(this).height() / 2 ),
 							'margin-left': - ( $(this).width() /2 ) 
 						})

 					}

 					else if( $pContainer.width() <= 44 ) {
 						$(this).css({
		 	 				'font-size': $pContWidth,
		 	 				'margin-top' : - ( $(this).height() / 2 ),
		 	 				'margin-left' : - ( $(this).width() / 2)
 	 					})
 					}
 	 			})

 	 	}
 	 }


 	 /* SLIDER PLUGIN DEFINITION
 	  * =================================== */

 	  $.fn.tsSlider = function ( option ) {

 	  	return this.each(function () {
 	  		var $this = $(this)
 	  		  , options = $.extend({}, $.fn.tsSlider.defaults, typeof option == 'object' && option)
 	  		  , $instance = new WptsSlider( this, options )
 	  		  if( options.mode3d ) $instance.mode3d()
 	  		  else if ( options.normalMode ) $instance.normalMode(), $instance.ControlFontFix()
 	  		  else if ( options.customizable ) $instance.customizable(), $instance.ControlFontFix()
 	  	})
 	  }

 	  $.fn.tsSlider.defaults = {
 	  	mode3d: false
 	  ,	normalMode: false
 	  , customizable: true
 	  , textBgColor: '000'
 	  , textColor: 'fff'
 	  , imgFrame: ''
 	  ,	textFrame: ''
		, thumbs:''
		, width:'responsive'
		, showText: true 
		, autoplay:5000
		, imgWidth: 100
		, imgHeight: 100
		, imgMarginTop: 0
		, imgMarginLeft:0
		, squared: true 
		, textSquarePosition: 4 
		, textPosition: 'bottom'
		, imgAlignment: 'right'
		, textColor: 'ffffff'
		, skin: 'ts-skin-1'
		, arrows:'ts-arrow-1'
		, textWidth: 200 
		, sliderHeight: 555 
		, effects:''
		, titleBold: 'true' //true or false
		, titleItalic: 'true' //true or false
		, textBold: 'true' //true or false
		, textItalic: 'true' //true or false
		, textWidth: 50 ///text width  porcentage		
		, background_sld:''
		, background_caption:''
		}

 }(window.jQuery);