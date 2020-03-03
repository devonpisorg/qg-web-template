/*! SWE 3.1.8 20200304T918 */
!function(e){function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(module,exports){"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var r,a,n,o,i,s=gap,u=t[e];switch(u&&"object"==typeof u&&"function"==typeof u.toJSON&&(u=u.toJSON(e)),"function"==typeof rep&&(u=rep.call(t,e,u)),typeof u){case"string":return quote(u);case"number":return isFinite(u)?String(u):"null";case"boolean":case"null":return String(u);case"object":if(!u)return"null";if(gap+=indent,i=[],"[object Array]"===Object.prototype.toString.apply(u)){for(o=u.length,r=0;r<o;r+=1)i[r]=str(r,u)||"null";return n=0===i.length?"[]":gap?"[\n"+gap+i.join(",\n"+gap)+"\n"+s+"]":"["+i.join(",")+"]",gap=s,n}if(rep&&"object"==typeof rep)for(o=rep.length,r=0;r<o;r+=1)"string"==typeof rep[r]&&(a=rep[r],(n=str(a,u))&&i.push(quote(a)+(gap?": ":":")+n));else for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n=str(a,u))&&i.push(quote(a)+(gap?": ":":")+n);return n=0===i.length?"{}":gap?"{\n"+gap+i.join(",\n"+gap)+"\n"+s+"}":"{"+i.join(",")+"}",gap=s,n}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(e,t,r){var a;if(gap="",indent="","number"==typeof r)for(a=0;a<r;a+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var r,a,n=e[t];if(n&&"object"==typeof n)for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a=walk(n,r),void 0!==a?n[r]=a:delete n[r]);return reviver.call(e,t,n)}var j;if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
function(e,t){"use strict";var r=e.History=e.History||{},a=e.jQuery;if(void 0!==r.Adapter)throw new Error("History.js Adapter has already been loaded...");r.Adapter={bind:function(e,t,r){a(e).bind(t,r)},trigger:function(e,t,r){a(e).trigger(t,r)},extractEventData:function(e,t,r){/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
return t&&t.originalEvent&&t.originalEvent[e]||r&&r[e]||void 0},onDomLoad:function(e){a(e)}},void 0!==r.init&&r.init()}(window),/**
 * History.js HTML4 Support
 * Depends on the HTML5 Support
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
function(e,t){"use strict";var r=e.document,a=e.setTimeout||a,n=e.clearTimeout||n,o=e.setInterval||o,i=e.History=e.History||{};if(void 0!==i.initHtml4)throw new Error("History.js HTML4 Support has already been loaded...");i.initHtml4=function(){if(void 0!==i.initHtml4.initialized)return!1;i.initHtml4.initialized=!0,i.enabled=!0,i.savedHashes=[],i.isLastHash=function(e){var t=i.getHashByIndex();return e===t},i.isHashEqual=function(e,t){return e=encodeURIComponent(e).replace(/%25/g,"%"),t=encodeURIComponent(t).replace(/%25/g,"%"),e===t},i.saveHash=function(e){return!i.isLastHash(e)&&(i.savedHashes.push(e),!0)},i.getHashByIndex=function(e){return void 0===e?i.savedHashes[i.savedHashes.length-1]:e<0?i.savedHashes[i.savedHashes.length+e]:i.savedHashes[e]},i.discardedHashes={},i.discardedStates={},i.discardState=function(e,t,r){var a,n=i.getHashByState(e);return a={discardedState:e,backState:r,forwardState:t},i.discardedStates[n]=a,!0},i.discardHash=function(e,t,r){var a={discardedHash:e,backState:r,forwardState:t};return i.discardedHashes[e]=a,!0},i.discardedState=function(e){var t=i.getHashByState(e);return i.discardedStates[t]||!1},i.discardedHash=function(e){return i.discardedHashes[e]||!1},i.recycleState=function(e){var t=i.getHashByState(e);return i.discardedState(e)&&delete i.discardedStates[t],!0},i.emulated.hashChange&&(i.hashChangeInit=function(){i.checkerFunction=null;var t,a,n,s,u="",l=Boolean(i.getHash());return i.isInternetExplorer()?(t="historyjs-iframe",a=r.createElement("iframe"),a.setAttribute("id",t),a.setAttribute("src","#"),a.style.display="none",r.body.appendChild(a),a.contentWindow.document.open(),a.contentWindow.document.close(),n="",s=!1,i.checkerFunction=function(){if(s)return!1;s=!0;var t=i.getHash(),r=i.getHash(a.contentWindow.document);return t!==u?(u=t,r!==t&&(n=r=t,a.contentWindow.document.open(),a.contentWindow.document.close(),a.contentWindow.document.location.hash=i.escapeHash(t)),i.Adapter.trigger(e,"hashchange")):r!==n&&(n=r,l&&""===r?i.back():i.setHash(r,!1)),s=!1,!0}):i.checkerFunction=function(){var t=i.getHash()||"";return t!==u&&(u=t,i.Adapter.trigger(e,"hashchange")),!0},i.intervalList.push(o(i.checkerFunction,i.options.hashChangeInterval)),!0},i.Adapter.onDomLoad(i.hashChangeInit)),i.emulated.pushState&&(i.onHashChange=function(t){var r,a=t&&t.newURL||i.getLocationHref(),n=i.getHashByUrl(a),o=null;return i.isLastHash(n)?(i.busy(!1),!1):(i.doubleCheckComplete(),i.saveHash(n),n&&i.isTraditionalAnchor(n)?(i.Adapter.trigger(e,"anchorchange"),i.busy(!1),!1):(o=i.extractState(i.getFullUrl(n||i.getLocationHref()),!0),i.isLastSavedState(o)?(i.busy(!1),!1):(i.getHashByState(o),(r=i.discardedState(o))?(i.getHashByIndex(-2)===i.getHashByState(r.forwardState)?i.back(!1):i.forward(!1),!1):(i.pushState(o.data,o.title,encodeURI(o.url),!1),!0))))},i.Adapter.bind(e,"hashchange",i.onHashChange),i.pushState=function(t,r,a,n){if(a=encodeURI(a).replace(/%25/g,"%"),i.getHashByUrl(a))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(!1!==n&&i.busy())return i.pushQueue({scope:i,callback:i.pushState,args:arguments,queue:n}),!1;i.busy(!0);var o=i.createStateObject(t,r,a),s=i.getHashByState(o),u=i.getState(!1),l=i.getHashByState(u),c=i.getHash(),d=i.expectedStateId==o.id;return i.storeState(o),i.expectedStateId=o.id,i.recycleState(o),i.setTitle(o),s===l?(i.busy(!1),!1):(i.saveState(o),d||i.Adapter.trigger(e,"statechange"),i.isHashEqual(s,c)||i.isHashEqual(s,i.getShortUrl(i.getLocationHref()))||i.setHash(s,!1),i.busy(!1),!0)},i.replaceState=function(t,r,a,n){if(a=encodeURI(a).replace(/%25/g,"%"),i.getHashByUrl(a))throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if(!1!==n&&i.busy())return i.pushQueue({scope:i,callback:i.replaceState,args:arguments,queue:n}),!1;i.busy(!0);var o=i.createStateObject(t,r,a),s=i.getHashByState(o),u=i.getState(!1),l=i.getHashByState(u),c=i.getStateByIndex(-2);return i.discardState(u,o,c),s===l?(i.storeState(o),i.expectedStateId=o.id,i.recycleState(o),i.setTitle(o),i.saveState(o),i.Adapter.trigger(e,"statechange"),i.busy(!1)):i.pushState(o.data,o.title,o.url,!1),!0}),i.emulated.pushState&&i.getHash()&&!i.emulated.hashChange&&i.Adapter.onDomLoad(function(){i.Adapter.trigger(e,"hashchange")})},void 0!==i.init&&i.init()}(window),/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
function(e,t){"use strict";var r=e.console||void 0,a=e.document,n=e.navigator,o=!1,i=e.setTimeout,s=e.clearTimeout,u=e.setInterval,l=e.clearInterval,c=e.JSON,d=e.alert,p=e.History=e.History||{},h=e.history;try{o=e.sessionStorage,o.setItem("TEST","1"),o.removeItem("TEST")}catch(e){o=!1}if(c.stringify=c.stringify||c.encode,c.parse=c.parse||c.decode,void 0!==p.init)throw new Error("History.js Core has already been loaded...");p.init=function(e){return void 0!==p.Adapter&&(void 0!==p.initCore&&p.initCore(),void 0!==p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(t){if(void 0!==p.initCore.initialized)return!1;if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.disableSuid=p.options.disableSuid||!1,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||a.title,p.options.html4Mode=p.options.html4Mode||!1,p.options.delayInit=p.options.delayInit||!1,p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList;if(void 0!==t&&null!==t){for(e=0;e<t.length;e++)l(t[e]);p.intervalList=null}},p.debug=function(){p.options.debug&&p.log.apply(p,arguments)},p.log=function(){var e,t,n,o,i,s=!(void 0===r||void 0===r.log||void 0===r.log.apply),u=a.getElementById("log");for(s?(o=Array.prototype.slice.call(arguments),e=o.shift(),void 0!==r.debug?r.debug.apply(r,[e,o]):r.log.apply(r,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length;t<n;++t){if("object"==typeof(i=arguments[t])&&void 0!==c)try{i=c.stringify(i)}catch(e){}e+="\n"+i+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):s||d(e),!0},/**
		 * History.getInternetExplorerMajorVersion()
		 * Get's the major version of Internet Explorer
		 * @return {integer}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 * @author James Padolsey <https://gist.github.com/527683>
		 */
p.getInternetExplorerMajorVersion=function(){return p.getInternetExplorerMajorVersion.cached=void 0!==p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=a.createElement("div"),r=t.getElementsByTagName("i");(t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e")&&r[0];);return e>4&&e}()},/**
		 * History.isInternetExplorer()
		 * Are we using Internet Explorer?
		 * @return {boolean}
		 * @license Public Domain
		 * @author Benjamin Arthur Lupton <contact@balupton.com>
		 */
p.isInternetExplorer=function(){return p.isInternetExplorer.cached=void 0!==p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion())},p.options.html4Mode?p.emulated={pushState:!0,hashChange:!0}:p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!(/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)||/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent))),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in a)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},p.cloneObject=function(e){var t,r;return e?(t=c.stringify(e),r=c.parse(t)):r={},r},p.getRootUrl=function(){var e=a.location.protocol+"//"+(a.location.hostname||a.location.host);return a.location.port&&(e+=":"+a.location.port),e+="/"},p.getBaseHref=function(){var e=a.getElementsByTagName("base"),t=null,r="";return 1===e.length&&(t=e[0],r=t.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},p.getBaseUrl=function(){return p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl()},p.getPageUrl=function(){var e=p.getState(!1,!1),t=(e||{}).url||p.getLocationHref();return t.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,r){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){return p.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,r){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/"},p.getFullUrl=function(e,t){var r=e,a=e.substring(0,1);return t=void 0===t||t,/[a-z]+\:\/\//.test(e)||(r="/"===a?p.getRootUrl()+e.replace(/^\/+/,""):"#"===a?p.getPageUrl().replace(/#.*/,"")+e:"?"===a?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},p.getShortUrl=function(e){var t=e,r=p.getBaseUrl(),a=p.getRootUrl();return p.emulated.pushState&&(t=t.replace(r,"")),t=t.replace(a,"/"),p.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.getLocationHref=function(e){return e=e||a,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:-1==e.URL.indexOf("#")&&-1!=e.location.href.indexOf("#")?e.location.href:e.URL||e.location.href},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var r=p.getLastSavedState();return!r&&t&&(r=p.createStateObject()),e&&(r=p.cloneObject(r),r.url=r.cleanUrl||r.url),r},p.getIdByState=function(e){var t,r=p.extractId(e.url);if(!r)if(t=p.getStateString(e),void 0!==p.stateToId[t])r=p.stateToId[t];else if(void 0!==p.store.stateToId[t])r=p.store.stateToId[t];else{for(;;)if(r=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),void 0===p.idToState[r]&&void 0===p.store.idToState[r])break;p.stateToId[t]=r,p.idToState[r]=e}return r},p.normalizeState=function(e){var t,r;return e&&"object"==typeof e||(e={}),void 0!==e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(e.url?e.url:p.getLocationHref()),t.hash=p.getShortUrl(t.url),t.data=p.cloneObject(e.data),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,r=!p.isEmptyObject(t.data),(t.title||r)&&!0!==p.options.disableSuid&&(t.hash=p.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,r){var a={data:e,title:t,url:r};return a=p.normalizeState(a)},p.getStateById=function(e){/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
return e=String(e),p.idToState[e]||p.store.idToState[e]||void 0},p.getStateString=function(e){var t,r;return t=p.normalizeState(e),r={data:t.data,title:e.title,url:e.url},c.stringify(r)},p.getStateId=function(e){var t;return t=p.normalizeState(e),t.id},p.getHashByState=function(e){var t;return t=p.normalizeState(e),t.hash},p.extractId=function(e){var t,r;return r=-1!=e.indexOf("#")?e.split("#")[0]:e,t=/(.*)\&_suid=([0-9]+)$/.exec(r),t?t[1]||e:e,(t?String(t[2]||""):"")||!1},p.isTraditionalAnchor=function(e){return!/[\/\?\.]/.test(e)},p.extractState=function(e,t){var r,a,n=null;return t=t||!1,r=p.extractId(e),r&&(n=p.getStateById(r)),n||(a=p.getFullUrl(e),r=p.getIdByUrl(a)||!1,r&&(n=p.getStateById(r)),n||!t||p.isTraditionalAnchor(e)||(n=p.createStateObject(null,null,a))),n},p.getIdByUrl=function(e){return p.urlToId[e]||p.store.urlToId[e]||void 0},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||void 0},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||void 0},p.hasUrlDuplicate=function(e){var t;return t=p.extractState(e.url),t&&t.id!==e.id},p.storeState=function(e){return p.urlToId[e.url]=e.id,p.storedStates.push(p.cloneObject(e)),e},p.isLastSavedState=function(e){var t,r,a,n=!1;return p.savedStates.length&&(t=e.id,r=p.getLastSavedState(),a=r.id,n=t===a),n},p.saveState=function(e){return!p.isLastSavedState(e)&&(p.savedStates.push(p.cloneObject(e)),!0)},p.getStateByIndex=function(e){return void 0===e?p.savedStates[p.savedStates.length-1]:e<0?p.savedStates[p.savedStates.length+e]:p.savedStates[e]},p.getCurrentIndex=function(){return p.savedStates.length<1?0:p.savedStates.length-1},p.getHash=function(e){var t=p.getLocationHref(e);return p.getHashByUrl(t)},p.unescapeHash=function(e){var t=p.normalizeHash(e);return t=decodeURIComponent(t)},p.normalizeHash=function(e){return e.replace(/[^#]*#/,"").replace(/#.*/,"")},p.setHash=function(e,t){var r,n;return!1!==t&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1):(p.busy(!0),r=p.extractState(e,!0),r&&!p.emulated.pushState?p.pushState(r.data,r.title,r.url,!1):p.getHash()!==e&&(p.bugs.setHash?(n=p.getPageUrl(),p.pushState(null,null,n+"#"+e,!1)):a.location.hash=e),p)},p.escapeHash=function(t){var r=p.normalizeHash(t);return r=e.encodeURIComponent(r),p.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2");return t=p.unescapeHash(t)},p.setTitle=function(e){var t,r=e.title;r||(t=p.getStateByIndex(0))&&t.url===e.url&&(r=t.title||p.options.initialTitle);try{a.getElementsByTagName("title")[0].innerHTML=r.replace("<","&lt;").replace(">","&gt;").replace(" & "," &amp; ")}catch(e){}return a.title=r,p},p.queues=[],p.busy=function(e){if(void 0!==e?p.busy.flag=e:void 0===p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){s(p.busy.timeout);var t=function(){var e,r,a;if(!p.busy.flag)for(e=p.queues.length-1;e>=0;--e)r=p.queues[e],0!==r.length&&(a=r.shift(),p.fireQueueItem(a),p.busy.timeout=i(t,p.options.busyDelay))};p.busy.timeout=i(t,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),void 0!==t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(s(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=i(function(){return p.doubleCheckClear(),p.stateChanged||e(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t,r=p.extractState(p.getLocationHref());if(!p.isLastSavedState(r))return t=r,t||(t=p.createStateObject()),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return!1!==e&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),h.go(-1),!0)},p.forward=function(e){return!1!==e&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),h.go(1),!0)},p.go=function(e,t){var r;if(e>0)for(r=1;r<=e;++r)p.forward(t);else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.");for(r=-1;r>=e;--r)p.back(t)}return p},p.emulated.pushState){var f=function(){};p.pushState=p.pushState||f,p.replaceState=p.replaceState||f}else p.onPopState=function(t,r){var a,n,o=!1,i=!1;return p.doubleCheckComplete(),(a=p.getHash())?(n=p.extractState(a||p.getLocationHref(),!0),n?p.replaceState(n.data,n.title,n.url,!1):(p.Adapter.trigger(e,"anchorchange"),p.busy(!1)),p.expectedStateId=!1,!1):(o=p.Adapter.extractEventData("state",t,r)||!1,i=o?p.getStateById(o):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(p.getLocationHref()),i||(i=p.createStateObject(null,null,p.getLocationHref())),p.expectedStateId=!1,p.isLastSavedState(i)?(p.busy(!1),!1):(p.storeState(i),p.saveState(i),p.setTitle(i),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0))},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,r,a,n){if(p.getHashByUrl(a)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==n&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,r,a);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.pushState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,r,a,n){if(p.getHashByUrl(a)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if(!1!==n&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:n}),!1;p.busy(!0);var o=p.createStateObject(t,r,a);return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,h.replaceState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0};if(o){try{p.store=c.parse(o.getItem("History.store"))||{}}catch(e){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore();p.Adapter.bind(e,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(p.getLocationHref(),!0))),o&&(p.onUnload=function(){var e,t,r;try{e=c.parse(o.getItem("History.store"))||{}}catch(t){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{};for(t in p.idToState)p.idToState.hasOwnProperty(t)&&(e.idToState[t]=p.idToState[t]);for(t in p.urlToId)p.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=p.urlToId[t]);for(t in p.stateToId)p.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=p.stateToId[t]);p.store=e,p.normalizeStore(),r=c.stringify(e);try{o.setItem("History.store",r)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e;o.length&&(o.removeItem("History.store"),o.setItem("History.store",r))}},p.intervalList.push(u(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(u(p.safariStatePoll,p.options.safariPollInterval)),"Apple Computer, Inc."!==n.vendor&&"Mozilla"!==(n.appCodeName||"")||(p.Adapter.bind(e,"hashchange",function(){p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"hashchange")})))},p.options&&p.options.delayInit||p.init()}(window)}]);