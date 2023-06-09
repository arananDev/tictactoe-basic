goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18021){
var map__18022 = p__18021;
var map__18022__$1 = cljs.core.__destructure_map(map__18022);
var m = map__18022__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18022__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18030_18329 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18031_18330 = null;
var count__18032_18331 = (0);
var i__18033_18332 = (0);
while(true){
if((i__18033_18332 < count__18032_18331)){
var f_18333 = chunk__18031_18330.cljs$core$IIndexed$_nth$arity$2(null,i__18033_18332);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18333], 0));


var G__18336 = seq__18030_18329;
var G__18337 = chunk__18031_18330;
var G__18338 = count__18032_18331;
var G__18339 = (i__18033_18332 + (1));
seq__18030_18329 = G__18336;
chunk__18031_18330 = G__18337;
count__18032_18331 = G__18338;
i__18033_18332 = G__18339;
continue;
} else {
var temp__5804__auto___18342 = cljs.core.seq(seq__18030_18329);
if(temp__5804__auto___18342){
var seq__18030_18343__$1 = temp__5804__auto___18342;
if(cljs.core.chunked_seq_QMARK_(seq__18030_18343__$1)){
var c__5568__auto___18344 = cljs.core.chunk_first(seq__18030_18343__$1);
var G__18345 = cljs.core.chunk_rest(seq__18030_18343__$1);
var G__18346 = c__5568__auto___18344;
var G__18347 = cljs.core.count(c__5568__auto___18344);
var G__18348 = (0);
seq__18030_18329 = G__18345;
chunk__18031_18330 = G__18346;
count__18032_18331 = G__18347;
i__18033_18332 = G__18348;
continue;
} else {
var f_18349 = cljs.core.first(seq__18030_18343__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18349], 0));


var G__18350 = cljs.core.next(seq__18030_18343__$1);
var G__18351 = null;
var G__18352 = (0);
var G__18353 = (0);
seq__18030_18329 = G__18350;
chunk__18031_18330 = G__18351;
count__18032_18331 = G__18352;
i__18033_18332 = G__18353;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18354 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18354], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18354)))?cljs.core.second(arglists_18354):arglists_18354)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18057_18357 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18058_18358 = null;
var count__18059_18359 = (0);
var i__18060_18360 = (0);
while(true){
if((i__18060_18360 < count__18059_18359)){
var vec__18081_18361 = chunk__18058_18358.cljs$core$IIndexed$_nth$arity$2(null,i__18060_18360);
var name_18362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18081_18361,(0),null);
var map__18084_18363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18081_18361,(1),null);
var map__18084_18364__$1 = cljs.core.__destructure_map(map__18084_18363);
var doc_18365 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084_18364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18084_18364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18362], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18366], 0));

if(cljs.core.truth_(doc_18365)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18365], 0));
} else {
}


var G__18367 = seq__18057_18357;
var G__18368 = chunk__18058_18358;
var G__18369 = count__18059_18359;
var G__18370 = (i__18060_18360 + (1));
seq__18057_18357 = G__18367;
chunk__18058_18358 = G__18368;
count__18059_18359 = G__18369;
i__18060_18360 = G__18370;
continue;
} else {
var temp__5804__auto___18371 = cljs.core.seq(seq__18057_18357);
if(temp__5804__auto___18371){
var seq__18057_18372__$1 = temp__5804__auto___18371;
if(cljs.core.chunked_seq_QMARK_(seq__18057_18372__$1)){
var c__5568__auto___18377 = cljs.core.chunk_first(seq__18057_18372__$1);
var G__18378 = cljs.core.chunk_rest(seq__18057_18372__$1);
var G__18379 = c__5568__auto___18377;
var G__18380 = cljs.core.count(c__5568__auto___18377);
var G__18381 = (0);
seq__18057_18357 = G__18378;
chunk__18058_18358 = G__18379;
count__18059_18359 = G__18380;
i__18060_18360 = G__18381;
continue;
} else {
var vec__18086_18382 = cljs.core.first(seq__18057_18372__$1);
var name_18383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18086_18382,(0),null);
var map__18089_18384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18086_18382,(1),null);
var map__18089_18385__$1 = cljs.core.__destructure_map(map__18089_18384);
var doc_18386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18089_18385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18089_18385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18383], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18387], 0));

if(cljs.core.truth_(doc_18386)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18386], 0));
} else {
}


var G__18389 = cljs.core.next(seq__18057_18372__$1);
var G__18390 = null;
var G__18391 = (0);
var G__18392 = (0);
seq__18057_18357 = G__18389;
chunk__18058_18358 = G__18390;
count__18059_18359 = G__18391;
i__18060_18360 = G__18392;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18094 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18095 = null;
var count__18096 = (0);
var i__18097 = (0);
while(true){
if((i__18097 < count__18096)){
var role = chunk__18095.cljs$core$IIndexed$_nth$arity$2(null,i__18097);
var temp__5804__auto___18393__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18393__$1)){
var spec_18394 = temp__5804__auto___18393__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18394)], 0));
} else {
}


var G__18395 = seq__18094;
var G__18396 = chunk__18095;
var G__18397 = count__18096;
var G__18398 = (i__18097 + (1));
seq__18094 = G__18395;
chunk__18095 = G__18396;
count__18096 = G__18397;
i__18097 = G__18398;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18094);
if(temp__5804__auto____$1){
var seq__18094__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18094__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18094__$1);
var G__18403 = cljs.core.chunk_rest(seq__18094__$1);
var G__18404 = c__5568__auto__;
var G__18405 = cljs.core.count(c__5568__auto__);
var G__18406 = (0);
seq__18094 = G__18403;
chunk__18095 = G__18404;
count__18096 = G__18405;
i__18097 = G__18406;
continue;
} else {
var role = cljs.core.first(seq__18094__$1);
var temp__5804__auto___18408__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18408__$2)){
var spec_18409 = temp__5804__auto___18408__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18409)], 0));
} else {
}


var G__18411 = cljs.core.next(seq__18094__$1);
var G__18412 = null;
var G__18413 = (0);
var G__18414 = (0);
seq__18094 = G__18411;
chunk__18095 = G__18412;
count__18096 = G__18413;
i__18097 = G__18414;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18418 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__18419 = cljs.core.ex_cause(t);
via = G__18418;
t = G__18419;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18142 = datafied_throwable;
var map__18142__$1 = cljs.core.__destructure_map(map__18142);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18142__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18142__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18143 = cljs.core.last(via);
var map__18143__$1 = cljs.core.__destructure_map(map__18143);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18143__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18144 = data;
var map__18144__$1 = cljs.core.__destructure_map(map__18144);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18144__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18145 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18145__$1 = cljs.core.__destructure_map(map__18145);
var top_data = map__18145__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18145__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18154 = phase;
var G__18154__$1 = (((G__18154 instanceof cljs.core.Keyword))?G__18154.fqn:null);
switch (G__18154__$1) {
case "read-source":
var map__18159 = data;
var map__18159__$1 = cljs.core.__destructure_map(map__18159);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18159__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18163 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18163__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18163,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18163);
var G__18163__$2 = (cljs.core.truth_((function (){var fexpr__18175 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18175.cljs$core$IFn$_invoke$arity$1 ? fexpr__18175.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18175.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18163__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18163__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18163__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18163__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18176 = top_data;
var G__18176__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18176,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18176);
var G__18176__$2 = (cljs.core.truth_((function (){var fexpr__18183 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18183.cljs$core$IFn$_invoke$arity$1 ? fexpr__18183.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18183.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18176__$1);
var G__18176__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18176__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18176__$2);
var G__18176__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18176__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18176__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18176__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18176__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18205 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18205,(3),null);
var G__18215 = top_data;
var G__18215__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18215,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18215);
var G__18215__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18215__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18215__$1);
var G__18215__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18215__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18215__$2);
var G__18215__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18215__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18215__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18215__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18215__$4;
}

break;
case "execution":
var vec__18225 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18225,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18126_SHARP_){
var or__5045__auto__ = (p1__18126_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__18242 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18242.cljs$core$IFn$_invoke$arity$1 ? fexpr__18242.cljs$core$IFn$_invoke$arity$1(p1__18126_SHARP_) : fexpr__18242.call(null,p1__18126_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__18252 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18252__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18252,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18252);
var G__18252__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18252__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18252__$1);
var G__18252__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18252__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18252__$2);
var G__18252__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18252__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18252__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18252__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18252__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18154__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18267){
var map__18268 = p__18267;
var map__18268__$1 = cljs.core.__destructure_map(map__18268);
var triage_data = map__18268__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18268__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18275 = phase;
var G__18275__$1 = (((G__18275 instanceof cljs.core.Keyword))?G__18275.fqn:null);
switch (G__18275__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18276 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18277 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18278 = loc;
var G__18279 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18281_18478 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18282_18479 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18283_18480 = true;
var _STAR_print_fn_STAR__temp_val__18284_18481 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18283_18480);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18284_18481);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18264_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18264_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18282_18479);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18281_18478);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18276,G__18277,G__18278,G__18279) : format.call(null,G__18276,G__18277,G__18278,G__18279));

break;
case "macroexpansion":
var G__18286 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18287 = cause_type;
var G__18288 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18289 = loc;
var G__18290 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18286,G__18287,G__18288,G__18289,G__18290) : format.call(null,G__18286,G__18287,G__18288,G__18289,G__18290));

break;
case "compile-syntax-check":
var G__18292 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18293 = cause_type;
var G__18294 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18295 = loc;
var G__18296 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18292,G__18293,G__18294,G__18295,G__18296) : format.call(null,G__18292,G__18293,G__18294,G__18295,G__18296));

break;
case "compilation":
var G__18297 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18298 = cause_type;
var G__18299 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18300 = loc;
var G__18301 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18297,G__18298,G__18299,G__18300,G__18301) : format.call(null,G__18297,G__18298,G__18299,G__18300,G__18301));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18302 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18303 = symbol;
var G__18304 = loc;
var G__18305 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18310_18491 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18311_18492 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18312_18493 = true;
var _STAR_print_fn_STAR__temp_val__18313_18494 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18312_18493);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18313_18494);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18266_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18266_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18311_18492);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18310_18491);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18302,G__18303,G__18304,G__18305) : format.call(null,G__18302,G__18303,G__18304,G__18305));
} else {
var G__18316 = "Execution error%s at %s(%s).\n%s\n";
var G__18317 = cause_type;
var G__18318 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18319 = loc;
var G__18320 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18316,G__18317,G__18318,G__18319,G__18320) : format.call(null,G__18316,G__18317,G__18318,G__18319,G__18320));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18275__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
