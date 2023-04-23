goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13663){
var map__13664 = p__13663;
var map__13664__$1 = cljs.core.__destructure_map(map__13664);
var runtime = map__13664__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13664__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13891 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13891)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13676 = runtime;
var G__13677 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13891);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13676,G__13677) : shadow.remote.runtime.shared.process.call(null,G__13676,G__13677));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13679,res){
var map__13680 = p__13679;
var map__13680__$1 = cljs.core.__destructure_map(map__13680);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13680__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13680__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13683 = res;
var G__13683__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13683,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13683);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13683__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13683__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13690 = arguments.length;
switch (G__13690) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13700,msg,handlers,timeout_after_ms){
var map__13701 = p__13700;
var map__13701__$1 = cljs.core.__destructure_map(map__13701);
var runtime = map__13701__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13701__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___13906 = arguments.length;
var i__5770__auto___13908 = (0);
while(true){
if((i__5770__auto___13908 < len__5769__auto___13906)){
args__5775__auto__.push((arguments[i__5770__auto___13908]));

var G__13909 = (i__5770__auto___13908 + (1));
i__5770__auto___13908 = G__13909;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13720,ev,args){
var map__13722 = p__13720;
var map__13722__$1 = cljs.core.__destructure_map(map__13722);
var runtime = map__13722__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13722__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13726 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13729 = null;
var count__13730 = (0);
var i__13731 = (0);
while(true){
if((i__13731 < count__13730)){
var ext = chunk__13729.cljs$core$IIndexed$_nth$arity$2(null,i__13731);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13910 = seq__13726;
var G__13911 = chunk__13729;
var G__13912 = count__13730;
var G__13913 = (i__13731 + (1));
seq__13726 = G__13910;
chunk__13729 = G__13911;
count__13730 = G__13912;
i__13731 = G__13913;
continue;
} else {
var G__13915 = seq__13726;
var G__13916 = chunk__13729;
var G__13917 = count__13730;
var G__13918 = (i__13731 + (1));
seq__13726 = G__13915;
chunk__13729 = G__13916;
count__13730 = G__13917;
i__13731 = G__13918;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13726);
if(temp__5804__auto__){
var seq__13726__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13726__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13726__$1);
var G__13919 = cljs.core.chunk_rest(seq__13726__$1);
var G__13920 = c__5568__auto__;
var G__13921 = cljs.core.count(c__5568__auto__);
var G__13922 = (0);
seq__13726 = G__13919;
chunk__13729 = G__13920;
count__13730 = G__13921;
i__13731 = G__13922;
continue;
} else {
var ext = cljs.core.first(seq__13726__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__13926 = cljs.core.next(seq__13726__$1);
var G__13927 = null;
var G__13928 = (0);
var G__13929 = (0);
seq__13726 = G__13926;
chunk__13729 = G__13927;
count__13730 = G__13928;
i__13731 = G__13929;
continue;
} else {
var G__13932 = cljs.core.next(seq__13726__$1);
var G__13933 = null;
var G__13934 = (0);
var G__13935 = (0);
seq__13726 = G__13932;
chunk__13729 = G__13933;
count__13730 = G__13934;
i__13731 = G__13935;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13713){
var G__13714 = cljs.core.first(seq13713);
var seq13713__$1 = cljs.core.next(seq13713);
var G__13715 = cljs.core.first(seq13713__$1);
var seq13713__$2 = cljs.core.next(seq13713__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13714,G__13715,seq13713__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13748,p__13749){
var map__13750 = p__13748;
var map__13750__$1 = cljs.core.__destructure_map(map__13750);
var runtime = map__13750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13752 = p__13749;
var map__13752__$1 = cljs.core.__destructure_map(map__13752);
var msg = map__13752__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13752__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__13753 = cljs.core.deref(state_ref);
var map__13753__$1 = cljs.core.__destructure_map(map__13753);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13753__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13753__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13768,msg){
var map__13771 = p__13768;
var map__13771__$1 = cljs.core.__destructure_map(map__13771);
var runtime = map__13771__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13771__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13786,key,p__13787){
var map__13788 = p__13786;
var map__13788__$1 = cljs.core.__destructure_map(map__13788);
var state = map__13788__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13788__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13789 = p__13787;
var map__13789__$1 = cljs.core.__destructure_map(map__13789);
var spec = map__13789__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13789__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13795,key,spec){
var map__13796 = p__13795;
var map__13796__$1 = cljs.core.__destructure_map(map__13796);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13796__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13797_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13797_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13798_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13798_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13799_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13799_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13800_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13800_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13801_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13801_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13824,key){
var map__13825 = p__13824;
var map__13825__$1 = cljs.core.__destructure_map(map__13825);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13825__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13830,msg){
var map__13831 = p__13830;
var map__13831__$1 = cljs.core.__destructure_map(map__13831);
var runtime = map__13831__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13831__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13834,p__13835){
var map__13836 = p__13834;
var map__13836__$1 = cljs.core.__destructure_map(map__13836);
var runtime = map__13836__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13836__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13837 = p__13835;
var map__13837__$1 = cljs.core.__destructure_map(map__13837);
var msg = map__13837__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13837__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13854 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13857 = null;
var count__13858 = (0);
var i__13859 = (0);
while(true){
if((i__13859 < count__13858)){
var map__13880 = chunk__13857.cljs$core$IIndexed$_nth$arity$2(null,i__13859);
var map__13880__$1 = cljs.core.__destructure_map(map__13880);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13880__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13984 = seq__13854;
var G__13985 = chunk__13857;
var G__13986 = count__13858;
var G__13987 = (i__13859 + (1));
seq__13854 = G__13984;
chunk__13857 = G__13985;
count__13858 = G__13986;
i__13859 = G__13987;
continue;
} else {
var G__13988 = seq__13854;
var G__13989 = chunk__13857;
var G__13990 = count__13858;
var G__13991 = (i__13859 + (1));
seq__13854 = G__13988;
chunk__13857 = G__13989;
count__13858 = G__13990;
i__13859 = G__13991;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13854);
if(temp__5804__auto__){
var seq__13854__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13854__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13854__$1);
var G__13992 = cljs.core.chunk_rest(seq__13854__$1);
var G__13993 = c__5568__auto__;
var G__13994 = cljs.core.count(c__5568__auto__);
var G__13995 = (0);
seq__13854 = G__13992;
chunk__13857 = G__13993;
count__13858 = G__13994;
i__13859 = G__13995;
continue;
} else {
var map__13884 = cljs.core.first(seq__13854__$1);
var map__13884__$1 = cljs.core.__destructure_map(map__13884);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13884__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__13996 = cljs.core.next(seq__13854__$1);
var G__13997 = null;
var G__13998 = (0);
var G__13999 = (0);
seq__13854 = G__13996;
chunk__13857 = G__13997;
count__13858 = G__13998;
i__13859 = G__13999;
continue;
} else {
var G__14000 = cljs.core.next(seq__13854__$1);
var G__14001 = null;
var G__14002 = (0);
var G__14003 = (0);
seq__13854 = G__14000;
chunk__13857 = G__14001;
count__13858 = G__14002;
i__13859 = G__14003;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
