goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18830 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18830(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18832 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18832(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17092 = coll;
var G__17093 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17092,G__17093) : shadow.dom.lazy_native_coll_seq.call(null,G__17092,G__17093));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17128 = arguments.length;
switch (G__17128) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17146 = arguments.length;
switch (G__17146) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17169 = arguments.length;
switch (G__17169) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17194 = arguments.length;
switch (G__17194) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17215 = arguments.length;
switch (G__17215) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17244 = arguments.length;
switch (G__17244) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17256){if((e17256 instanceof Object)){
var e = e17256;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17256;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17273 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17274 = null;
var count__17275 = (0);
var i__17276 = (0);
while(true){
if((i__17276 < count__17275)){
var el = chunk__17274.cljs$core$IIndexed$_nth$arity$2(null,i__17276);
var handler_18873__$1 = ((function (seq__17273,chunk__17274,count__17275,i__17276,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17273,chunk__17274,count__17275,i__17276,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18873__$1);


var G__18875 = seq__17273;
var G__18876 = chunk__17274;
var G__18877 = count__17275;
var G__18878 = (i__17276 + (1));
seq__17273 = G__18875;
chunk__17274 = G__18876;
count__17275 = G__18877;
i__17276 = G__18878;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17273);
if(temp__5804__auto__){
var seq__17273__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17273__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17273__$1);
var G__18879 = cljs.core.chunk_rest(seq__17273__$1);
var G__18880 = c__5568__auto__;
var G__18881 = cljs.core.count(c__5568__auto__);
var G__18882 = (0);
seq__17273 = G__18879;
chunk__17274 = G__18880;
count__17275 = G__18881;
i__17276 = G__18882;
continue;
} else {
var el = cljs.core.first(seq__17273__$1);
var handler_18884__$1 = ((function (seq__17273,chunk__17274,count__17275,i__17276,el,seq__17273__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17273,chunk__17274,count__17275,i__17276,el,seq__17273__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18884__$1);


var G__18885 = cljs.core.next(seq__17273__$1);
var G__18886 = null;
var G__18887 = (0);
var G__18888 = (0);
seq__17273 = G__18885;
chunk__17274 = G__18886;
count__17275 = G__18887;
i__17276 = G__18888;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17306 = arguments.length;
switch (G__17306) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17331 = cljs.core.seq(events);
var chunk__17332 = null;
var count__17333 = (0);
var i__17334 = (0);
while(true){
if((i__17334 < count__17333)){
var vec__17372 = chunk__17332.cljs$core$IIndexed$_nth$arity$2(null,i__17334);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17372,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17372,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18890 = seq__17331;
var G__18891 = chunk__17332;
var G__18892 = count__17333;
var G__18893 = (i__17334 + (1));
seq__17331 = G__18890;
chunk__17332 = G__18891;
count__17333 = G__18892;
i__17334 = G__18893;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17331);
if(temp__5804__auto__){
var seq__17331__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17331__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17331__$1);
var G__18894 = cljs.core.chunk_rest(seq__17331__$1);
var G__18895 = c__5568__auto__;
var G__18896 = cljs.core.count(c__5568__auto__);
var G__18897 = (0);
seq__17331 = G__18894;
chunk__17332 = G__18895;
count__17333 = G__18896;
i__17334 = G__18897;
continue;
} else {
var vec__17395 = cljs.core.first(seq__17331__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17395,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18898 = cljs.core.next(seq__17331__$1);
var G__18899 = null;
var G__18900 = (0);
var G__18901 = (0);
seq__17331 = G__18898;
chunk__17332 = G__18899;
count__17333 = G__18900;
i__17334 = G__18901;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17413 = cljs.core.seq(styles);
var chunk__17414 = null;
var count__17415 = (0);
var i__17416 = (0);
while(true){
if((i__17416 < count__17415)){
var vec__17439 = chunk__17414.cljs$core$IIndexed$_nth$arity$2(null,i__17416);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17439,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18902 = seq__17413;
var G__18903 = chunk__17414;
var G__18904 = count__17415;
var G__18905 = (i__17416 + (1));
seq__17413 = G__18902;
chunk__17414 = G__18903;
count__17415 = G__18904;
i__17416 = G__18905;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17413);
if(temp__5804__auto__){
var seq__17413__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17413__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17413__$1);
var G__18906 = cljs.core.chunk_rest(seq__17413__$1);
var G__18907 = c__5568__auto__;
var G__18908 = cljs.core.count(c__5568__auto__);
var G__18909 = (0);
seq__17413 = G__18906;
chunk__17414 = G__18907;
count__17415 = G__18908;
i__17416 = G__18909;
continue;
} else {
var vec__17448 = cljs.core.first(seq__17413__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17448,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17448,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18911 = cljs.core.next(seq__17413__$1);
var G__18912 = null;
var G__18913 = (0);
var G__18914 = (0);
seq__17413 = G__18911;
chunk__17414 = G__18912;
count__17415 = G__18913;
i__17416 = G__18914;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17455_18915 = key;
var G__17455_18916__$1 = (((G__17455_18915 instanceof cljs.core.Keyword))?G__17455_18915.fqn:null);
switch (G__17455_18916__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18918 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18918,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18918,"aria-");
}
})())){
el.setAttribute(ks_18918,value);
} else {
(el[ks_18918] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17521){
var map__17523 = p__17521;
var map__17523__$1 = cljs.core.__destructure_map(map__17523);
var props = map__17523__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17523__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17528 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17528,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17528,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17528,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17534 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17534,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17534;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17556 = arguments.length;
switch (G__17556) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17608){
var vec__17614 = p__17608;
var seq__17615 = cljs.core.seq(vec__17614);
var first__17616 = cljs.core.first(seq__17615);
var seq__17615__$1 = cljs.core.next(seq__17615);
var nn = first__17616;
var first__17616__$1 = cljs.core.first(seq__17615__$1);
var seq__17615__$2 = cljs.core.next(seq__17615__$1);
var np = first__17616__$1;
var nc = seq__17615__$2;
var node = vec__17614;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17622 = nn;
var G__17623 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17622,G__17623) : create_fn.call(null,G__17622,G__17623));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17627 = nn;
var G__17628 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17627,G__17628) : create_fn.call(null,G__17627,G__17628));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17632 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17632,(1),null);
var seq__17635_18921 = cljs.core.seq(node_children);
var chunk__17636_18922 = null;
var count__17637_18923 = (0);
var i__17638_18924 = (0);
while(true){
if((i__17638_18924 < count__17637_18923)){
var child_struct_18925 = chunk__17636_18922.cljs$core$IIndexed$_nth$arity$2(null,i__17638_18924);
var children_18926 = shadow.dom.dom_node(child_struct_18925);
if(cljs.core.seq_QMARK_(children_18926)){
var seq__17675_18927 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18926));
var chunk__17677_18928 = null;
var count__17678_18929 = (0);
var i__17679_18930 = (0);
while(true){
if((i__17679_18930 < count__17678_18929)){
var child_18931 = chunk__17677_18928.cljs$core$IIndexed$_nth$arity$2(null,i__17679_18930);
if(cljs.core.truth_(child_18931)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18931);


var G__18932 = seq__17675_18927;
var G__18933 = chunk__17677_18928;
var G__18934 = count__17678_18929;
var G__18935 = (i__17679_18930 + (1));
seq__17675_18927 = G__18932;
chunk__17677_18928 = G__18933;
count__17678_18929 = G__18934;
i__17679_18930 = G__18935;
continue;
} else {
var G__18936 = seq__17675_18927;
var G__18937 = chunk__17677_18928;
var G__18938 = count__17678_18929;
var G__18939 = (i__17679_18930 + (1));
seq__17675_18927 = G__18936;
chunk__17677_18928 = G__18937;
count__17678_18929 = G__18938;
i__17679_18930 = G__18939;
continue;
}
} else {
var temp__5804__auto___18940 = cljs.core.seq(seq__17675_18927);
if(temp__5804__auto___18940){
var seq__17675_18941__$1 = temp__5804__auto___18940;
if(cljs.core.chunked_seq_QMARK_(seq__17675_18941__$1)){
var c__5568__auto___18942 = cljs.core.chunk_first(seq__17675_18941__$1);
var G__18943 = cljs.core.chunk_rest(seq__17675_18941__$1);
var G__18944 = c__5568__auto___18942;
var G__18945 = cljs.core.count(c__5568__auto___18942);
var G__18946 = (0);
seq__17675_18927 = G__18943;
chunk__17677_18928 = G__18944;
count__17678_18929 = G__18945;
i__17679_18930 = G__18946;
continue;
} else {
var child_18947 = cljs.core.first(seq__17675_18941__$1);
if(cljs.core.truth_(child_18947)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18947);


var G__18948 = cljs.core.next(seq__17675_18941__$1);
var G__18949 = null;
var G__18950 = (0);
var G__18951 = (0);
seq__17675_18927 = G__18948;
chunk__17677_18928 = G__18949;
count__17678_18929 = G__18950;
i__17679_18930 = G__18951;
continue;
} else {
var G__18952 = cljs.core.next(seq__17675_18941__$1);
var G__18953 = null;
var G__18954 = (0);
var G__18955 = (0);
seq__17675_18927 = G__18952;
chunk__17677_18928 = G__18953;
count__17678_18929 = G__18954;
i__17679_18930 = G__18955;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18926);
}


var G__18956 = seq__17635_18921;
var G__18957 = chunk__17636_18922;
var G__18958 = count__17637_18923;
var G__18959 = (i__17638_18924 + (1));
seq__17635_18921 = G__18956;
chunk__17636_18922 = G__18957;
count__17637_18923 = G__18958;
i__17638_18924 = G__18959;
continue;
} else {
var temp__5804__auto___18961 = cljs.core.seq(seq__17635_18921);
if(temp__5804__auto___18961){
var seq__17635_18963__$1 = temp__5804__auto___18961;
if(cljs.core.chunked_seq_QMARK_(seq__17635_18963__$1)){
var c__5568__auto___18964 = cljs.core.chunk_first(seq__17635_18963__$1);
var G__18965 = cljs.core.chunk_rest(seq__17635_18963__$1);
var G__18966 = c__5568__auto___18964;
var G__18967 = cljs.core.count(c__5568__auto___18964);
var G__18968 = (0);
seq__17635_18921 = G__18965;
chunk__17636_18922 = G__18966;
count__17637_18923 = G__18967;
i__17638_18924 = G__18968;
continue;
} else {
var child_struct_18970 = cljs.core.first(seq__17635_18963__$1);
var children_18971 = shadow.dom.dom_node(child_struct_18970);
if(cljs.core.seq_QMARK_(children_18971)){
var seq__17699_18972 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18971));
var chunk__17701_18973 = null;
var count__17702_18974 = (0);
var i__17703_18975 = (0);
while(true){
if((i__17703_18975 < count__17702_18974)){
var child_18977 = chunk__17701_18973.cljs$core$IIndexed$_nth$arity$2(null,i__17703_18975);
if(cljs.core.truth_(child_18977)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18977);


var G__18978 = seq__17699_18972;
var G__18979 = chunk__17701_18973;
var G__18980 = count__17702_18974;
var G__18981 = (i__17703_18975 + (1));
seq__17699_18972 = G__18978;
chunk__17701_18973 = G__18979;
count__17702_18974 = G__18980;
i__17703_18975 = G__18981;
continue;
} else {
var G__18982 = seq__17699_18972;
var G__18983 = chunk__17701_18973;
var G__18984 = count__17702_18974;
var G__18985 = (i__17703_18975 + (1));
seq__17699_18972 = G__18982;
chunk__17701_18973 = G__18983;
count__17702_18974 = G__18984;
i__17703_18975 = G__18985;
continue;
}
} else {
var temp__5804__auto___18986__$1 = cljs.core.seq(seq__17699_18972);
if(temp__5804__auto___18986__$1){
var seq__17699_18987__$1 = temp__5804__auto___18986__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17699_18987__$1)){
var c__5568__auto___18988 = cljs.core.chunk_first(seq__17699_18987__$1);
var G__18989 = cljs.core.chunk_rest(seq__17699_18987__$1);
var G__18990 = c__5568__auto___18988;
var G__18991 = cljs.core.count(c__5568__auto___18988);
var G__18992 = (0);
seq__17699_18972 = G__18989;
chunk__17701_18973 = G__18990;
count__17702_18974 = G__18991;
i__17703_18975 = G__18992;
continue;
} else {
var child_18993 = cljs.core.first(seq__17699_18987__$1);
if(cljs.core.truth_(child_18993)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18993);


var G__18994 = cljs.core.next(seq__17699_18987__$1);
var G__18995 = null;
var G__18996 = (0);
var G__18997 = (0);
seq__17699_18972 = G__18994;
chunk__17701_18973 = G__18995;
count__17702_18974 = G__18996;
i__17703_18975 = G__18997;
continue;
} else {
var G__18998 = cljs.core.next(seq__17699_18987__$1);
var G__18999 = null;
var G__19000 = (0);
var G__19001 = (0);
seq__17699_18972 = G__18998;
chunk__17701_18973 = G__18999;
count__17702_18974 = G__19000;
i__17703_18975 = G__19001;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18971);
}


var G__19002 = cljs.core.next(seq__17635_18963__$1);
var G__19003 = null;
var G__19004 = (0);
var G__19005 = (0);
seq__17635_18921 = G__19002;
chunk__17636_18922 = G__19003;
count__17637_18923 = G__19004;
i__17638_18924 = G__19005;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17733 = cljs.core.seq(node);
var chunk__17734 = null;
var count__17735 = (0);
var i__17736 = (0);
while(true){
if((i__17736 < count__17735)){
var n = chunk__17734.cljs$core$IIndexed$_nth$arity$2(null,i__17736);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19007 = seq__17733;
var G__19008 = chunk__17734;
var G__19009 = count__17735;
var G__19010 = (i__17736 + (1));
seq__17733 = G__19007;
chunk__17734 = G__19008;
count__17735 = G__19009;
i__17736 = G__19010;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17733);
if(temp__5804__auto__){
var seq__17733__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17733__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17733__$1);
var G__19012 = cljs.core.chunk_rest(seq__17733__$1);
var G__19013 = c__5568__auto__;
var G__19014 = cljs.core.count(c__5568__auto__);
var G__19015 = (0);
seq__17733 = G__19012;
chunk__17734 = G__19013;
count__17735 = G__19014;
i__17736 = G__19015;
continue;
} else {
var n = cljs.core.first(seq__17733__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19017 = cljs.core.next(seq__17733__$1);
var G__19018 = null;
var G__19019 = (0);
var G__19020 = (0);
seq__17733 = G__19017;
chunk__17734 = G__19018;
count__17735 = G__19019;
i__17736 = G__19020;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17751 = arguments.length;
switch (G__17751) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17758 = arguments.length;
switch (G__17758) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17782 = arguments.length;
switch (G__17782) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19030 = arguments.length;
var i__5770__auto___19031 = (0);
while(true){
if((i__5770__auto___19031 < len__5769__auto___19030)){
args__5775__auto__.push((arguments[i__5770__auto___19031]));

var G__19032 = (i__5770__auto___19031 + (1));
i__5770__auto___19031 = G__19032;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17802_19033 = cljs.core.seq(nodes);
var chunk__17803_19034 = null;
var count__17804_19035 = (0);
var i__17805_19036 = (0);
while(true){
if((i__17805_19036 < count__17804_19035)){
var node_19037 = chunk__17803_19034.cljs$core$IIndexed$_nth$arity$2(null,i__17805_19036);
fragment.appendChild(shadow.dom._to_dom(node_19037));


var G__19038 = seq__17802_19033;
var G__19039 = chunk__17803_19034;
var G__19040 = count__17804_19035;
var G__19041 = (i__17805_19036 + (1));
seq__17802_19033 = G__19038;
chunk__17803_19034 = G__19039;
count__17804_19035 = G__19040;
i__17805_19036 = G__19041;
continue;
} else {
var temp__5804__auto___19043 = cljs.core.seq(seq__17802_19033);
if(temp__5804__auto___19043){
var seq__17802_19044__$1 = temp__5804__auto___19043;
if(cljs.core.chunked_seq_QMARK_(seq__17802_19044__$1)){
var c__5568__auto___19045 = cljs.core.chunk_first(seq__17802_19044__$1);
var G__19046 = cljs.core.chunk_rest(seq__17802_19044__$1);
var G__19047 = c__5568__auto___19045;
var G__19048 = cljs.core.count(c__5568__auto___19045);
var G__19049 = (0);
seq__17802_19033 = G__19046;
chunk__17803_19034 = G__19047;
count__17804_19035 = G__19048;
i__17805_19036 = G__19049;
continue;
} else {
var node_19051 = cljs.core.first(seq__17802_19044__$1);
fragment.appendChild(shadow.dom._to_dom(node_19051));


var G__19053 = cljs.core.next(seq__17802_19044__$1);
var G__19054 = null;
var G__19055 = (0);
var G__19056 = (0);
seq__17802_19033 = G__19053;
chunk__17803_19034 = G__19054;
count__17804_19035 = G__19055;
i__17805_19036 = G__19056;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17797){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17797));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17845_19057 = cljs.core.seq(scripts);
var chunk__17846_19058 = null;
var count__17847_19059 = (0);
var i__17848_19060 = (0);
while(true){
if((i__17848_19060 < count__17847_19059)){
var vec__17873_19061 = chunk__17846_19058.cljs$core$IIndexed$_nth$arity$2(null,i__17848_19060);
var script_tag_19062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17873_19061,(0),null);
var script_body_19063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17873_19061,(1),null);
eval(script_body_19063);


var G__19064 = seq__17845_19057;
var G__19065 = chunk__17846_19058;
var G__19066 = count__17847_19059;
var G__19067 = (i__17848_19060 + (1));
seq__17845_19057 = G__19064;
chunk__17846_19058 = G__19065;
count__17847_19059 = G__19066;
i__17848_19060 = G__19067;
continue;
} else {
var temp__5804__auto___19068 = cljs.core.seq(seq__17845_19057);
if(temp__5804__auto___19068){
var seq__17845_19069__$1 = temp__5804__auto___19068;
if(cljs.core.chunked_seq_QMARK_(seq__17845_19069__$1)){
var c__5568__auto___19070 = cljs.core.chunk_first(seq__17845_19069__$1);
var G__19071 = cljs.core.chunk_rest(seq__17845_19069__$1);
var G__19072 = c__5568__auto___19070;
var G__19073 = cljs.core.count(c__5568__auto___19070);
var G__19074 = (0);
seq__17845_19057 = G__19071;
chunk__17846_19058 = G__19072;
count__17847_19059 = G__19073;
i__17848_19060 = G__19074;
continue;
} else {
var vec__17881_19075 = cljs.core.first(seq__17845_19069__$1);
var script_tag_19076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881_19075,(0),null);
var script_body_19077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17881_19075,(1),null);
eval(script_body_19077);


var G__19078 = cljs.core.next(seq__17845_19069__$1);
var G__19079 = null;
var G__19080 = (0);
var G__19081 = (0);
seq__17845_19057 = G__19078;
chunk__17846_19058 = G__19079;
count__17847_19059 = G__19080;
i__17848_19060 = G__19081;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17885){
var vec__17886 = p__17885;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17886,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17886,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17903 = arguments.length;
switch (G__17903) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17948 = cljs.core.seq(style_keys);
var chunk__17950 = null;
var count__17951 = (0);
var i__17952 = (0);
while(true){
if((i__17952 < count__17951)){
var it = chunk__17950.cljs$core$IIndexed$_nth$arity$2(null,i__17952);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19095 = seq__17948;
var G__19096 = chunk__17950;
var G__19097 = count__17951;
var G__19098 = (i__17952 + (1));
seq__17948 = G__19095;
chunk__17950 = G__19096;
count__17951 = G__19097;
i__17952 = G__19098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17948);
if(temp__5804__auto__){
var seq__17948__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17948__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17948__$1);
var G__19099 = cljs.core.chunk_rest(seq__17948__$1);
var G__19100 = c__5568__auto__;
var G__19101 = cljs.core.count(c__5568__auto__);
var G__19102 = (0);
seq__17948 = G__19099;
chunk__17950 = G__19100;
count__17951 = G__19101;
i__17952 = G__19102;
continue;
} else {
var it = cljs.core.first(seq__17948__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19104 = cljs.core.next(seq__17948__$1);
var G__19105 = null;
var G__19106 = (0);
var G__19107 = (0);
seq__17948 = G__19104;
chunk__17950 = G__19105;
count__17951 = G__19106;
i__17952 = G__19107;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17983,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17992 = k17983;
var G__17992__$1 = (((G__17992 instanceof cljs.core.Keyword))?G__17992.fqn:null);
switch (G__17992__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17983,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17993){
var vec__17994 = p__17993;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17994,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17982){
var self__ = this;
var G__17982__$1 = this;
return (new cljs.core.RecordIter((0),G__17982__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17985,other17986){
var self__ = this;
var this17985__$1 = this;
return (((!((other17986 == null)))) && ((((this17985__$1.constructor === other17986.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17985__$1.x,other17986.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17985__$1.y,other17986.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17985__$1.__extmap,other17986.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17983){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18013 = k17983;
var G__18013__$1 = (((G__18013 instanceof cljs.core.Keyword))?G__18013.fqn:null);
switch (G__18013__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17983);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17982){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18014 = cljs.core.keyword_identical_QMARK_;
var expr__18015 = k__5352__auto__;
if(cljs.core.truth_((pred__18014.cljs$core$IFn$_invoke$arity$2 ? pred__18014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18015) : pred__18014.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18015)))){
return (new shadow.dom.Coordinate(G__17982,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18014.cljs$core$IFn$_invoke$arity$2 ? pred__18014.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18015) : pred__18014.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18015)))){
return (new shadow.dom.Coordinate(self__.x,G__17982,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17982),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17982){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17982,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17988){
var extmap__5385__auto__ = (function (){var G__18112 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17988,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17988)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18112);
} else {
return G__18112;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17988),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17988),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18138,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18554 = k18138;
var G__18554__$1 = (((G__18554 instanceof cljs.core.Keyword))?G__18554.fqn:null);
switch (G__18554__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18138,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18555){
var vec__18556 = p__18555;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18556,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18556,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18137){
var self__ = this;
var G__18137__$1 = this;
return (new cljs.core.RecordIter((0),G__18137__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18139,other18140){
var self__ = this;
var this18139__$1 = this;
return (((!((other18140 == null)))) && ((((this18139__$1.constructor === other18140.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18139__$1.w,other18140.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18139__$1.h,other18140.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18139__$1.__extmap,other18140.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18138){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18577 = k18138;
var G__18577__$1 = (((G__18577 instanceof cljs.core.Keyword))?G__18577.fqn:null);
switch (G__18577__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18138);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18137){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18582 = cljs.core.keyword_identical_QMARK_;
var expr__18583 = k__5352__auto__;
if(cljs.core.truth_((pred__18582.cljs$core$IFn$_invoke$arity$2 ? pred__18582.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18583) : pred__18582.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18583)))){
return (new shadow.dom.Size(G__18137,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18582.cljs$core$IFn$_invoke$arity$2 ? pred__18582.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18583) : pred__18582.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18583)))){
return (new shadow.dom.Size(self__.w,G__18137,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18137),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18137){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18137,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18150){
var extmap__5385__auto__ = (function (){var G__18590 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18150,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18150)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18590);
} else {
return G__18590;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18150),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18150),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19158 = (i + (1));
var G__19159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19158;
ret = G__19159;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18604){
var vec__18605 = p__18604;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18605,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18605,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18613 = arguments.length;
switch (G__18613) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19165 = ps;
var G__19166 = (i + (1));
el__$1 = G__19165;
i = G__19166;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18643 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18643,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18646_19170 = cljs.core.seq(props);
var chunk__18647_19171 = null;
var count__18648_19172 = (0);
var i__18649_19173 = (0);
while(true){
if((i__18649_19173 < count__18648_19172)){
var vec__18660_19174 = chunk__18647_19171.cljs$core$IIndexed$_nth$arity$2(null,i__18649_19173);
var k_19175 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660_19174,(0),null);
var v_19176 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18660_19174,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19175);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19175),v_19176);


var G__19180 = seq__18646_19170;
var G__19181 = chunk__18647_19171;
var G__19182 = count__18648_19172;
var G__19183 = (i__18649_19173 + (1));
seq__18646_19170 = G__19180;
chunk__18647_19171 = G__19181;
count__18648_19172 = G__19182;
i__18649_19173 = G__19183;
continue;
} else {
var temp__5804__auto___19187 = cljs.core.seq(seq__18646_19170);
if(temp__5804__auto___19187){
var seq__18646_19188__$1 = temp__5804__auto___19187;
if(cljs.core.chunked_seq_QMARK_(seq__18646_19188__$1)){
var c__5568__auto___19189 = cljs.core.chunk_first(seq__18646_19188__$1);
var G__19190 = cljs.core.chunk_rest(seq__18646_19188__$1);
var G__19191 = c__5568__auto___19189;
var G__19192 = cljs.core.count(c__5568__auto___19189);
var G__19193 = (0);
seq__18646_19170 = G__19190;
chunk__18647_19171 = G__19191;
count__18648_19172 = G__19192;
i__18649_19173 = G__19193;
continue;
} else {
var vec__18664_19194 = cljs.core.first(seq__18646_19188__$1);
var k_19195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664_19194,(0),null);
var v_19196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18664_19194,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19195);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19195),v_19196);


var G__19198 = cljs.core.next(seq__18646_19188__$1);
var G__19199 = null;
var G__19200 = (0);
var G__19201 = (0);
seq__18646_19170 = G__19198;
chunk__18647_19171 = G__19199;
count__18648_19172 = G__19200;
i__18649_19173 = G__19201;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18671 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(1),null);
var seq__18674_19202 = cljs.core.seq(node_children);
var chunk__18676_19203 = null;
var count__18677_19204 = (0);
var i__18678_19205 = (0);
while(true){
if((i__18678_19205 < count__18677_19204)){
var child_struct_19206 = chunk__18676_19203.cljs$core$IIndexed$_nth$arity$2(null,i__18678_19205);
if((!((child_struct_19206 == null)))){
if(typeof child_struct_19206 === 'string'){
var text_19207 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19207),child_struct_19206].join(''));
} else {
var children_19208 = shadow.dom.svg_node(child_struct_19206);
if(cljs.core.seq_QMARK_(children_19208)){
var seq__18698_19209 = cljs.core.seq(children_19208);
var chunk__18700_19210 = null;
var count__18701_19211 = (0);
var i__18702_19212 = (0);
while(true){
if((i__18702_19212 < count__18701_19211)){
var child_19213 = chunk__18700_19210.cljs$core$IIndexed$_nth$arity$2(null,i__18702_19212);
if(cljs.core.truth_(child_19213)){
node.appendChild(child_19213);


var G__19214 = seq__18698_19209;
var G__19215 = chunk__18700_19210;
var G__19216 = count__18701_19211;
var G__19217 = (i__18702_19212 + (1));
seq__18698_19209 = G__19214;
chunk__18700_19210 = G__19215;
count__18701_19211 = G__19216;
i__18702_19212 = G__19217;
continue;
} else {
var G__19218 = seq__18698_19209;
var G__19219 = chunk__18700_19210;
var G__19220 = count__18701_19211;
var G__19221 = (i__18702_19212 + (1));
seq__18698_19209 = G__19218;
chunk__18700_19210 = G__19219;
count__18701_19211 = G__19220;
i__18702_19212 = G__19221;
continue;
}
} else {
var temp__5804__auto___19222 = cljs.core.seq(seq__18698_19209);
if(temp__5804__auto___19222){
var seq__18698_19223__$1 = temp__5804__auto___19222;
if(cljs.core.chunked_seq_QMARK_(seq__18698_19223__$1)){
var c__5568__auto___19224 = cljs.core.chunk_first(seq__18698_19223__$1);
var G__19225 = cljs.core.chunk_rest(seq__18698_19223__$1);
var G__19226 = c__5568__auto___19224;
var G__19227 = cljs.core.count(c__5568__auto___19224);
var G__19228 = (0);
seq__18698_19209 = G__19225;
chunk__18700_19210 = G__19226;
count__18701_19211 = G__19227;
i__18702_19212 = G__19228;
continue;
} else {
var child_19229 = cljs.core.first(seq__18698_19223__$1);
if(cljs.core.truth_(child_19229)){
node.appendChild(child_19229);


var G__19230 = cljs.core.next(seq__18698_19223__$1);
var G__19231 = null;
var G__19232 = (0);
var G__19233 = (0);
seq__18698_19209 = G__19230;
chunk__18700_19210 = G__19231;
count__18701_19211 = G__19232;
i__18702_19212 = G__19233;
continue;
} else {
var G__19234 = cljs.core.next(seq__18698_19223__$1);
var G__19235 = null;
var G__19236 = (0);
var G__19237 = (0);
seq__18698_19209 = G__19234;
chunk__18700_19210 = G__19235;
count__18701_19211 = G__19236;
i__18702_19212 = G__19237;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19208);
}
}


var G__19238 = seq__18674_19202;
var G__19239 = chunk__18676_19203;
var G__19240 = count__18677_19204;
var G__19241 = (i__18678_19205 + (1));
seq__18674_19202 = G__19238;
chunk__18676_19203 = G__19239;
count__18677_19204 = G__19240;
i__18678_19205 = G__19241;
continue;
} else {
var G__19242 = seq__18674_19202;
var G__19243 = chunk__18676_19203;
var G__19244 = count__18677_19204;
var G__19245 = (i__18678_19205 + (1));
seq__18674_19202 = G__19242;
chunk__18676_19203 = G__19243;
count__18677_19204 = G__19244;
i__18678_19205 = G__19245;
continue;
}
} else {
var temp__5804__auto___19246 = cljs.core.seq(seq__18674_19202);
if(temp__5804__auto___19246){
var seq__18674_19247__$1 = temp__5804__auto___19246;
if(cljs.core.chunked_seq_QMARK_(seq__18674_19247__$1)){
var c__5568__auto___19251 = cljs.core.chunk_first(seq__18674_19247__$1);
var G__19252 = cljs.core.chunk_rest(seq__18674_19247__$1);
var G__19253 = c__5568__auto___19251;
var G__19254 = cljs.core.count(c__5568__auto___19251);
var G__19255 = (0);
seq__18674_19202 = G__19252;
chunk__18676_19203 = G__19253;
count__18677_19204 = G__19254;
i__18678_19205 = G__19255;
continue;
} else {
var child_struct_19259 = cljs.core.first(seq__18674_19247__$1);
if((!((child_struct_19259 == null)))){
if(typeof child_struct_19259 === 'string'){
var text_19260 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19260),child_struct_19259].join(''));
} else {
var children_19261 = shadow.dom.svg_node(child_struct_19259);
if(cljs.core.seq_QMARK_(children_19261)){
var seq__18721_19262 = cljs.core.seq(children_19261);
var chunk__18723_19263 = null;
var count__18724_19264 = (0);
var i__18725_19265 = (0);
while(true){
if((i__18725_19265 < count__18724_19264)){
var child_19266 = chunk__18723_19263.cljs$core$IIndexed$_nth$arity$2(null,i__18725_19265);
if(cljs.core.truth_(child_19266)){
node.appendChild(child_19266);


var G__19268 = seq__18721_19262;
var G__19269 = chunk__18723_19263;
var G__19270 = count__18724_19264;
var G__19271 = (i__18725_19265 + (1));
seq__18721_19262 = G__19268;
chunk__18723_19263 = G__19269;
count__18724_19264 = G__19270;
i__18725_19265 = G__19271;
continue;
} else {
var G__19272 = seq__18721_19262;
var G__19273 = chunk__18723_19263;
var G__19274 = count__18724_19264;
var G__19275 = (i__18725_19265 + (1));
seq__18721_19262 = G__19272;
chunk__18723_19263 = G__19273;
count__18724_19264 = G__19274;
i__18725_19265 = G__19275;
continue;
}
} else {
var temp__5804__auto___19276__$1 = cljs.core.seq(seq__18721_19262);
if(temp__5804__auto___19276__$1){
var seq__18721_19277__$1 = temp__5804__auto___19276__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18721_19277__$1)){
var c__5568__auto___19278 = cljs.core.chunk_first(seq__18721_19277__$1);
var G__19279 = cljs.core.chunk_rest(seq__18721_19277__$1);
var G__19280 = c__5568__auto___19278;
var G__19281 = cljs.core.count(c__5568__auto___19278);
var G__19282 = (0);
seq__18721_19262 = G__19279;
chunk__18723_19263 = G__19280;
count__18724_19264 = G__19281;
i__18725_19265 = G__19282;
continue;
} else {
var child_19284 = cljs.core.first(seq__18721_19277__$1);
if(cljs.core.truth_(child_19284)){
node.appendChild(child_19284);


var G__19285 = cljs.core.next(seq__18721_19277__$1);
var G__19286 = null;
var G__19287 = (0);
var G__19288 = (0);
seq__18721_19262 = G__19285;
chunk__18723_19263 = G__19286;
count__18724_19264 = G__19287;
i__18725_19265 = G__19288;
continue;
} else {
var G__19289 = cljs.core.next(seq__18721_19277__$1);
var G__19290 = null;
var G__19291 = (0);
var G__19292 = (0);
seq__18721_19262 = G__19289;
chunk__18723_19263 = G__19290;
count__18724_19264 = G__19291;
i__18725_19265 = G__19292;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19261);
}
}


var G__19293 = cljs.core.next(seq__18674_19247__$1);
var G__19294 = null;
var G__19295 = (0);
var G__19296 = (0);
seq__18674_19202 = G__19293;
chunk__18676_19203 = G__19294;
count__18677_19204 = G__19295;
i__18678_19205 = G__19296;
continue;
} else {
var G__19297 = cljs.core.next(seq__18674_19247__$1);
var G__19298 = null;
var G__19299 = (0);
var G__19300 = (0);
seq__18674_19202 = G__19297;
chunk__18676_19203 = G__19298;
count__18677_19204 = G__19299;
i__18678_19205 = G__19300;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19383 = arguments.length;
var i__5770__auto___19384 = (0);
while(true){
if((i__5770__auto___19384 < len__5769__auto___19383)){
args__5775__auto__.push((arguments[i__5770__auto___19384]));

var G__19385 = (i__5770__auto___19384 + (1));
i__5770__auto___19384 = G__19385;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18754){
var G__18755 = cljs.core.first(seq18754);
var seq18754__$1 = cljs.core.next(seq18754);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18755,seq18754__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18765 = arguments.length;
switch (G__18765) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13518__auto___19391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_18788){
var state_val_18789 = (state_18788[(1)]);
if((state_val_18789 === (1))){
var state_18788__$1 = state_18788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18788__$1,(2),once_or_cleanup);
} else {
if((state_val_18789 === (2))){
var inst_18784 = (state_18788[(2)]);
var inst_18786 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18788__$1 = (function (){var statearr_18794 = state_18788;
(statearr_18794[(7)] = inst_18784);

return statearr_18794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18788__$1,inst_18786);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13313__auto__ = null;
var shadow$dom$state_machine__13313__auto____0 = (function (){
var statearr_18797 = [null,null,null,null,null,null,null,null];
(statearr_18797[(0)] = shadow$dom$state_machine__13313__auto__);

(statearr_18797[(1)] = (1));

return statearr_18797;
});
var shadow$dom$state_machine__13313__auto____1 = (function (state_18788){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_18788);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e18800){var ex__13316__auto__ = e18800;
var statearr_18803_19394 = state_18788;
(statearr_18803_19394[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_18788[(4)]))){
var statearr_18806_19395 = state_18788;
(statearr_18806_19395[(1)] = cljs.core.first((state_18788[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19396 = state_18788;
state_18788 = G__19396;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
shadow$dom$state_machine__13313__auto__ = function(state_18788){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13313__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13313__auto____1.call(this,state_18788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13313__auto____0;
shadow$dom$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13313__auto____1;
return shadow$dom$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_18811 = f__13519__auto__();
(statearr_18811[(6)] = c__13518__auto___19391);

return statearr_18811;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
