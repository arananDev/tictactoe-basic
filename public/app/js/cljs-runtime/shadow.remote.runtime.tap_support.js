goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19602,p__19603){
var map__19604 = p__19602;
var map__19604__$1 = cljs.core.__destructure_map(map__19604);
var svc = map__19604__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19604__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19605 = p__19603;
var map__19605__$1 = cljs.core.__destructure_map(map__19605);
var msg = map__19605__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19605__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19605__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19611,p__19612){
var map__19613 = p__19611;
var map__19613__$1 = cljs.core.__destructure_map(map__19613);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19613__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19614 = p__19612;
var map__19614__$1 = cljs.core.__destructure_map(map__19614);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19614__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19615,p__19616){
var map__19617 = p__19615;
var map__19617__$1 = cljs.core.__destructure_map(map__19617);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19617__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19617__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19618 = p__19616;
var map__19618__$1 = cljs.core.__destructure_map(map__19618);
var msg = map__19618__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19618__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19621,tid){
var map__19622 = p__19621;
var map__19622__$1 = cljs.core.__destructure_map(map__19622);
var svc = map__19622__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19622__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__19628 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__19629 = null;
var count__19630 = (0);
var i__19631 = (0);
while(true){
if((i__19631 < count__19630)){
var vec__19643 = chunk__19629.cljs$core$IIndexed$_nth$arity$2(null,i__19631);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19643,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19669 = seq__19628;
var G__19670 = chunk__19629;
var G__19671 = count__19630;
var G__19672 = (i__19631 + (1));
seq__19628 = G__19669;
chunk__19629 = G__19670;
count__19630 = G__19671;
i__19631 = G__19672;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19628);
if(temp__5804__auto__){
var seq__19628__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19628__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19628__$1);
var G__19674 = cljs.core.chunk_rest(seq__19628__$1);
var G__19675 = c__5568__auto__;
var G__19676 = cljs.core.count(c__5568__auto__);
var G__19677 = (0);
seq__19628 = G__19674;
chunk__19629 = G__19675;
count__19630 = G__19676;
i__19631 = G__19677;
continue;
} else {
var vec__19656 = cljs.core.first(seq__19628__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19656,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__19678 = cljs.core.next(seq__19628__$1);
var G__19679 = null;
var G__19680 = (0);
var G__19681 = (0);
seq__19628 = G__19678;
chunk__19629 = G__19679;
count__19630 = G__19680;
i__19631 = G__19681;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19623_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19623_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19624_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19624_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__19625_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__19625_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__19626_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__19626_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__19667){
var map__19668 = p__19667;
var map__19668__$1 = cljs.core.__destructure_map(map__19668);
var svc = map__19668__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19668__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19668__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
