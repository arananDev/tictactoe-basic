goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13617 = (function (f,blockable,meta13618){
this.f = f;
this.blockable = blockable;
this.meta13618 = meta13618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13619,meta13618__$1){
var self__ = this;
var _13619__$1 = this;
return (new cljs.core.async.t_cljs$core$async13617(self__.f,self__.blockable,meta13618__$1));
}));

(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13619){
var self__ = this;
var _13619__$1 = this;
return self__.meta13618;
}));

(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13618","meta13618",-633280627,null)], null);
}));

(cljs.core.async.t_cljs$core$async13617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13617");

(cljs.core.async.t_cljs$core$async13617.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13617.
 */
cljs.core.async.__GT_t_cljs$core$async13617 = (function cljs$core$async$__GT_t_cljs$core$async13617(f,blockable,meta13618){
return (new cljs.core.async.t_cljs$core$async13617(f,blockable,meta13618));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13616 = arguments.length;
switch (G__13616) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13617(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13630 = arguments.length;
switch (G__13630) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13635 = arguments.length;
switch (G__13635) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13644 = arguments.length;
switch (G__13644) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17119 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17119) : fn1.call(null,val_17119));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17119) : fn1.call(null,val_17119));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13673 = arguments.length;
switch (G__13673) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17123 = n;
var x_17124 = (0);
while(true){
if((x_17124 < n__5636__auto___17123)){
(a[x_17124] = x_17124);

var G__17125 = (x_17124 + (1));
x_17124 = G__17125;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13703 = (function (flag,meta13704){
this.flag = flag;
this.meta13704 = meta13704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13705,meta13704__$1){
var self__ = this;
var _13705__$1 = this;
return (new cljs.core.async.t_cljs$core$async13703(self__.flag,meta13704__$1));
}));

(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13705){
var self__ = this;
var _13705__$1 = this;
return self__.meta13704;
}));

(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13703.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13704","meta13704",-2076599140,null)], null);
}));

(cljs.core.async.t_cljs$core$async13703.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13703");

(cljs.core.async.t_cljs$core$async13703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13703");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13703.
 */
cljs.core.async.__GT_t_cljs$core$async13703 = (function cljs$core$async$__GT_t_cljs$core$async13703(flag,meta13704){
return (new cljs.core.async.t_cljs$core$async13703(flag,meta13704));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13703(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13735 = (function (flag,cb,meta13736){
this.flag = flag;
this.cb = cb;
this.meta13736 = meta13736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13737,meta13736__$1){
var self__ = this;
var _13737__$1 = this;
return (new cljs.core.async.t_cljs$core$async13735(self__.flag,self__.cb,meta13736__$1));
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13737){
var self__ = this;
var _13737__$1 = this;
return self__.meta13736;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13735.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13736","meta13736",1710898726,null)], null);
}));

(cljs.core.async.t_cljs$core$async13735.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13735");

(cljs.core.async.t_cljs$core$async13735.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13735");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13735.
 */
cljs.core.async.__GT_t_cljs$core$async13735 = (function cljs$core$async$__GT_t_cljs$core$async13735(flag,cb,meta13736){
return (new cljs.core.async.t_cljs$core$async13735(flag,cb,meta13736));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13735(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13741_SHARP_){
var G__13757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13741_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13757) : fret.call(null,G__13757));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13742_SHARP_){
var G__13760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13742_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13760) : fret.call(null,G__13760));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17129 = (i + (1));
i = G__17129;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17140 = arguments.length;
var i__5770__auto___17141 = (0);
while(true){
if((i__5770__auto___17141 < len__5769__auto___17140)){
args__5775__auto__.push((arguments[i__5770__auto___17141]));

var G__17142 = (i__5770__auto___17141 + (1));
i__5770__auto___17141 = G__17142;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13783){
var map__13784 = p__13783;
var map__13784__$1 = cljs.core.__destructure_map(map__13784);
var opts = map__13784__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13775){
var G__13776 = cljs.core.first(seq13775);
var seq13775__$1 = cljs.core.next(seq13775);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13776,seq13775__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13806 = arguments.length;
switch (G__13806) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13518__auto___17147 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_13881){
var state_val_13882 = (state_13881[(1)]);
if((state_val_13882 === (7))){
var inst_13872 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
var statearr_13892_17160 = state_13881__$1;
(statearr_13892_17160[(2)] = inst_13872);

(statearr_13892_17160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (1))){
var state_13881__$1 = state_13881;
var statearr_13896_17161 = state_13881__$1;
(statearr_13896_17161[(2)] = null);

(statearr_13896_17161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (4))){
var inst_13846 = (state_13881[(7)]);
var inst_13846__$1 = (state_13881[(2)]);
var inst_13847 = (inst_13846__$1 == null);
var state_13881__$1 = (function (){var statearr_13900 = state_13881;
(statearr_13900[(7)] = inst_13846__$1);

return statearr_13900;
})();
if(cljs.core.truth_(inst_13847)){
var statearr_13905_17162 = state_13881__$1;
(statearr_13905_17162[(1)] = (5));

} else {
var statearr_13907_17163 = state_13881__$1;
(statearr_13907_17163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (13))){
var state_13881__$1 = state_13881;
var statearr_13937_17164 = state_13881__$1;
(statearr_13937_17164[(2)] = null);

(statearr_13937_17164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (6))){
var inst_13846 = (state_13881[(7)]);
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13881__$1,(11),to,inst_13846);
} else {
if((state_val_13882 === (3))){
var inst_13876 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13881__$1,inst_13876);
} else {
if((state_val_13882 === (12))){
var state_13881__$1 = state_13881;
var statearr_13943_17165 = state_13881__$1;
(statearr_13943_17165[(2)] = null);

(statearr_13943_17165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (2))){
var state_13881__$1 = state_13881;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13881__$1,(4),from);
} else {
if((state_val_13882 === (11))){
var inst_13863 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
if(cljs.core.truth_(inst_13863)){
var statearr_13945_17167 = state_13881__$1;
(statearr_13945_17167[(1)] = (12));

} else {
var statearr_13946_17168 = state_13881__$1;
(statearr_13946_17168[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (9))){
var state_13881__$1 = state_13881;
var statearr_13949_17170 = state_13881__$1;
(statearr_13949_17170[(2)] = null);

(statearr_13949_17170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (5))){
var state_13881__$1 = state_13881;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13956_17171 = state_13881__$1;
(statearr_13956_17171[(1)] = (8));

} else {
var statearr_13957_17172 = state_13881__$1;
(statearr_13957_17172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (14))){
var inst_13870 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
var statearr_13961_17173 = state_13881__$1;
(statearr_13961_17173[(2)] = inst_13870);

(statearr_13961_17173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (10))){
var inst_13853 = (state_13881[(2)]);
var state_13881__$1 = state_13881;
var statearr_13962_17178 = state_13881__$1;
(statearr_13962_17178[(2)] = inst_13853);

(statearr_13962_17178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13882 === (8))){
var inst_13850 = cljs.core.async.close_BANG_(to);
var state_13881__$1 = state_13881;
var statearr_13963_17179 = state_13881__$1;
(statearr_13963_17179[(2)] = inst_13850);

(statearr_13963_17179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_13969 = [null,null,null,null,null,null,null,null];
(statearr_13969[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_13969[(1)] = (1));

return statearr_13969;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_13881){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_13881);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e13973){var ex__13316__auto__ = e13973;
var statearr_13975_17184 = state_13881;
(statearr_13975_17184[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_13881[(4)]))){
var statearr_13976_17191 = state_13881;
(statearr_13976_17191[(1)] = cljs.core.first((state_13881[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17192 = state_13881;
state_13881 = G__17192;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_13881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_13881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_13983 = f__13519__auto__();
(statearr_13983[(6)] = c__13518__auto___17147);

return statearr_13983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14004){
var vec__14005 = p__14004;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005,(1),null);
var job = vec__14005;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13518__auto___17196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14015){
var state_val_14016 = (state_14015[(1)]);
if((state_val_14016 === (1))){
var state_14015__$1 = state_14015;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14015__$1,(2),res,v);
} else {
if((state_val_14016 === (2))){
var inst_14012 = (state_14015[(2)]);
var inst_14013 = cljs.core.async.close_BANG_(res);
var state_14015__$1 = (function (){var statearr_14019 = state_14015;
(statearr_14019[(7)] = inst_14012);

return statearr_14019;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14015__$1,inst_14013);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_14023 = [null,null,null,null,null,null,null,null];
(statearr_14023[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__);

(statearr_14023[(1)] = (1));

return statearr_14023;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1 = (function (state_14015){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14015);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14026){var ex__13316__auto__ = e14026;
var statearr_14027_17200 = state_14015;
(statearr_14027_17200[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14015[(4)]))){
var statearr_14028_17201 = state_14015;
(statearr_14028_17201[(1)] = cljs.core.first((state_14015[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17202 = state_14015;
state_14015 = G__17202;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = function(state_14015){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1.call(this,state_14015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14029 = f__13519__auto__();
(statearr_14029[(6)] = c__13518__auto___17196);

return statearr_14029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14031){
var vec__14032 = p__14031;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14032,(1),null);
var job = vec__14032;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17206 = n;
var __17207 = (0);
while(true){
if((__17207 < n__5636__auto___17206)){
var G__14041_17208 = type;
var G__14041_17209__$1 = (((G__14041_17208 instanceof cljs.core.Keyword))?G__14041_17208.fqn:null);
switch (G__14041_17209__$1) {
case "compute":
var c__13518__auto___17211 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17207,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = ((function (__17207,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function (state_14055){
var state_val_14056 = (state_14055[(1)]);
if((state_val_14056 === (1))){
var state_14055__$1 = state_14055;
var statearr_14062_17213 = state_14055__$1;
(statearr_14062_17213[(2)] = null);

(statearr_14062_17213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (2))){
var state_14055__$1 = state_14055;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14055__$1,(4),jobs);
} else {
if((state_val_14056 === (3))){
var inst_14053 = (state_14055[(2)]);
var state_14055__$1 = state_14055;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14055__$1,inst_14053);
} else {
if((state_val_14056 === (4))){
var inst_14044 = (state_14055[(2)]);
var inst_14045 = process__$1(inst_14044);
var state_14055__$1 = state_14055;
if(cljs.core.truth_(inst_14045)){
var statearr_14071_17216 = state_14055__$1;
(statearr_14071_17216[(1)] = (5));

} else {
var statearr_14072_17219 = state_14055__$1;
(statearr_14072_17219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (5))){
var state_14055__$1 = state_14055;
var statearr_14074_17220 = state_14055__$1;
(statearr_14074_17220[(2)] = null);

(statearr_14074_17220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (6))){
var state_14055__$1 = state_14055;
var statearr_14079_17225 = state_14055__$1;
(statearr_14079_17225[(2)] = null);

(statearr_14079_17225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14056 === (7))){
var inst_14051 = (state_14055[(2)]);
var state_14055__$1 = state_14055;
var statearr_14080_17228 = state_14055__$1;
(statearr_14080_17228[(2)] = inst_14051);

(statearr_14080_17228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17207,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
;
return ((function (__17207,switch__13312__auto__,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_14084 = [null,null,null,null,null,null,null];
(statearr_14084[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__);

(statearr_14084[(1)] = (1));

return statearr_14084;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1 = (function (state_14055){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14055);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14085){var ex__13316__auto__ = e14085;
var statearr_14086_17229 = state_14055;
(statearr_14086_17229[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14055[(4)]))){
var statearr_14087_17230 = state_14055;
(statearr_14087_17230[(1)] = cljs.core.first((state_14055[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17231 = state_14055;
state_14055 = G__17231;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = function(state_14055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1.call(this,state_14055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__;
})()
;})(__17207,switch__13312__auto__,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
})();
var state__13520__auto__ = (function (){var statearr_14088 = f__13519__auto__();
(statearr_14088[(6)] = c__13518__auto___17211);

return statearr_14088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
});})(__17207,c__13518__auto___17211,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
);


break;
case "async":
var c__13518__auto___17232 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17207,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = ((function (__17207,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function (state_14101){
var state_val_14102 = (state_14101[(1)]);
if((state_val_14102 === (1))){
var state_14101__$1 = state_14101;
var statearr_14104_17234 = state_14101__$1;
(statearr_14104_17234[(2)] = null);

(statearr_14104_17234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (2))){
var state_14101__$1 = state_14101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14101__$1,(4),jobs);
} else {
if((state_val_14102 === (3))){
var inst_14099 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14101__$1,inst_14099);
} else {
if((state_val_14102 === (4))){
var inst_14091 = (state_14101[(2)]);
var inst_14092 = async(inst_14091);
var state_14101__$1 = state_14101;
if(cljs.core.truth_(inst_14092)){
var statearr_14126_17238 = state_14101__$1;
(statearr_14126_17238[(1)] = (5));

} else {
var statearr_14127_17239 = state_14101__$1;
(statearr_14127_17239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (5))){
var state_14101__$1 = state_14101;
var statearr_14128_17241 = state_14101__$1;
(statearr_14128_17241[(2)] = null);

(statearr_14128_17241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (6))){
var state_14101__$1 = state_14101;
var statearr_14129_17243 = state_14101__$1;
(statearr_14129_17243[(2)] = null);

(statearr_14129_17243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14102 === (7))){
var inst_14097 = (state_14101[(2)]);
var state_14101__$1 = state_14101;
var statearr_14131_17245 = state_14101__$1;
(statearr_14131_17245[(2)] = inst_14097);

(statearr_14131_17245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17207,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
;
return ((function (__17207,switch__13312__auto__,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_14135 = [null,null,null,null,null,null,null];
(statearr_14135[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__);

(statearr_14135[(1)] = (1));

return statearr_14135;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1 = (function (state_14101){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14101);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14136){var ex__13316__auto__ = e14136;
var statearr_14137_17246 = state_14101;
(statearr_14137_17246[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14101[(4)]))){
var statearr_14138_17247 = state_14101;
(statearr_14138_17247[(1)] = cljs.core.first((state_14101[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17248 = state_14101;
state_14101 = G__17248;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = function(state_14101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1.call(this,state_14101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__;
})()
;})(__17207,switch__13312__auto__,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
})();
var state__13520__auto__ = (function (){var statearr_14139 = f__13519__auto__();
(statearr_14139[(6)] = c__13518__auto___17232);

return statearr_14139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
});})(__17207,c__13518__auto___17232,G__14041_17208,G__14041_17209__$1,n__5636__auto___17206,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14041_17209__$1)].join('')));

}

var G__17249 = (__17207 + (1));
__17207 = G__17249;
continue;
} else {
}
break;
}

var c__13518__auto___17250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14178){
var state_val_14179 = (state_14178[(1)]);
if((state_val_14179 === (7))){
var inst_14168 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
var statearr_14186_17251 = state_14178__$1;
(statearr_14186_17251[(2)] = inst_14168);

(statearr_14186_17251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (1))){
var state_14178__$1 = state_14178;
var statearr_14187_17252 = state_14178__$1;
(statearr_14187_17252[(2)] = null);

(statearr_14187_17252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (4))){
var inst_14142 = (state_14178[(7)]);
var inst_14142__$1 = (state_14178[(2)]);
var inst_14143 = (inst_14142__$1 == null);
var state_14178__$1 = (function (){var statearr_14189 = state_14178;
(statearr_14189[(7)] = inst_14142__$1);

return statearr_14189;
})();
if(cljs.core.truth_(inst_14143)){
var statearr_14190_17253 = state_14178__$1;
(statearr_14190_17253[(1)] = (5));

} else {
var statearr_14191_17254 = state_14178__$1;
(statearr_14191_17254[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (6))){
var inst_14142 = (state_14178[(7)]);
var inst_14147 = (state_14178[(8)]);
var inst_14147__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14152 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14155 = [inst_14142,inst_14147__$1];
var inst_14156 = (new cljs.core.PersistentVector(null,2,(5),inst_14152,inst_14155,null));
var state_14178__$1 = (function (){var statearr_14197 = state_14178;
(statearr_14197[(8)] = inst_14147__$1);

return statearr_14197;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14178__$1,(8),jobs,inst_14156);
} else {
if((state_val_14179 === (3))){
var inst_14170 = (state_14178[(2)]);
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14178__$1,inst_14170);
} else {
if((state_val_14179 === (2))){
var state_14178__$1 = state_14178;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14178__$1,(4),from);
} else {
if((state_val_14179 === (9))){
var inst_14164 = (state_14178[(2)]);
var state_14178__$1 = (function (){var statearr_14198 = state_14178;
(statearr_14198[(9)] = inst_14164);

return statearr_14198;
})();
var statearr_14200_17257 = state_14178__$1;
(statearr_14200_17257[(2)] = null);

(statearr_14200_17257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (5))){
var inst_14145 = cljs.core.async.close_BANG_(jobs);
var state_14178__$1 = state_14178;
var statearr_14201_17265 = state_14178__$1;
(statearr_14201_17265[(2)] = inst_14145);

(statearr_14201_17265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14179 === (8))){
var inst_14147 = (state_14178[(8)]);
var inst_14160 = (state_14178[(2)]);
var state_14178__$1 = (function (){var statearr_14203 = state_14178;
(statearr_14203[(10)] = inst_14160);

return statearr_14203;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14178__$1,(9),results,inst_14147);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_14220 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__);

(statearr_14220[(1)] = (1));

return statearr_14220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1 = (function (state_14178){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14178);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14226){var ex__13316__auto__ = e14226;
var statearr_14227_17266 = state_14178;
(statearr_14227_17266[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14178[(4)]))){
var statearr_14228_17267 = state_14178;
(statearr_14228_17267[(1)] = cljs.core.first((state_14178[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17269 = state_14178;
state_14178 = G__17269;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = function(state_14178){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1.call(this,state_14178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14233 = f__13519__auto__();
(statearr_14233[(6)] = c__13518__auto___17250);

return statearr_14233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


var c__13518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14305){
var state_val_14306 = (state_14305[(1)]);
if((state_val_14306 === (7))){
var inst_14294 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14319_17270 = state_14305__$1;
(statearr_14319_17270[(2)] = inst_14294);

(statearr_14319_17270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (20))){
var state_14305__$1 = state_14305;
var statearr_14320_17271 = state_14305__$1;
(statearr_14320_17271[(2)] = null);

(statearr_14320_17271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (1))){
var state_14305__$1 = state_14305;
var statearr_14322_17272 = state_14305__$1;
(statearr_14322_17272[(2)] = null);

(statearr_14322_17272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (4))){
var inst_14248 = (state_14305[(7)]);
var inst_14248__$1 = (state_14305[(2)]);
var inst_14253 = (inst_14248__$1 == null);
var state_14305__$1 = (function (){var statearr_14324 = state_14305;
(statearr_14324[(7)] = inst_14248__$1);

return statearr_14324;
})();
if(cljs.core.truth_(inst_14253)){
var statearr_14325_17277 = state_14305__$1;
(statearr_14325_17277[(1)] = (5));

} else {
var statearr_14326_17278 = state_14305__$1;
(statearr_14326_17278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (15))){
var inst_14270 = (state_14305[(8)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14305__$1,(18),to,inst_14270);
} else {
if((state_val_14306 === (21))){
var inst_14288 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14328_17279 = state_14305__$1;
(statearr_14328_17279[(2)] = inst_14288);

(statearr_14328_17279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (13))){
var inst_14290 = (state_14305[(2)]);
var state_14305__$1 = (function (){var statearr_14333 = state_14305;
(statearr_14333[(9)] = inst_14290);

return statearr_14333;
})();
var statearr_14334_17282 = state_14305__$1;
(statearr_14334_17282[(2)] = null);

(statearr_14334_17282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (6))){
var inst_14248 = (state_14305[(7)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14305__$1,(11),inst_14248);
} else {
if((state_val_14306 === (17))){
var inst_14279 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
if(cljs.core.truth_(inst_14279)){
var statearr_14336_17283 = state_14305__$1;
(statearr_14336_17283[(1)] = (19));

} else {
var statearr_14337_17284 = state_14305__$1;
(statearr_14337_17284[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (3))){
var inst_14296 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14305__$1,inst_14296);
} else {
if((state_val_14306 === (12))){
var inst_14267 = (state_14305[(10)]);
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14305__$1,(14),inst_14267);
} else {
if((state_val_14306 === (2))){
var state_14305__$1 = state_14305;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14305__$1,(4),results);
} else {
if((state_val_14306 === (19))){
var state_14305__$1 = state_14305;
var statearr_14346_17287 = state_14305__$1;
(statearr_14346_17287[(2)] = null);

(statearr_14346_17287[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (11))){
var inst_14267 = (state_14305[(2)]);
var state_14305__$1 = (function (){var statearr_14351 = state_14305;
(statearr_14351[(10)] = inst_14267);

return statearr_14351;
})();
var statearr_14353_17288 = state_14305__$1;
(statearr_14353_17288[(2)] = null);

(statearr_14353_17288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (9))){
var state_14305__$1 = state_14305;
var statearr_14358_17289 = state_14305__$1;
(statearr_14358_17289[(2)] = null);

(statearr_14358_17289[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (5))){
var state_14305__$1 = state_14305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14359_17290 = state_14305__$1;
(statearr_14359_17290[(1)] = (8));

} else {
var statearr_14360_17291 = state_14305__$1;
(statearr_14360_17291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (14))){
var inst_14272 = (state_14305[(11)]);
var inst_14270 = (state_14305[(8)]);
var inst_14270__$1 = (state_14305[(2)]);
var inst_14271 = (inst_14270__$1 == null);
var inst_14272__$1 = cljs.core.not(inst_14271);
var state_14305__$1 = (function (){var statearr_14361 = state_14305;
(statearr_14361[(11)] = inst_14272__$1);

(statearr_14361[(8)] = inst_14270__$1);

return statearr_14361;
})();
if(inst_14272__$1){
var statearr_14362_17292 = state_14305__$1;
(statearr_14362_17292[(1)] = (15));

} else {
var statearr_14364_17293 = state_14305__$1;
(statearr_14364_17293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (16))){
var inst_14272 = (state_14305[(11)]);
var state_14305__$1 = state_14305;
var statearr_14369_17294 = state_14305__$1;
(statearr_14369_17294[(2)] = inst_14272);

(statearr_14369_17294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (10))){
var inst_14264 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14371_17296 = state_14305__$1;
(statearr_14371_17296[(2)] = inst_14264);

(statearr_14371_17296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (18))){
var inst_14276 = (state_14305[(2)]);
var state_14305__$1 = state_14305;
var statearr_14373_17297 = state_14305__$1;
(statearr_14373_17297[(2)] = inst_14276);

(statearr_14373_17297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14306 === (8))){
var inst_14261 = cljs.core.async.close_BANG_(to);
var state_14305__$1 = state_14305;
var statearr_14374_17298 = state_14305__$1;
(statearr_14374_17298[(2)] = inst_14261);

(statearr_14374_17298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_14375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14375[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__);

(statearr_14375[(1)] = (1));

return statearr_14375;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1 = (function (state_14305){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14305);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14377){var ex__13316__auto__ = e14377;
var statearr_14380_17301 = state_14305;
(statearr_14380_17301[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14305[(4)]))){
var statearr_14381_17302 = state_14305;
(statearr_14381_17302[(1)] = cljs.core.first((state_14305[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17307 = state_14305;
state_14305 = G__17307;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__ = function(state_14305){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1.call(this,state_14305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14408 = f__13519__auto__();
(statearr_14408[(6)] = c__13518__auto__);

return statearr_14408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

return c__13518__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14416 = arguments.length;
switch (G__14416) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14430 = arguments.length;
switch (G__14430) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14441 = arguments.length;
switch (G__14441) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13518__auto___17314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14476){
var state_val_14478 = (state_14476[(1)]);
if((state_val_14478 === (7))){
var inst_14472 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14483_17319 = state_14476__$1;
(statearr_14483_17319[(2)] = inst_14472);

(statearr_14483_17319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (1))){
var state_14476__$1 = state_14476;
var statearr_14484_17320 = state_14476__$1;
(statearr_14484_17320[(2)] = null);

(statearr_14484_17320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (4))){
var inst_14453 = (state_14476[(7)]);
var inst_14453__$1 = (state_14476[(2)]);
var inst_14454 = (inst_14453__$1 == null);
var state_14476__$1 = (function (){var statearr_14486 = state_14476;
(statearr_14486[(7)] = inst_14453__$1);

return statearr_14486;
})();
if(cljs.core.truth_(inst_14454)){
var statearr_14487_17321 = state_14476__$1;
(statearr_14487_17321[(1)] = (5));

} else {
var statearr_14488_17322 = state_14476__$1;
(statearr_14488_17322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (13))){
var state_14476__$1 = state_14476;
var statearr_14491_17323 = state_14476__$1;
(statearr_14491_17323[(2)] = null);

(statearr_14491_17323[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (6))){
var inst_14453 = (state_14476[(7)]);
var inst_14459 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14453) : p.call(null,inst_14453));
var state_14476__$1 = state_14476;
if(cljs.core.truth_(inst_14459)){
var statearr_14492_17324 = state_14476__$1;
(statearr_14492_17324[(1)] = (9));

} else {
var statearr_14493_17325 = state_14476__$1;
(statearr_14493_17325[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (3))){
var inst_14474 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14476__$1,inst_14474);
} else {
if((state_val_14478 === (12))){
var state_14476__$1 = state_14476;
var statearr_14496_17326 = state_14476__$1;
(statearr_14496_17326[(2)] = null);

(statearr_14496_17326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (2))){
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14476__$1,(4),ch);
} else {
if((state_val_14478 === (11))){
var inst_14453 = (state_14476[(7)]);
var inst_14463 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14476__$1,(8),inst_14463,inst_14453);
} else {
if((state_val_14478 === (9))){
var state_14476__$1 = state_14476;
var statearr_14506_17328 = state_14476__$1;
(statearr_14506_17328[(2)] = tc);

(statearr_14506_17328[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (5))){
var inst_14456 = cljs.core.async.close_BANG_(tc);
var inst_14457 = cljs.core.async.close_BANG_(fc);
var state_14476__$1 = (function (){var statearr_14507 = state_14476;
(statearr_14507[(8)] = inst_14456);

return statearr_14507;
})();
var statearr_14508_17329 = state_14476__$1;
(statearr_14508_17329[(2)] = inst_14457);

(statearr_14508_17329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (14))){
var inst_14470 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
var statearr_14511_17330 = state_14476__$1;
(statearr_14511_17330[(2)] = inst_14470);

(statearr_14511_17330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (10))){
var state_14476__$1 = state_14476;
var statearr_14514_17335 = state_14476__$1;
(statearr_14514_17335[(2)] = fc);

(statearr_14514_17335[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14478 === (8))){
var inst_14465 = (state_14476[(2)]);
var state_14476__$1 = state_14476;
if(cljs.core.truth_(inst_14465)){
var statearr_14519_17336 = state_14476__$1;
(statearr_14519_17336[(1)] = (12));

} else {
var statearr_14520_17337 = state_14476__$1;
(statearr_14520_17337[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_14522 = [null,null,null,null,null,null,null,null,null];
(statearr_14522[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_14522[(1)] = (1));

return statearr_14522;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_14476){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14476);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14523){var ex__13316__auto__ = e14523;
var statearr_14524_17350 = state_14476;
(statearr_14524_17350[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14476[(4)]))){
var statearr_14526_17351 = state_14476;
(statearr_14526_17351[(1)] = cljs.core.first((state_14476[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17357 = state_14476;
state_14476 = G__17357;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_14476){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_14476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14530 = f__13519__auto__();
(statearr_14530[(6)] = c__13518__auto___17314);

return statearr_14530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14557){
var state_val_14558 = (state_14557[(1)]);
if((state_val_14558 === (7))){
var inst_14553 = (state_14557[(2)]);
var state_14557__$1 = state_14557;
var statearr_14564_17369 = state_14557__$1;
(statearr_14564_17369[(2)] = inst_14553);

(statearr_14564_17369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (1))){
var inst_14534 = init;
var inst_14535 = inst_14534;
var state_14557__$1 = (function (){var statearr_14566 = state_14557;
(statearr_14566[(7)] = inst_14535);

return statearr_14566;
})();
var statearr_14567_17376 = state_14557__$1;
(statearr_14567_17376[(2)] = null);

(statearr_14567_17376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (4))){
var inst_14540 = (state_14557[(8)]);
var inst_14540__$1 = (state_14557[(2)]);
var inst_14541 = (inst_14540__$1 == null);
var state_14557__$1 = (function (){var statearr_14569 = state_14557;
(statearr_14569[(8)] = inst_14540__$1);

return statearr_14569;
})();
if(cljs.core.truth_(inst_14541)){
var statearr_14571_17381 = state_14557__$1;
(statearr_14571_17381[(1)] = (5));

} else {
var statearr_14573_17382 = state_14557__$1;
(statearr_14573_17382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (6))){
var inst_14540 = (state_14557[(8)]);
var inst_14535 = (state_14557[(7)]);
var inst_14544 = (state_14557[(9)]);
var inst_14544__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14535,inst_14540) : f.call(null,inst_14535,inst_14540));
var inst_14545 = cljs.core.reduced_QMARK_(inst_14544__$1);
var state_14557__$1 = (function (){var statearr_14576 = state_14557;
(statearr_14576[(9)] = inst_14544__$1);

return statearr_14576;
})();
if(inst_14545){
var statearr_14578_17390 = state_14557__$1;
(statearr_14578_17390[(1)] = (8));

} else {
var statearr_14579_17398 = state_14557__$1;
(statearr_14579_17398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (3))){
var inst_14555 = (state_14557[(2)]);
var state_14557__$1 = state_14557;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14557__$1,inst_14555);
} else {
if((state_val_14558 === (2))){
var state_14557__$1 = state_14557;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14557__$1,(4),ch);
} else {
if((state_val_14558 === (9))){
var inst_14544 = (state_14557[(9)]);
var inst_14535 = inst_14544;
var state_14557__$1 = (function (){var statearr_14582 = state_14557;
(statearr_14582[(7)] = inst_14535);

return statearr_14582;
})();
var statearr_14592_17403 = state_14557__$1;
(statearr_14592_17403[(2)] = null);

(statearr_14592_17403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (5))){
var inst_14535 = (state_14557[(7)]);
var state_14557__$1 = state_14557;
var statearr_14599_17404 = state_14557__$1;
(statearr_14599_17404[(2)] = inst_14535);

(statearr_14599_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (10))){
var inst_14551 = (state_14557[(2)]);
var state_14557__$1 = state_14557;
var statearr_14606_17411 = state_14557__$1;
(statearr_14606_17411[(2)] = inst_14551);

(statearr_14606_17411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14558 === (8))){
var inst_14544 = (state_14557[(9)]);
var inst_14547 = cljs.core.deref(inst_14544);
var state_14557__$1 = state_14557;
var statearr_14609_17412 = state_14557__$1;
(statearr_14609_17412[(2)] = inst_14547);

(statearr_14609_17412[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13313__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13313__auto____0 = (function (){
var statearr_14615 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14615[(0)] = cljs$core$async$reduce_$_state_machine__13313__auto__);

(statearr_14615[(1)] = (1));

return statearr_14615;
});
var cljs$core$async$reduce_$_state_machine__13313__auto____1 = (function (state_14557){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14557);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14616){var ex__13316__auto__ = e14616;
var statearr_14617_17417 = state_14557;
(statearr_14617_17417[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14557[(4)]))){
var statearr_14618_17418 = state_14557;
(statearr_14618_17418[(1)] = cljs.core.first((state_14557[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17419 = state_14557;
state_14557 = G__17419;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13313__auto__ = function(state_14557){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13313__auto____1.call(this,state_14557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13313__auto____0;
cljs$core$async$reduce_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13313__auto____1;
return cljs$core$async$reduce_$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14619 = f__13519__auto__();
(statearr_14619[(6)] = c__13518__auto__);

return statearr_14619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

return c__13518__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14626){
var state_val_14627 = (state_14626[(1)]);
if((state_val_14627 === (1))){
var inst_14621 = cljs.core.async.reduce(f__$1,init,ch);
var state_14626__$1 = state_14626;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14626__$1,(2),inst_14621);
} else {
if((state_val_14627 === (2))){
var inst_14623 = (state_14626[(2)]);
var inst_14624 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14623) : f__$1.call(null,inst_14623));
var state_14626__$1 = state_14626;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14626__$1,inst_14624);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13313__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13313__auto____0 = (function (){
var statearr_14628 = [null,null,null,null,null,null,null];
(statearr_14628[(0)] = cljs$core$async$transduce_$_state_machine__13313__auto__);

(statearr_14628[(1)] = (1));

return statearr_14628;
});
var cljs$core$async$transduce_$_state_machine__13313__auto____1 = (function (state_14626){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14626);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14629){var ex__13316__auto__ = e14629;
var statearr_14630_17435 = state_14626;
(statearr_14630_17435[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14626[(4)]))){
var statearr_14631_17436 = state_14626;
(statearr_14631_17436[(1)] = cljs.core.first((state_14626[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17438 = state_14626;
state_14626 = G__17438;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13313__auto__ = function(state_14626){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13313__auto____1.call(this,state_14626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13313__auto____0;
cljs$core$async$transduce_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13313__auto____1;
return cljs$core$async$transduce_$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14632 = f__13519__auto__();
(statearr_14632[(6)] = c__13518__auto__);

return statearr_14632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

return c__13518__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14637 = arguments.length;
switch (G__14637) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14671){
var state_val_14672 = (state_14671[(1)]);
if((state_val_14672 === (7))){
var inst_14650 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14673_17446 = state_14671__$1;
(statearr_14673_17446[(2)] = inst_14650);

(statearr_14673_17446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (1))){
var inst_14641 = cljs.core.seq(coll);
var inst_14642 = inst_14641;
var state_14671__$1 = (function (){var statearr_14677 = state_14671;
(statearr_14677[(7)] = inst_14642);

return statearr_14677;
})();
var statearr_14678_17447 = state_14671__$1;
(statearr_14678_17447[(2)] = null);

(statearr_14678_17447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (4))){
var inst_14642 = (state_14671[(7)]);
var inst_14648 = cljs.core.first(inst_14642);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14671__$1,(7),ch,inst_14648);
} else {
if((state_val_14672 === (13))){
var inst_14662 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14682_17451 = state_14671__$1;
(statearr_14682_17451[(2)] = inst_14662);

(statearr_14682_17451[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (6))){
var inst_14653 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
if(cljs.core.truth_(inst_14653)){
var statearr_14683_17452 = state_14671__$1;
(statearr_14683_17452[(1)] = (8));

} else {
var statearr_14684_17453 = state_14671__$1;
(statearr_14684_17453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (3))){
var inst_14666 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14671__$1,inst_14666);
} else {
if((state_val_14672 === (12))){
var state_14671__$1 = state_14671;
var statearr_14689_17462 = state_14671__$1;
(statearr_14689_17462[(2)] = null);

(statearr_14689_17462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (2))){
var inst_14642 = (state_14671[(7)]);
var state_14671__$1 = state_14671;
if(cljs.core.truth_(inst_14642)){
var statearr_14690_17468 = state_14671__$1;
(statearr_14690_17468[(1)] = (4));

} else {
var statearr_14691_17469 = state_14671__$1;
(statearr_14691_17469[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (11))){
var inst_14659 = cljs.core.async.close_BANG_(ch);
var state_14671__$1 = state_14671;
var statearr_14692_17470 = state_14671__$1;
(statearr_14692_17470[(2)] = inst_14659);

(statearr_14692_17470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (9))){
var state_14671__$1 = state_14671;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14699_17471 = state_14671__$1;
(statearr_14699_17471[(1)] = (11));

} else {
var statearr_14700_17472 = state_14671__$1;
(statearr_14700_17472[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (5))){
var inst_14642 = (state_14671[(7)]);
var state_14671__$1 = state_14671;
var statearr_14701_17473 = state_14671__$1;
(statearr_14701_17473[(2)] = inst_14642);

(statearr_14701_17473[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (10))){
var inst_14664 = (state_14671[(2)]);
var state_14671__$1 = state_14671;
var statearr_14708_17474 = state_14671__$1;
(statearr_14708_17474[(2)] = inst_14664);

(statearr_14708_17474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14672 === (8))){
var inst_14642 = (state_14671[(7)]);
var inst_14655 = cljs.core.next(inst_14642);
var inst_14642__$1 = inst_14655;
var state_14671__$1 = (function (){var statearr_14709 = state_14671;
(statearr_14709[(7)] = inst_14642__$1);

return statearr_14709;
})();
var statearr_14714_17475 = state_14671__$1;
(statearr_14714_17475[(2)] = null);

(statearr_14714_17475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_14715 = [null,null,null,null,null,null,null,null];
(statearr_14715[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_14715[(1)] = (1));

return statearr_14715;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_14671){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14671);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e14716){var ex__13316__auto__ = e14716;
var statearr_14723_17480 = state_14671;
(statearr_14723_17480[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14671[(4)]))){
var statearr_14724_17482 = state_14671;
(statearr_14724_17482[(1)] = cljs.core.first((state_14671[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17487 = state_14671;
state_14671 = G__17487;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_14671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_14671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_14731 = f__13519__auto__();
(statearr_14731[(6)] = c__13518__auto__);

return statearr_14731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

return c__13518__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14737 = arguments.length;
switch (G__14737) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17495 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17495(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17507 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17507(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17511 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17511(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17519 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17519(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14749 = (function (ch,cs,meta14750){
this.ch = ch;
this.cs = cs;
this.meta14750 = meta14750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14751,meta14750__$1){
var self__ = this;
var _14751__$1 = this;
return (new cljs.core.async.t_cljs$core$async14749(self__.ch,self__.cs,meta14750__$1));
}));

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14751){
var self__ = this;
var _14751__$1 = this;
return self__.meta14750;
}));

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14749.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14750","meta14750",712684671,null)], null);
}));

(cljs.core.async.t_cljs$core$async14749.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14749.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14749");

(cljs.core.async.t_cljs$core$async14749.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14749");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14749.
 */
cljs.core.async.__GT_t_cljs$core$async14749 = (function cljs$core$async$__GT_t_cljs$core$async14749(ch,cs,meta14750){
return (new cljs.core.async.t_cljs$core$async14749(ch,cs,meta14750));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14749(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13518__auto___17538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_14918){
var state_val_14919 = (state_14918[(1)]);
if((state_val_14919 === (7))){
var inst_14909 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14925_17549 = state_14918__$1;
(statearr_14925_17549[(2)] = inst_14909);

(statearr_14925_17549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (20))){
var inst_14803 = (state_14918[(7)]);
var inst_14816 = cljs.core.first(inst_14803);
var inst_14817 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14816,(0),null);
var inst_14818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14816,(1),null);
var state_14918__$1 = (function (){var statearr_14926 = state_14918;
(statearr_14926[(8)] = inst_14817);

return statearr_14926;
})();
if(cljs.core.truth_(inst_14818)){
var statearr_14927_17563 = state_14918__$1;
(statearr_14927_17563[(1)] = (22));

} else {
var statearr_14928_17573 = state_14918__$1;
(statearr_14928_17573[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (27))){
var inst_14858 = (state_14918[(9)]);
var inst_14848 = (state_14918[(10)]);
var inst_14850 = (state_14918[(11)]);
var inst_14764 = (state_14918[(12)]);
var inst_14858__$1 = cljs.core._nth(inst_14848,inst_14850);
var inst_14859 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14858__$1,inst_14764,done);
var state_14918__$1 = (function (){var statearr_14932 = state_14918;
(statearr_14932[(9)] = inst_14858__$1);

return statearr_14932;
})();
if(cljs.core.truth_(inst_14859)){
var statearr_14934_17580 = state_14918__$1;
(statearr_14934_17580[(1)] = (30));

} else {
var statearr_14935_17603 = state_14918__$1;
(statearr_14935_17603[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (1))){
var state_14918__$1 = state_14918;
var statearr_14937_17604 = state_14918__$1;
(statearr_14937_17604[(2)] = null);

(statearr_14937_17604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (24))){
var inst_14803 = (state_14918[(7)]);
var inst_14824 = (state_14918[(2)]);
var inst_14825 = cljs.core.next(inst_14803);
var inst_14774 = inst_14825;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14918__$1 = (function (){var statearr_14942 = state_14918;
(statearr_14942[(13)] = inst_14777);

(statearr_14942[(14)] = inst_14774);

(statearr_14942[(15)] = inst_14776);

(statearr_14942[(16)] = inst_14775);

(statearr_14942[(17)] = inst_14824);

return statearr_14942;
})();
var statearr_14943_17609 = state_14918__$1;
(statearr_14943_17609[(2)] = null);

(statearr_14943_17609[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (39))){
var state_14918__$1 = state_14918;
var statearr_14953_17613 = state_14918__$1;
(statearr_14953_17613[(2)] = null);

(statearr_14953_17613[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (4))){
var inst_14764 = (state_14918[(12)]);
var inst_14764__$1 = (state_14918[(2)]);
var inst_14765 = (inst_14764__$1 == null);
var state_14918__$1 = (function (){var statearr_14956 = state_14918;
(statearr_14956[(12)] = inst_14764__$1);

return statearr_14956;
})();
if(cljs.core.truth_(inst_14765)){
var statearr_14957_17620 = state_14918__$1;
(statearr_14957_17620[(1)] = (5));

} else {
var statearr_14958_17621 = state_14918__$1;
(statearr_14958_17621[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (15))){
var inst_14777 = (state_14918[(13)]);
var inst_14774 = (state_14918[(14)]);
var inst_14776 = (state_14918[(15)]);
var inst_14775 = (state_14918[(16)]);
var inst_14796 = (state_14918[(2)]);
var inst_14800 = (inst_14777 + (1));
var tmp14944 = inst_14774;
var tmp14945 = inst_14776;
var tmp14946 = inst_14775;
var inst_14774__$1 = tmp14944;
var inst_14775__$1 = tmp14946;
var inst_14776__$1 = tmp14945;
var inst_14777__$1 = inst_14800;
var state_14918__$1 = (function (){var statearr_14960 = state_14918;
(statearr_14960[(13)] = inst_14777__$1);

(statearr_14960[(14)] = inst_14774__$1);

(statearr_14960[(15)] = inst_14776__$1);

(statearr_14960[(18)] = inst_14796);

(statearr_14960[(16)] = inst_14775__$1);

return statearr_14960;
})();
var statearr_14962_17629 = state_14918__$1;
(statearr_14962_17629[(2)] = null);

(statearr_14962_17629[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (21))){
var inst_14828 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14966_17630 = state_14918__$1;
(statearr_14966_17630[(2)] = inst_14828);

(statearr_14966_17630[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (31))){
var inst_14858 = (state_14918[(9)]);
var inst_14862 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14858);
var state_14918__$1 = state_14918;
var statearr_14967_17631 = state_14918__$1;
(statearr_14967_17631[(2)] = inst_14862);

(statearr_14967_17631[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (32))){
var inst_14847 = (state_14918[(19)]);
var inst_14848 = (state_14918[(10)]);
var inst_14850 = (state_14918[(11)]);
var inst_14849 = (state_14918[(20)]);
var inst_14864 = (state_14918[(2)]);
var inst_14865 = (inst_14850 + (1));
var tmp14963 = inst_14847;
var tmp14964 = inst_14848;
var tmp14965 = inst_14849;
var inst_14847__$1 = tmp14963;
var inst_14848__$1 = tmp14964;
var inst_14849__$1 = tmp14965;
var inst_14850__$1 = inst_14865;
var state_14918__$1 = (function (){var statearr_14969 = state_14918;
(statearr_14969[(19)] = inst_14847__$1);

(statearr_14969[(21)] = inst_14864);

(statearr_14969[(10)] = inst_14848__$1);

(statearr_14969[(11)] = inst_14850__$1);

(statearr_14969[(20)] = inst_14849__$1);

return statearr_14969;
})();
var statearr_14970_17639 = state_14918__$1;
(statearr_14970_17639[(2)] = null);

(statearr_14970_17639[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (40))){
var inst_14882 = (state_14918[(22)]);
var inst_14886 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14882);
var state_14918__$1 = state_14918;
var statearr_14971_17640 = state_14918__$1;
(statearr_14971_17640[(2)] = inst_14886);

(statearr_14971_17640[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (33))){
var inst_14871 = (state_14918[(23)]);
var inst_14873 = cljs.core.chunked_seq_QMARK_(inst_14871);
var state_14918__$1 = state_14918;
if(inst_14873){
var statearr_14972_17647 = state_14918__$1;
(statearr_14972_17647[(1)] = (36));

} else {
var statearr_14973_17648 = state_14918__$1;
(statearr_14973_17648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (13))){
var inst_14786 = (state_14918[(24)]);
var inst_14793 = cljs.core.async.close_BANG_(inst_14786);
var state_14918__$1 = state_14918;
var statearr_14974_17649 = state_14918__$1;
(statearr_14974_17649[(2)] = inst_14793);

(statearr_14974_17649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (22))){
var inst_14817 = (state_14918[(8)]);
var inst_14821 = cljs.core.async.close_BANG_(inst_14817);
var state_14918__$1 = state_14918;
var statearr_14977_17650 = state_14918__$1;
(statearr_14977_17650[(2)] = inst_14821);

(statearr_14977_17650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (36))){
var inst_14871 = (state_14918[(23)]);
var inst_14877 = cljs.core.chunk_first(inst_14871);
var inst_14878 = cljs.core.chunk_rest(inst_14871);
var inst_14879 = cljs.core.count(inst_14877);
var inst_14847 = inst_14878;
var inst_14848 = inst_14877;
var inst_14849 = inst_14879;
var inst_14850 = (0);
var state_14918__$1 = (function (){var statearr_14978 = state_14918;
(statearr_14978[(19)] = inst_14847);

(statearr_14978[(10)] = inst_14848);

(statearr_14978[(11)] = inst_14850);

(statearr_14978[(20)] = inst_14849);

return statearr_14978;
})();
var statearr_14979_17651 = state_14918__$1;
(statearr_14979_17651[(2)] = null);

(statearr_14979_17651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (41))){
var inst_14871 = (state_14918[(23)]);
var inst_14888 = (state_14918[(2)]);
var inst_14889 = cljs.core.next(inst_14871);
var inst_14847 = inst_14889;
var inst_14848 = null;
var inst_14849 = (0);
var inst_14850 = (0);
var state_14918__$1 = (function (){var statearr_14980 = state_14918;
(statearr_14980[(19)] = inst_14847);

(statearr_14980[(10)] = inst_14848);

(statearr_14980[(11)] = inst_14850);

(statearr_14980[(20)] = inst_14849);

(statearr_14980[(25)] = inst_14888);

return statearr_14980;
})();
var statearr_14982_17652 = state_14918__$1;
(statearr_14982_17652[(2)] = null);

(statearr_14982_17652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (43))){
var state_14918__$1 = state_14918;
var statearr_14984_17653 = state_14918__$1;
(statearr_14984_17653[(2)] = null);

(statearr_14984_17653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (29))){
var inst_14897 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_14985_17654 = state_14918__$1;
(statearr_14985_17654[(2)] = inst_14897);

(statearr_14985_17654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (44))){
var inst_14906 = (state_14918[(2)]);
var state_14918__$1 = (function (){var statearr_14987 = state_14918;
(statearr_14987[(26)] = inst_14906);

return statearr_14987;
})();
var statearr_14991_17655 = state_14918__$1;
(statearr_14991_17655[(2)] = null);

(statearr_14991_17655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (6))){
var inst_14839 = (state_14918[(27)]);
var inst_14838 = cljs.core.deref(cs);
var inst_14839__$1 = cljs.core.keys(inst_14838);
var inst_14840 = cljs.core.count(inst_14839__$1);
var inst_14841 = cljs.core.reset_BANG_(dctr,inst_14840);
var inst_14846 = cljs.core.seq(inst_14839__$1);
var inst_14847 = inst_14846;
var inst_14848 = null;
var inst_14849 = (0);
var inst_14850 = (0);
var state_14918__$1 = (function (){var statearr_14993 = state_14918;
(statearr_14993[(27)] = inst_14839__$1);

(statearr_14993[(19)] = inst_14847);

(statearr_14993[(28)] = inst_14841);

(statearr_14993[(10)] = inst_14848);

(statearr_14993[(11)] = inst_14850);

(statearr_14993[(20)] = inst_14849);

return statearr_14993;
})();
var statearr_14994_17665 = state_14918__$1;
(statearr_14994_17665[(2)] = null);

(statearr_14994_17665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (28))){
var inst_14847 = (state_14918[(19)]);
var inst_14871 = (state_14918[(23)]);
var inst_14871__$1 = cljs.core.seq(inst_14847);
var state_14918__$1 = (function (){var statearr_14998 = state_14918;
(statearr_14998[(23)] = inst_14871__$1);

return statearr_14998;
})();
if(inst_14871__$1){
var statearr_14999_17666 = state_14918__$1;
(statearr_14999_17666[(1)] = (33));

} else {
var statearr_15000_17667 = state_14918__$1;
(statearr_15000_17667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (25))){
var inst_14850 = (state_14918[(11)]);
var inst_14849 = (state_14918[(20)]);
var inst_14855 = (inst_14850 < inst_14849);
var inst_14856 = inst_14855;
var state_14918__$1 = state_14918;
if(cljs.core.truth_(inst_14856)){
var statearr_15002_17668 = state_14918__$1;
(statearr_15002_17668[(1)] = (27));

} else {
var statearr_15003_17669 = state_14918__$1;
(statearr_15003_17669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (34))){
var state_14918__$1 = state_14918;
var statearr_15004_17670 = state_14918__$1;
(statearr_15004_17670[(2)] = null);

(statearr_15004_17670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (17))){
var state_14918__$1 = state_14918;
var statearr_15005_17671 = state_14918__$1;
(statearr_15005_17671[(2)] = null);

(statearr_15005_17671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (3))){
var inst_14911 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14918__$1,inst_14911);
} else {
if((state_val_14919 === (12))){
var inst_14833 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15006_17672 = state_14918__$1;
(statearr_15006_17672[(2)] = inst_14833);

(statearr_15006_17672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (2))){
var state_14918__$1 = state_14918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14918__$1,(4),ch);
} else {
if((state_val_14919 === (23))){
var state_14918__$1 = state_14918;
var statearr_15007_17673 = state_14918__$1;
(statearr_15007_17673[(2)] = null);

(statearr_15007_17673[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (35))){
var inst_14895 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15009_17674 = state_14918__$1;
(statearr_15009_17674[(2)] = inst_14895);

(statearr_15009_17674[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (19))){
var inst_14803 = (state_14918[(7)]);
var inst_14807 = cljs.core.chunk_first(inst_14803);
var inst_14808 = cljs.core.chunk_rest(inst_14803);
var inst_14810 = cljs.core.count(inst_14807);
var inst_14774 = inst_14808;
var inst_14775 = inst_14807;
var inst_14776 = inst_14810;
var inst_14777 = (0);
var state_14918__$1 = (function (){var statearr_15011 = state_14918;
(statearr_15011[(13)] = inst_14777);

(statearr_15011[(14)] = inst_14774);

(statearr_15011[(15)] = inst_14776);

(statearr_15011[(16)] = inst_14775);

return statearr_15011;
})();
var statearr_15012_17681 = state_14918__$1;
(statearr_15012_17681[(2)] = null);

(statearr_15012_17681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (11))){
var inst_14774 = (state_14918[(14)]);
var inst_14803 = (state_14918[(7)]);
var inst_14803__$1 = cljs.core.seq(inst_14774);
var state_14918__$1 = (function (){var statearr_15013 = state_14918;
(statearr_15013[(7)] = inst_14803__$1);

return statearr_15013;
})();
if(inst_14803__$1){
var statearr_15014_17682 = state_14918__$1;
(statearr_15014_17682[(1)] = (16));

} else {
var statearr_15015_17683 = state_14918__$1;
(statearr_15015_17683[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (9))){
var inst_14835 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15022_17685 = state_14918__$1;
(statearr_15022_17685[(2)] = inst_14835);

(statearr_15022_17685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (5))){
var inst_14772 = cljs.core.deref(cs);
var inst_14773 = cljs.core.seq(inst_14772);
var inst_14774 = inst_14773;
var inst_14775 = null;
var inst_14776 = (0);
var inst_14777 = (0);
var state_14918__$1 = (function (){var statearr_15025 = state_14918;
(statearr_15025[(13)] = inst_14777);

(statearr_15025[(14)] = inst_14774);

(statearr_15025[(15)] = inst_14776);

(statearr_15025[(16)] = inst_14775);

return statearr_15025;
})();
var statearr_15026_17686 = state_14918__$1;
(statearr_15026_17686[(2)] = null);

(statearr_15026_17686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (14))){
var state_14918__$1 = state_14918;
var statearr_15027_17687 = state_14918__$1;
(statearr_15027_17687[(2)] = null);

(statearr_15027_17687[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (45))){
var inst_14903 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15028_17688 = state_14918__$1;
(statearr_15028_17688[(2)] = inst_14903);

(statearr_15028_17688[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (26))){
var inst_14839 = (state_14918[(27)]);
var inst_14899 = (state_14918[(2)]);
var inst_14900 = cljs.core.seq(inst_14839);
var state_14918__$1 = (function (){var statearr_15029 = state_14918;
(statearr_15029[(29)] = inst_14899);

return statearr_15029;
})();
if(inst_14900){
var statearr_15030_17689 = state_14918__$1;
(statearr_15030_17689[(1)] = (42));

} else {
var statearr_15031_17690 = state_14918__$1;
(statearr_15031_17690[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (16))){
var inst_14803 = (state_14918[(7)]);
var inst_14805 = cljs.core.chunked_seq_QMARK_(inst_14803);
var state_14918__$1 = state_14918;
if(inst_14805){
var statearr_15032_17694 = state_14918__$1;
(statearr_15032_17694[(1)] = (19));

} else {
var statearr_15033_17695 = state_14918__$1;
(statearr_15033_17695[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (38))){
var inst_14892 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15037_17696 = state_14918__$1;
(statearr_15037_17696[(2)] = inst_14892);

(statearr_15037_17696[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (30))){
var state_14918__$1 = state_14918;
var statearr_15038_17697 = state_14918__$1;
(statearr_15038_17697[(2)] = null);

(statearr_15038_17697[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (10))){
var inst_14777 = (state_14918[(13)]);
var inst_14775 = (state_14918[(16)]);
var inst_14785 = cljs.core._nth(inst_14775,inst_14777);
var inst_14786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14785,(0),null);
var inst_14791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14785,(1),null);
var state_14918__$1 = (function (){var statearr_15039 = state_14918;
(statearr_15039[(24)] = inst_14786);

return statearr_15039;
})();
if(cljs.core.truth_(inst_14791)){
var statearr_15040_17698 = state_14918__$1;
(statearr_15040_17698[(1)] = (13));

} else {
var statearr_15041_17705 = state_14918__$1;
(statearr_15041_17705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (18))){
var inst_14831 = (state_14918[(2)]);
var state_14918__$1 = state_14918;
var statearr_15046_17706 = state_14918__$1;
(statearr_15046_17706[(2)] = inst_14831);

(statearr_15046_17706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (42))){
var state_14918__$1 = state_14918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14918__$1,(45),dchan);
} else {
if((state_val_14919 === (37))){
var inst_14882 = (state_14918[(22)]);
var inst_14764 = (state_14918[(12)]);
var inst_14871 = (state_14918[(23)]);
var inst_14882__$1 = cljs.core.first(inst_14871);
var inst_14883 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14882__$1,inst_14764,done);
var state_14918__$1 = (function (){var statearr_15048 = state_14918;
(statearr_15048[(22)] = inst_14882__$1);

return statearr_15048;
})();
if(cljs.core.truth_(inst_14883)){
var statearr_15050_17719 = state_14918__$1;
(statearr_15050_17719[(1)] = (39));

} else {
var statearr_15051_17720 = state_14918__$1;
(statearr_15051_17720[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14919 === (8))){
var inst_14777 = (state_14918[(13)]);
var inst_14776 = (state_14918[(15)]);
var inst_14779 = (inst_14777 < inst_14776);
var inst_14780 = inst_14779;
var state_14918__$1 = state_14918;
if(cljs.core.truth_(inst_14780)){
var statearr_15052_17721 = state_14918__$1;
(statearr_15052_17721[(1)] = (10));

} else {
var statearr_15053_17722 = state_14918__$1;
(statearr_15053_17722[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13313__auto__ = null;
var cljs$core$async$mult_$_state_machine__13313__auto____0 = (function (){
var statearr_15055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15055[(0)] = cljs$core$async$mult_$_state_machine__13313__auto__);

(statearr_15055[(1)] = (1));

return statearr_15055;
});
var cljs$core$async$mult_$_state_machine__13313__auto____1 = (function (state_14918){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_14918);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e15056){var ex__13316__auto__ = e15056;
var statearr_15058_17723 = state_14918;
(statearr_15058_17723[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_14918[(4)]))){
var statearr_15062_17724 = state_14918;
(statearr_15062_17724[(1)] = cljs.core.first((state_14918[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17725 = state_14918;
state_14918 = G__17725;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13313__auto__ = function(state_14918){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13313__auto____1.call(this,state_14918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13313__auto____0;
cljs$core$async$mult_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13313__auto____1;
return cljs$core$async$mult_$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_15065 = f__13519__auto__();
(statearr_15065[(6)] = c__13518__auto___17538);

return statearr_15065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15067 = arguments.length;
switch (G__15067) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17752 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17752(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17766 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17766(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17767 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17767(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17768 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17768(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17773 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17773(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17778 = arguments.length;
var i__5770__auto___17779 = (0);
while(true){
if((i__5770__auto___17779 < len__5769__auto___17778)){
args__5775__auto__.push((arguments[i__5770__auto___17779]));

var G__17780 = (i__5770__auto___17779 + (1));
i__5770__auto___17779 = G__17780;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15091){
var map__15092 = p__15091;
var map__15092__$1 = cljs.core.__destructure_map(map__15092);
var opts = map__15092__$1;
var statearr_15093_17781 = state;
(statearr_15093_17781[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15094_17783 = state;
(statearr_15094_17783[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15095_17784 = state;
(statearr_15095_17784[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15086){
var G__15087 = cljs.core.first(seq15086);
var seq15086__$1 = cljs.core.next(seq15086);
var G__15088 = cljs.core.first(seq15086__$1);
var seq15086__$2 = cljs.core.next(seq15086__$1);
var G__15089 = cljs.core.first(seq15086__$2);
var seq15086__$3 = cljs.core.next(seq15086__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15087,G__15088,G__15089,seq15086__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15101 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15102){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15102 = meta15102;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15103,meta15102__$1){
var self__ = this;
var _15103__$1 = this;
return (new cljs.core.async.t_cljs$core$async15101(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15102__$1));
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15103){
var self__ = this;
var _15103__$1 = this;
return self__.meta15102;
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15101.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15101.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15102","meta15102",-451582793,null)], null);
}));

(cljs.core.async.t_cljs$core$async15101.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15101.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15101");

(cljs.core.async.t_cljs$core$async15101.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15101");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15101.
 */
cljs.core.async.__GT_t_cljs$core$async15101 = (function cljs$core$async$__GT_t_cljs$core$async15101(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15102){
return (new cljs.core.async.t_cljs$core$async15101(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15102));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15101(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13518__auto___17884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_15185){
var state_val_15186 = (state_15185[(1)]);
if((state_val_15186 === (7))){
var inst_15145 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15145)){
var statearr_15195_17897 = state_15185__$1;
(statearr_15195_17897[(1)] = (8));

} else {
var statearr_15196_17898 = state_15185__$1;
(statearr_15196_17898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (20))){
var inst_15138 = (state_15185[(7)]);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15185__$1,(23),out,inst_15138);
} else {
if((state_val_15186 === (1))){
var inst_15120 = calc_state();
var inst_15121 = cljs.core.__destructure_map(inst_15120);
var inst_15122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15121,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15121,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15121,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15125 = inst_15120;
var state_15185__$1 = (function (){var statearr_15206 = state_15185;
(statearr_15206[(8)] = inst_15122);

(statearr_15206[(9)] = inst_15124);

(statearr_15206[(10)] = inst_15123);

(statearr_15206[(11)] = inst_15125);

return statearr_15206;
})();
var statearr_15209_17910 = state_15185__$1;
(statearr_15209_17910[(2)] = null);

(statearr_15209_17910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (24))){
var inst_15128 = (state_15185[(12)]);
var inst_15125 = inst_15128;
var state_15185__$1 = (function (){var statearr_15210 = state_15185;
(statearr_15210[(11)] = inst_15125);

return statearr_15210;
})();
var statearr_15211_17911 = state_15185__$1;
(statearr_15211_17911[(2)] = null);

(statearr_15211_17911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (4))){
var inst_15140 = (state_15185[(13)]);
var inst_15138 = (state_15185[(7)]);
var inst_15137 = (state_15185[(2)]);
var inst_15138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15137,(0),null);
var inst_15139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15137,(1),null);
var inst_15140__$1 = (inst_15138__$1 == null);
var state_15185__$1 = (function (){var statearr_15213 = state_15185;
(statearr_15213[(13)] = inst_15140__$1);

(statearr_15213[(14)] = inst_15139);

(statearr_15213[(7)] = inst_15138__$1);

return statearr_15213;
})();
if(cljs.core.truth_(inst_15140__$1)){
var statearr_15214_17912 = state_15185__$1;
(statearr_15214_17912[(1)] = (5));

} else {
var statearr_15215_17913 = state_15185__$1;
(statearr_15215_17913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (15))){
var inst_15129 = (state_15185[(15)]);
var inst_15159 = (state_15185[(16)]);
var inst_15159__$1 = cljs.core.empty_QMARK_(inst_15129);
var state_15185__$1 = (function (){var statearr_15221 = state_15185;
(statearr_15221[(16)] = inst_15159__$1);

return statearr_15221;
})();
if(inst_15159__$1){
var statearr_15223_17914 = state_15185__$1;
(statearr_15223_17914[(1)] = (17));

} else {
var statearr_15225_17915 = state_15185__$1;
(statearr_15225_17915[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (21))){
var inst_15128 = (state_15185[(12)]);
var inst_15125 = inst_15128;
var state_15185__$1 = (function (){var statearr_15227 = state_15185;
(statearr_15227[(11)] = inst_15125);

return statearr_15227;
})();
var statearr_15228_17916 = state_15185__$1;
(statearr_15228_17916[(2)] = null);

(statearr_15228_17916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (13))){
var inst_15152 = (state_15185[(2)]);
var inst_15153 = calc_state();
var inst_15125 = inst_15153;
var state_15185__$1 = (function (){var statearr_15229 = state_15185;
(statearr_15229[(17)] = inst_15152);

(statearr_15229[(11)] = inst_15125);

return statearr_15229;
})();
var statearr_15231_17924 = state_15185__$1;
(statearr_15231_17924[(2)] = null);

(statearr_15231_17924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (22))){
var inst_15179 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15232_17925 = state_15185__$1;
(statearr_15232_17925[(2)] = inst_15179);

(statearr_15232_17925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (6))){
var inst_15139 = (state_15185[(14)]);
var inst_15143 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15139,change);
var state_15185__$1 = state_15185;
var statearr_15235_17926 = state_15185__$1;
(statearr_15235_17926[(2)] = inst_15143);

(statearr_15235_17926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (25))){
var state_15185__$1 = state_15185;
var statearr_15239_17928 = state_15185__$1;
(statearr_15239_17928[(2)] = null);

(statearr_15239_17928[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (17))){
var inst_15139 = (state_15185[(14)]);
var inst_15130 = (state_15185[(18)]);
var inst_15161 = (inst_15130.cljs$core$IFn$_invoke$arity$1 ? inst_15130.cljs$core$IFn$_invoke$arity$1(inst_15139) : inst_15130.call(null,inst_15139));
var inst_15162 = cljs.core.not(inst_15161);
var state_15185__$1 = state_15185;
var statearr_15240_17935 = state_15185__$1;
(statearr_15240_17935[(2)] = inst_15162);

(statearr_15240_17935[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (3))){
var inst_15183 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15185__$1,inst_15183);
} else {
if((state_val_15186 === (12))){
var state_15185__$1 = state_15185;
var statearr_15241_17945 = state_15185__$1;
(statearr_15241_17945[(2)] = null);

(statearr_15241_17945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (2))){
var inst_15128 = (state_15185[(12)]);
var inst_15125 = (state_15185[(11)]);
var inst_15128__$1 = cljs.core.__destructure_map(inst_15125);
var inst_15129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15128__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15128__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15128__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15185__$1 = (function (){var statearr_15242 = state_15185;
(statearr_15242[(15)] = inst_15129);

(statearr_15242[(12)] = inst_15128__$1);

(statearr_15242[(18)] = inst_15130);

return statearr_15242;
})();
return cljs.core.async.ioc_alts_BANG_(state_15185__$1,(4),inst_15131);
} else {
if((state_val_15186 === (23))){
var inst_15170 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15170)){
var statearr_15244_17953 = state_15185__$1;
(statearr_15244_17953[(1)] = (24));

} else {
var statearr_15245_17954 = state_15185__$1;
(statearr_15245_17954[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (19))){
var inst_15165 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15246_17955 = state_15185__$1;
(statearr_15246_17955[(2)] = inst_15165);

(statearr_15246_17955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (11))){
var inst_15139 = (state_15185[(14)]);
var inst_15149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15139);
var state_15185__$1 = state_15185;
var statearr_15247_17957 = state_15185__$1;
(statearr_15247_17957[(2)] = inst_15149);

(statearr_15247_17957[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (9))){
var inst_15139 = (state_15185[(14)]);
var inst_15156 = (state_15185[(19)]);
var inst_15129 = (state_15185[(15)]);
var inst_15156__$1 = (inst_15129.cljs$core$IFn$_invoke$arity$1 ? inst_15129.cljs$core$IFn$_invoke$arity$1(inst_15139) : inst_15129.call(null,inst_15139));
var state_15185__$1 = (function (){var statearr_15248 = state_15185;
(statearr_15248[(19)] = inst_15156__$1);

return statearr_15248;
})();
if(cljs.core.truth_(inst_15156__$1)){
var statearr_15249_17958 = state_15185__$1;
(statearr_15249_17958[(1)] = (14));

} else {
var statearr_15250_17960 = state_15185__$1;
(statearr_15250_17960[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (5))){
var inst_15140 = (state_15185[(13)]);
var state_15185__$1 = state_15185;
var statearr_15252_17961 = state_15185__$1;
(statearr_15252_17961[(2)] = inst_15140);

(statearr_15252_17961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (14))){
var inst_15156 = (state_15185[(19)]);
var state_15185__$1 = state_15185;
var statearr_15253_17962 = state_15185__$1;
(statearr_15253_17962[(2)] = inst_15156);

(statearr_15253_17962[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (26))){
var inst_15175 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15254_17963 = state_15185__$1;
(statearr_15254_17963[(2)] = inst_15175);

(statearr_15254_17963[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (16))){
var inst_15167 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15167)){
var statearr_15255_17977 = state_15185__$1;
(statearr_15255_17977[(1)] = (20));

} else {
var statearr_15256_17978 = state_15185__$1;
(statearr_15256_17978[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (10))){
var inst_15181 = (state_15185[(2)]);
var state_15185__$1 = state_15185;
var statearr_15258_17979 = state_15185__$1;
(statearr_15258_17979[(2)] = inst_15181);

(statearr_15258_17979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (18))){
var inst_15159 = (state_15185[(16)]);
var state_15185__$1 = state_15185;
var statearr_15259_17980 = state_15185__$1;
(statearr_15259_17980[(2)] = inst_15159);

(statearr_15259_17980[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15186 === (8))){
var inst_15138 = (state_15185[(7)]);
var inst_15147 = (inst_15138 == null);
var state_15185__$1 = state_15185;
if(cljs.core.truth_(inst_15147)){
var statearr_15264_17981 = state_15185__$1;
(statearr_15264_17981[(1)] = (11));

} else {
var statearr_15265_17984 = state_15185__$1;
(statearr_15265_17984[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13313__auto__ = null;
var cljs$core$async$mix_$_state_machine__13313__auto____0 = (function (){
var statearr_15267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15267[(0)] = cljs$core$async$mix_$_state_machine__13313__auto__);

(statearr_15267[(1)] = (1));

return statearr_15267;
});
var cljs$core$async$mix_$_state_machine__13313__auto____1 = (function (state_15185){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_15185);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e15277){var ex__13316__auto__ = e15277;
var statearr_15278_17989 = state_15185;
(statearr_15278_17989[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_15185[(4)]))){
var statearr_15283_17990 = state_15185;
(statearr_15283_17990[(1)] = cljs.core.first((state_15185[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17991 = state_15185;
state_15185 = G__17991;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13313__auto__ = function(state_15185){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13313__auto____1.call(this,state_15185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13313__auto____0;
cljs$core$async$mix_$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13313__auto____1;
return cljs$core$async$mix_$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_15285 = f__13519__auto__();
(statearr_15285[(6)] = c__13518__auto___17884);

return statearr_15285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17997 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17997(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17999 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17999(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18004 = (function() {
var G__18005 = null;
var G__18005__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18005__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18005 = function(p,v){
switch(arguments.length){
case 1:
return G__18005__1.call(this,p);
case 2:
return G__18005__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18005.cljs$core$IFn$_invoke$arity$1 = G__18005__1;
G__18005.cljs$core$IFn$_invoke$arity$2 = G__18005__2;
return G__18005;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15333 = arguments.length;
switch (G__15333) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18004(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18004(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15374 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15375){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15375 = meta15375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15376,meta15375__$1){
var self__ = this;
var _15376__$1 = this;
return (new cljs.core.async.t_cljs$core$async15374(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15375__$1));
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15376){
var self__ = this;
var _15376__$1 = this;
return self__.meta15375;
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15374.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15375","meta15375",-819719593,null)], null);
}));

(cljs.core.async.t_cljs$core$async15374.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15374");

(cljs.core.async.t_cljs$core$async15374.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15374");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15374.
 */
cljs.core.async.__GT_t_cljs$core$async15374 = (function cljs$core$async$__GT_t_cljs$core$async15374(ch,topic_fn,buf_fn,mults,ensure_mult,meta15375){
return (new cljs.core.async.t_cljs$core$async15374(ch,topic_fn,buf_fn,mults,ensure_mult,meta15375));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15355 = arguments.length;
switch (G__15355) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15349_SHARP_){
if(cljs.core.truth_((p1__15349_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15349_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15349_SHARP_.call(null,topic)))){
return p1__15349_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15349_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15374(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13518__auto___18023 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_15548){
var state_val_15550 = (state_15548[(1)]);
if((state_val_15550 === (7))){
var inst_15532 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15556_18025 = state_15548__$1;
(statearr_15556_18025[(2)] = inst_15532);

(statearr_15556_18025[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (20))){
var state_15548__$1 = state_15548;
var statearr_15559_18026 = state_15548__$1;
(statearr_15559_18026[(2)] = null);

(statearr_15559_18026[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (1))){
var state_15548__$1 = state_15548;
var statearr_15561_18027 = state_15548__$1;
(statearr_15561_18027[(2)] = null);

(statearr_15561_18027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (24))){
var inst_15512 = (state_15548[(7)]);
var inst_15524 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15512);
var state_15548__$1 = state_15548;
var statearr_15564_18029 = state_15548__$1;
(statearr_15564_18029[(2)] = inst_15524);

(statearr_15564_18029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (4))){
var inst_15391 = (state_15548[(8)]);
var inst_15391__$1 = (state_15548[(2)]);
var inst_15392 = (inst_15391__$1 == null);
var state_15548__$1 = (function (){var statearr_15568 = state_15548;
(statearr_15568[(8)] = inst_15391__$1);

return statearr_15568;
})();
if(cljs.core.truth_(inst_15392)){
var statearr_15569_18034 = state_15548__$1;
(statearr_15569_18034[(1)] = (5));

} else {
var statearr_15570_18035 = state_15548__$1;
(statearr_15570_18035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (15))){
var inst_15505 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15572_18036 = state_15548__$1;
(statearr_15572_18036[(2)] = inst_15505);

(statearr_15572_18036[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (21))){
var inst_15529 = (state_15548[(2)]);
var state_15548__$1 = (function (){var statearr_15575 = state_15548;
(statearr_15575[(9)] = inst_15529);

return statearr_15575;
})();
var statearr_15577_18038 = state_15548__$1;
(statearr_15577_18038[(2)] = null);

(statearr_15577_18038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (13))){
var inst_15475 = (state_15548[(10)]);
var inst_15484 = cljs.core.chunked_seq_QMARK_(inst_15475);
var state_15548__$1 = state_15548;
if(inst_15484){
var statearr_15579_18039 = state_15548__$1;
(statearr_15579_18039[(1)] = (16));

} else {
var statearr_15580_18040 = state_15548__$1;
(statearr_15580_18040[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (22))){
var inst_15521 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
if(cljs.core.truth_(inst_15521)){
var statearr_15584_18042 = state_15548__$1;
(statearr_15584_18042[(1)] = (23));

} else {
var statearr_15586_18043 = state_15548__$1;
(statearr_15586_18043[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (6))){
var inst_15512 = (state_15548[(7)]);
var inst_15514 = (state_15548[(11)]);
var inst_15391 = (state_15548[(8)]);
var inst_15512__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15391) : topic_fn.call(null,inst_15391));
var inst_15513 = cljs.core.deref(mults);
var inst_15514__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15513,inst_15512__$1);
var state_15548__$1 = (function (){var statearr_15588 = state_15548;
(statearr_15588[(7)] = inst_15512__$1);

(statearr_15588[(11)] = inst_15514__$1);

return statearr_15588;
})();
if(cljs.core.truth_(inst_15514__$1)){
var statearr_15589_18045 = state_15548__$1;
(statearr_15589_18045[(1)] = (19));

} else {
var statearr_15592_18047 = state_15548__$1;
(statearr_15592_18047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (25))){
var inst_15526 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15595_18048 = state_15548__$1;
(statearr_15595_18048[(2)] = inst_15526);

(statearr_15595_18048[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (17))){
var inst_15475 = (state_15548[(10)]);
var inst_15496 = cljs.core.first(inst_15475);
var inst_15497 = cljs.core.async.muxch_STAR_(inst_15496);
var inst_15498 = cljs.core.async.close_BANG_(inst_15497);
var inst_15499 = cljs.core.next(inst_15475);
var inst_15404 = inst_15499;
var inst_15405 = null;
var inst_15406 = (0);
var inst_15407 = (0);
var state_15548__$1 = (function (){var statearr_15598 = state_15548;
(statearr_15598[(12)] = inst_15406);

(statearr_15598[(13)] = inst_15407);

(statearr_15598[(14)] = inst_15404);

(statearr_15598[(15)] = inst_15498);

(statearr_15598[(16)] = inst_15405);

return statearr_15598;
})();
var statearr_15601_18051 = state_15548__$1;
(statearr_15601_18051[(2)] = null);

(statearr_15601_18051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (3))){
var inst_15534 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15548__$1,inst_15534);
} else {
if((state_val_15550 === (12))){
var inst_15507 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15603_18053 = state_15548__$1;
(statearr_15603_18053[(2)] = inst_15507);

(statearr_15603_18053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (2))){
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15548__$1,(4),ch);
} else {
if((state_val_15550 === (23))){
var state_15548__$1 = state_15548;
var statearr_15606_18054 = state_15548__$1;
(statearr_15606_18054[(2)] = null);

(statearr_15606_18054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (19))){
var inst_15514 = (state_15548[(11)]);
var inst_15391 = (state_15548[(8)]);
var inst_15519 = cljs.core.async.muxch_STAR_(inst_15514);
var state_15548__$1 = state_15548;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15548__$1,(22),inst_15519,inst_15391);
} else {
if((state_val_15550 === (11))){
var inst_15475 = (state_15548[(10)]);
var inst_15404 = (state_15548[(14)]);
var inst_15475__$1 = cljs.core.seq(inst_15404);
var state_15548__$1 = (function (){var statearr_15609 = state_15548;
(statearr_15609[(10)] = inst_15475__$1);

return statearr_15609;
})();
if(inst_15475__$1){
var statearr_15612_18061 = state_15548__$1;
(statearr_15612_18061[(1)] = (13));

} else {
var statearr_15614_18062 = state_15548__$1;
(statearr_15614_18062[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (9))){
var inst_15509 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15615_18063 = state_15548__$1;
(statearr_15615_18063[(2)] = inst_15509);

(statearr_15615_18063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (5))){
var inst_15401 = cljs.core.deref(mults);
var inst_15402 = cljs.core.vals(inst_15401);
var inst_15403 = cljs.core.seq(inst_15402);
var inst_15404 = inst_15403;
var inst_15405 = null;
var inst_15406 = (0);
var inst_15407 = (0);
var state_15548__$1 = (function (){var statearr_15621 = state_15548;
(statearr_15621[(12)] = inst_15406);

(statearr_15621[(13)] = inst_15407);

(statearr_15621[(14)] = inst_15404);

(statearr_15621[(16)] = inst_15405);

return statearr_15621;
})();
var statearr_15622_18068 = state_15548__$1;
(statearr_15622_18068[(2)] = null);

(statearr_15622_18068[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (14))){
var state_15548__$1 = state_15548;
var statearr_15627_18069 = state_15548__$1;
(statearr_15627_18069[(2)] = null);

(statearr_15627_18069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (16))){
var inst_15475 = (state_15548[(10)]);
var inst_15488 = cljs.core.chunk_first(inst_15475);
var inst_15490 = cljs.core.chunk_rest(inst_15475);
var inst_15492 = cljs.core.count(inst_15488);
var inst_15404 = inst_15490;
var inst_15405 = inst_15488;
var inst_15406 = inst_15492;
var inst_15407 = (0);
var state_15548__$1 = (function (){var statearr_15636 = state_15548;
(statearr_15636[(12)] = inst_15406);

(statearr_15636[(13)] = inst_15407);

(statearr_15636[(14)] = inst_15404);

(statearr_15636[(16)] = inst_15405);

return statearr_15636;
})();
var statearr_15637_18074 = state_15548__$1;
(statearr_15637_18074[(2)] = null);

(statearr_15637_18074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (10))){
var inst_15406 = (state_15548[(12)]);
var inst_15407 = (state_15548[(13)]);
var inst_15404 = (state_15548[(14)]);
var inst_15405 = (state_15548[(16)]);
var inst_15424 = cljs.core._nth(inst_15405,inst_15407);
var inst_15425 = cljs.core.async.muxch_STAR_(inst_15424);
var inst_15426 = cljs.core.async.close_BANG_(inst_15425);
var inst_15427 = (inst_15407 + (1));
var tmp15624 = inst_15406;
var tmp15625 = inst_15404;
var tmp15626 = inst_15405;
var inst_15404__$1 = tmp15625;
var inst_15405__$1 = tmp15626;
var inst_15406__$1 = tmp15624;
var inst_15407__$1 = inst_15427;
var state_15548__$1 = (function (){var statearr_15640 = state_15548;
(statearr_15640[(12)] = inst_15406__$1);

(statearr_15640[(13)] = inst_15407__$1);

(statearr_15640[(14)] = inst_15404__$1);

(statearr_15640[(17)] = inst_15426);

(statearr_15640[(16)] = inst_15405__$1);

return statearr_15640;
})();
var statearr_15642_18080 = state_15548__$1;
(statearr_15642_18080[(2)] = null);

(statearr_15642_18080[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (18))){
var inst_15502 = (state_15548[(2)]);
var state_15548__$1 = state_15548;
var statearr_15644_18098 = state_15548__$1;
(statearr_15644_18098[(2)] = inst_15502);

(statearr_15644_18098[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15550 === (8))){
var inst_15406 = (state_15548[(12)]);
var inst_15407 = (state_15548[(13)]);
var inst_15417 = (inst_15407 < inst_15406);
var inst_15418 = inst_15417;
var state_15548__$1 = state_15548;
if(cljs.core.truth_(inst_15418)){
var statearr_15645_18164 = state_15548__$1;
(statearr_15645_18164[(1)] = (10));

} else {
var statearr_15646_18169 = state_15548__$1;
(statearr_15646_18169[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_15653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15653[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_15653[(1)] = (1));

return statearr_15653;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_15548){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_15548);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e15655){var ex__13316__auto__ = e15655;
var statearr_15656_18181 = state_15548;
(statearr_15656_18181[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_15548[(4)]))){
var statearr_15657_18182 = state_15548;
(statearr_15657_18182[(1)] = cljs.core.first((state_15548[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18188 = state_15548;
state_15548 = G__18188;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_15548){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_15548);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_15658 = f__13519__auto__();
(statearr_15658[(6)] = c__13518__auto___18023);

return statearr_15658;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15661 = arguments.length;
switch (G__15661) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15671 = arguments.length;
switch (G__15671) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15695 = arguments.length;
switch (G__15695) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13518__auto___18243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_15833){
var state_val_15834 = (state_15833[(1)]);
if((state_val_15834 === (7))){
var state_15833__$1 = state_15833;
var statearr_15842_18253 = state_15833__$1;
(statearr_15842_18253[(2)] = null);

(statearr_15842_18253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (1))){
var state_15833__$1 = state_15833;
var statearr_15844_18254 = state_15833__$1;
(statearr_15844_18254[(2)] = null);

(statearr_15844_18254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (4))){
var inst_15723 = (state_15833[(7)]);
var inst_15724 = (state_15833[(8)]);
var inst_15728 = (inst_15724 < inst_15723);
var state_15833__$1 = state_15833;
if(cljs.core.truth_(inst_15728)){
var statearr_15848_18255 = state_15833__$1;
(statearr_15848_18255[(1)] = (6));

} else {
var statearr_15849_18261 = state_15833__$1;
(statearr_15849_18261[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (15))){
var inst_15814 = (state_15833[(9)]);
var inst_15821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15814);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15833__$1,(17),out,inst_15821);
} else {
if((state_val_15834 === (13))){
var inst_15814 = (state_15833[(9)]);
var inst_15814__$1 = (state_15833[(2)]);
var inst_15815 = cljs.core.some(cljs.core.nil_QMARK_,inst_15814__$1);
var state_15833__$1 = (function (){var statearr_15861 = state_15833;
(statearr_15861[(9)] = inst_15814__$1);

return statearr_15861;
})();
if(cljs.core.truth_(inst_15815)){
var statearr_15862_18262 = state_15833__$1;
(statearr_15862_18262[(1)] = (14));

} else {
var statearr_15863_18263 = state_15833__$1;
(statearr_15863_18263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (6))){
var state_15833__$1 = state_15833;
var statearr_15864_18407 = state_15833__$1;
(statearr_15864_18407[(2)] = null);

(statearr_15864_18407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (17))){
var inst_15823 = (state_15833[(2)]);
var state_15833__$1 = (function (){var statearr_15870 = state_15833;
(statearr_15870[(10)] = inst_15823);

return statearr_15870;
})();
var statearr_15872_18410 = state_15833__$1;
(statearr_15872_18410[(2)] = null);

(statearr_15872_18410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (3))){
var inst_15829 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15833__$1,inst_15829);
} else {
if((state_val_15834 === (12))){
var _ = (function (){var statearr_15875 = state_15833;
(statearr_15875[(4)] = cljs.core.rest((state_15833[(4)])));

return statearr_15875;
})();
var state_15833__$1 = state_15833;
var ex15869 = (state_15833__$1[(2)]);
var statearr_15877_18415 = state_15833__$1;
(statearr_15877_18415[(5)] = ex15869);


if((ex15869 instanceof Object)){
var statearr_15878_18416 = state_15833__$1;
(statearr_15878_18416[(1)] = (11));

(statearr_15878_18416[(5)] = null);

} else {
throw ex15869;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (2))){
var inst_15721 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15723 = cnt;
var inst_15724 = (0);
var state_15833__$1 = (function (){var statearr_15887 = state_15833;
(statearr_15887[(11)] = inst_15721);

(statearr_15887[(7)] = inst_15723);

(statearr_15887[(8)] = inst_15724);

return statearr_15887;
})();
var statearr_15888_18417 = state_15833__$1;
(statearr_15888_18417[(2)] = null);

(statearr_15888_18417[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (11))){
var inst_15789 = (state_15833[(2)]);
var inst_15790 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15833__$1 = (function (){var statearr_15892 = state_15833;
(statearr_15892[(12)] = inst_15789);

return statearr_15892;
})();
var statearr_15893_18420 = state_15833__$1;
(statearr_15893_18420[(2)] = inst_15790);

(statearr_15893_18420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (9))){
var inst_15724 = (state_15833[(8)]);
var _ = (function (){var statearr_15895 = state_15833;
(statearr_15895[(4)] = cljs.core.cons((12),(state_15833[(4)])));

return statearr_15895;
})();
var inst_15796 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15724) : chs__$1.call(null,inst_15724));
var inst_15797 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15724) : done.call(null,inst_15724));
var inst_15798 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15796,inst_15797);
var ___$1 = (function (){var statearr_15906 = state_15833;
(statearr_15906[(4)] = cljs.core.rest((state_15833[(4)])));

return statearr_15906;
})();
var state_15833__$1 = state_15833;
var statearr_15907_18421 = state_15833__$1;
(statearr_15907_18421[(2)] = inst_15798);

(statearr_15907_18421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (5))){
var inst_15812 = (state_15833[(2)]);
var state_15833__$1 = (function (){var statearr_16003 = state_15833;
(statearr_16003[(13)] = inst_15812);

return statearr_16003;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15833__$1,(13),dchan);
} else {
if((state_val_15834 === (14))){
var inst_15817 = cljs.core.async.close_BANG_(out);
var state_15833__$1 = state_15833;
var statearr_16040_18429 = state_15833__$1;
(statearr_16040_18429[(2)] = inst_15817);

(statearr_16040_18429[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (16))){
var inst_15827 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_16041_18430 = state_15833__$1;
(statearr_16041_18430[(2)] = inst_15827);

(statearr_16041_18430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (10))){
var inst_15724 = (state_15833[(8)]);
var inst_15801 = (state_15833[(2)]);
var inst_15802 = (inst_15724 + (1));
var inst_15724__$1 = inst_15802;
var state_15833__$1 = (function (){var statearr_16043 = state_15833;
(statearr_16043[(8)] = inst_15724__$1);

(statearr_16043[(14)] = inst_15801);

return statearr_16043;
})();
var statearr_16049_18431 = state_15833__$1;
(statearr_16049_18431[(2)] = null);

(statearr_16049_18431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15834 === (8))){
var inst_15807 = (state_15833[(2)]);
var state_15833__$1 = state_15833;
var statearr_16051_18432 = state_15833__$1;
(statearr_16051_18432[(2)] = inst_15807);

(statearr_16051_18432[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16054 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16054[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16054[(1)] = (1));

return statearr_16054;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_15833){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_15833);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16055){var ex__13316__auto__ = e16055;
var statearr_16056_18439 = state_15833;
(statearr_16056_18439[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_15833[(4)]))){
var statearr_16057_18440 = state_15833;
(statearr_16057_18440[(1)] = cljs.core.first((state_15833[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18441 = state_15833;
state_15833 = G__18441;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_15833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_15833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16063 = f__13519__auto__();
(statearr_16063[(6)] = c__13518__auto___18243);

return statearr_16063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16073 = arguments.length;
switch (G__16073) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___18444 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16110){
var state_val_16111 = (state_16110[(1)]);
if((state_val_16111 === (7))){
var inst_16089 = (state_16110[(7)]);
var inst_16090 = (state_16110[(8)]);
var inst_16089__$1 = (state_16110[(2)]);
var inst_16090__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16089__$1,(0),null);
var inst_16091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16089__$1,(1),null);
var inst_16092 = (inst_16090__$1 == null);
var state_16110__$1 = (function (){var statearr_16116 = state_16110;
(statearr_16116[(7)] = inst_16089__$1);

(statearr_16116[(9)] = inst_16091);

(statearr_16116[(8)] = inst_16090__$1);

return statearr_16116;
})();
if(cljs.core.truth_(inst_16092)){
var statearr_16117_18454 = state_16110__$1;
(statearr_16117_18454[(1)] = (8));

} else {
var statearr_16118_18455 = state_16110__$1;
(statearr_16118_18455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (1))){
var inst_16078 = cljs.core.vec(chs);
var inst_16079 = inst_16078;
var state_16110__$1 = (function (){var statearr_16119 = state_16110;
(statearr_16119[(10)] = inst_16079);

return statearr_16119;
})();
var statearr_16120_18456 = state_16110__$1;
(statearr_16120_18456[(2)] = null);

(statearr_16120_18456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (4))){
var inst_16079 = (state_16110[(10)]);
var state_16110__$1 = state_16110;
return cljs.core.async.ioc_alts_BANG_(state_16110__$1,(7),inst_16079);
} else {
if((state_val_16111 === (6))){
var inst_16106 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
var statearr_16121_18457 = state_16110__$1;
(statearr_16121_18457[(2)] = inst_16106);

(statearr_16121_18457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (3))){
var inst_16108 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16110__$1,inst_16108);
} else {
if((state_val_16111 === (2))){
var inst_16079 = (state_16110[(10)]);
var inst_16081 = cljs.core.count(inst_16079);
var inst_16082 = (inst_16081 > (0));
var state_16110__$1 = state_16110;
if(cljs.core.truth_(inst_16082)){
var statearr_16125_18458 = state_16110__$1;
(statearr_16125_18458[(1)] = (4));

} else {
var statearr_16126_18459 = state_16110__$1;
(statearr_16126_18459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (11))){
var inst_16079 = (state_16110[(10)]);
var inst_16099 = (state_16110[(2)]);
var tmp16122 = inst_16079;
var inst_16079__$1 = tmp16122;
var state_16110__$1 = (function (){var statearr_16127 = state_16110;
(statearr_16127[(10)] = inst_16079__$1);

(statearr_16127[(11)] = inst_16099);

return statearr_16127;
})();
var statearr_16128_18461 = state_16110__$1;
(statearr_16128_18461[(2)] = null);

(statearr_16128_18461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (9))){
var inst_16090 = (state_16110[(8)]);
var state_16110__$1 = state_16110;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16110__$1,(11),out,inst_16090);
} else {
if((state_val_16111 === (5))){
var inst_16104 = cljs.core.async.close_BANG_(out);
var state_16110__$1 = state_16110;
var statearr_16129_18467 = state_16110__$1;
(statearr_16129_18467[(2)] = inst_16104);

(statearr_16129_18467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (10))){
var inst_16102 = (state_16110[(2)]);
var state_16110__$1 = state_16110;
var statearr_16131_18468 = state_16110__$1;
(statearr_16131_18468[(2)] = inst_16102);

(statearr_16131_18468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16111 === (8))){
var inst_16079 = (state_16110[(10)]);
var inst_16089 = (state_16110[(7)]);
var inst_16091 = (state_16110[(9)]);
var inst_16090 = (state_16110[(8)]);
var inst_16094 = (function (){var cs = inst_16079;
var vec__16084 = inst_16089;
var v = inst_16090;
var c = inst_16091;
return (function (p1__16066_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16066_SHARP_);
});
})();
var inst_16095 = cljs.core.filterv(inst_16094,inst_16079);
var inst_16079__$1 = inst_16095;
var state_16110__$1 = (function (){var statearr_16134 = state_16110;
(statearr_16134[(10)] = inst_16079__$1);

return statearr_16134;
})();
var statearr_16135_18469 = state_16110__$1;
(statearr_16135_18469[(2)] = null);

(statearr_16135_18469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16139 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16139[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16139[(1)] = (1));

return statearr_16139;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16110){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16110);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16140){var ex__13316__auto__ = e16140;
var statearr_16141_18470 = state_16110;
(statearr_16141_18470[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16110[(4)]))){
var statearr_16142_18471 = state_16110;
(statearr_16142_18471[(1)] = cljs.core.first((state_16110[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18472 = state_16110;
state_16110 = G__18472;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16143 = f__13519__auto__();
(statearr_16143[(6)] = c__13518__auto___18444);

return statearr_16143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16145 = arguments.length;
switch (G__16145) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___18474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16173){
var state_val_16174 = (state_16173[(1)]);
if((state_val_16174 === (7))){
var inst_16155 = (state_16173[(7)]);
var inst_16155__$1 = (state_16173[(2)]);
var inst_16156 = (inst_16155__$1 == null);
var inst_16157 = cljs.core.not(inst_16156);
var state_16173__$1 = (function (){var statearr_16178 = state_16173;
(statearr_16178[(7)] = inst_16155__$1);

return statearr_16178;
})();
if(inst_16157){
var statearr_16179_18476 = state_16173__$1;
(statearr_16179_18476[(1)] = (8));

} else {
var statearr_16180_18477 = state_16173__$1;
(statearr_16180_18477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (1))){
var inst_16150 = (0);
var state_16173__$1 = (function (){var statearr_16182 = state_16173;
(statearr_16182[(8)] = inst_16150);

return statearr_16182;
})();
var statearr_16184_18483 = state_16173__$1;
(statearr_16184_18483[(2)] = null);

(statearr_16184_18483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (4))){
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16173__$1,(7),ch);
} else {
if((state_val_16174 === (6))){
var inst_16168 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16185_18487 = state_16173__$1;
(statearr_16185_18487[(2)] = inst_16168);

(statearr_16185_18487[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (3))){
var inst_16170 = (state_16173[(2)]);
var inst_16171 = cljs.core.async.close_BANG_(out);
var state_16173__$1 = (function (){var statearr_16189 = state_16173;
(statearr_16189[(9)] = inst_16170);

return statearr_16189;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16173__$1,inst_16171);
} else {
if((state_val_16174 === (2))){
var inst_16150 = (state_16173[(8)]);
var inst_16152 = (inst_16150 < n);
var state_16173__$1 = state_16173;
if(cljs.core.truth_(inst_16152)){
var statearr_16194_18488 = state_16173__$1;
(statearr_16194_18488[(1)] = (4));

} else {
var statearr_16195_18489 = state_16173__$1;
(statearr_16195_18489[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (11))){
var inst_16150 = (state_16173[(8)]);
var inst_16160 = (state_16173[(2)]);
var inst_16161 = (inst_16150 + (1));
var inst_16150__$1 = inst_16161;
var state_16173__$1 = (function (){var statearr_16196 = state_16173;
(statearr_16196[(8)] = inst_16150__$1);

(statearr_16196[(10)] = inst_16160);

return statearr_16196;
})();
var statearr_16199_18495 = state_16173__$1;
(statearr_16199_18495[(2)] = null);

(statearr_16199_18495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (9))){
var state_16173__$1 = state_16173;
var statearr_16203_18496 = state_16173__$1;
(statearr_16203_18496[(2)] = null);

(statearr_16203_18496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (5))){
var state_16173__$1 = state_16173;
var statearr_16204_18497 = state_16173__$1;
(statearr_16204_18497[(2)] = null);

(statearr_16204_18497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (10))){
var inst_16165 = (state_16173[(2)]);
var state_16173__$1 = state_16173;
var statearr_16206_18498 = state_16173__$1;
(statearr_16206_18498[(2)] = inst_16165);

(statearr_16206_18498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16174 === (8))){
var inst_16155 = (state_16173[(7)]);
var state_16173__$1 = state_16173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16173__$1,(11),out,inst_16155);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16208 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16208[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16208[(1)] = (1));

return statearr_16208;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16173){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16173);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16210){var ex__13316__auto__ = e16210;
var statearr_16212_18500 = state_16173;
(statearr_16212_18500[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16173[(4)]))){
var statearr_16213_18501 = state_16173;
(statearr_16213_18501[(1)] = cljs.core.first((state_16173[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18502 = state_16173;
state_16173 = G__18502;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16218 = f__13519__auto__();
(statearr_16218[(6)] = c__13518__auto___18474);

return statearr_16218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16235 = (function (f,ch,meta16225,_,fn1,meta16236){
this.f = f;
this.ch = ch;
this.meta16225 = meta16225;
this._ = _;
this.fn1 = fn1;
this.meta16236 = meta16236;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16237,meta16236__$1){
var self__ = this;
var _16237__$1 = this;
return (new cljs.core.async.t_cljs$core$async16235(self__.f,self__.ch,self__.meta16225,self__._,self__.fn1,meta16236__$1));
}));

(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16237){
var self__ = this;
var _16237__$1 = this;
return self__.meta16236;
}));

(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16223_SHARP_){
var G__16262 = (((p1__16223_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16223_SHARP_) : self__.f.call(null,p1__16223_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16262) : f1.call(null,G__16262));
});
}));

(cljs.core.async.t_cljs$core$async16235.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16225","meta16225",-1509747925,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16224","cljs.core.async/t_cljs$core$async16224",369839092,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16236","meta16236",619446321,null)], null);
}));

(cljs.core.async.t_cljs$core$async16235.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16235.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16235");

(cljs.core.async.t_cljs$core$async16235.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16235");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16235.
 */
cljs.core.async.__GT_t_cljs$core$async16235 = (function cljs$core$async$__GT_t_cljs$core$async16235(f,ch,meta16225,_,fn1,meta16236){
return (new cljs.core.async.t_cljs$core$async16235(f,ch,meta16225,_,fn1,meta16236));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16224 = (function (f,ch,meta16225){
this.f = f;
this.ch = ch;
this.meta16225 = meta16225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16226,meta16225__$1){
var self__ = this;
var _16226__$1 = this;
return (new cljs.core.async.t_cljs$core$async16224(self__.f,self__.ch,meta16225__$1));
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16226){
var self__ = this;
var _16226__$1 = this;
return self__.meta16225;
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16235(self__.f,self__.ch,self__.meta16225,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16281 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16281) : self__.f.call(null,G__16281));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16225","meta16225",-1509747925,null)], null);
}));

(cljs.core.async.t_cljs$core$async16224.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16224");

(cljs.core.async.t_cljs$core$async16224.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16224");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16224.
 */
cljs.core.async.__GT_t_cljs$core$async16224 = (function cljs$core$async$__GT_t_cljs$core$async16224(f,ch,meta16225){
return (new cljs.core.async.t_cljs$core$async16224(f,ch,meta16225));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16224(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16286 = (function (f,ch,meta16287){
this.f = f;
this.ch = ch;
this.meta16287 = meta16287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16288,meta16287__$1){
var self__ = this;
var _16288__$1 = this;
return (new cljs.core.async.t_cljs$core$async16286(self__.f,self__.ch,meta16287__$1));
}));

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16288){
var self__ = this;
var _16288__$1 = this;
return self__.meta16287;
}));

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16287","meta16287",-2042701789,null)], null);
}));

(cljs.core.async.t_cljs$core$async16286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16286");

(cljs.core.async.t_cljs$core$async16286.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16286.
 */
cljs.core.async.__GT_t_cljs$core$async16286 = (function cljs$core$async$__GT_t_cljs$core$async16286(f,ch,meta16287){
return (new cljs.core.async.t_cljs$core$async16286(f,ch,meta16287));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16294 = (function (p,ch,meta16295){
this.p = p;
this.ch = ch;
this.meta16295 = meta16295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16296,meta16295__$1){
var self__ = this;
var _16296__$1 = this;
return (new cljs.core.async.t_cljs$core$async16294(self__.p,self__.ch,meta16295__$1));
}));

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16296){
var self__ = this;
var _16296__$1 = this;
return self__.meta16295;
}));

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16295","meta16295",-790070893,null)], null);
}));

(cljs.core.async.t_cljs$core$async16294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16294");

(cljs.core.async.t_cljs$core$async16294.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16294.
 */
cljs.core.async.__GT_t_cljs$core$async16294 = (function cljs$core$async$__GT_t_cljs$core$async16294(p,ch,meta16295){
return (new cljs.core.async.t_cljs$core$async16294(p,ch,meta16295));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16294(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16318 = arguments.length;
switch (G__16318) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___18740 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16357){
var state_val_16358 = (state_16357[(1)]);
if((state_val_16358 === (7))){
var inst_16353 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16359_18741 = state_16357__$1;
(statearr_16359_18741[(2)] = inst_16353);

(statearr_16359_18741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (1))){
var state_16357__$1 = state_16357;
var statearr_16360_18742 = state_16357__$1;
(statearr_16360_18742[(2)] = null);

(statearr_16360_18742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (4))){
var inst_16339 = (state_16357[(7)]);
var inst_16339__$1 = (state_16357[(2)]);
var inst_16340 = (inst_16339__$1 == null);
var state_16357__$1 = (function (){var statearr_16366 = state_16357;
(statearr_16366[(7)] = inst_16339__$1);

return statearr_16366;
})();
if(cljs.core.truth_(inst_16340)){
var statearr_16371_18743 = state_16357__$1;
(statearr_16371_18743[(1)] = (5));

} else {
var statearr_16372_18744 = state_16357__$1;
(statearr_16372_18744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (6))){
var inst_16339 = (state_16357[(7)]);
var inst_16344 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16339) : p.call(null,inst_16339));
var state_16357__$1 = state_16357;
if(cljs.core.truth_(inst_16344)){
var statearr_16374_18745 = state_16357__$1;
(statearr_16374_18745[(1)] = (8));

} else {
var statearr_16375_18746 = state_16357__$1;
(statearr_16375_18746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (3))){
var inst_16355 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16357__$1,inst_16355);
} else {
if((state_val_16358 === (2))){
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16357__$1,(4),ch);
} else {
if((state_val_16358 === (11))){
var inst_16347 = (state_16357[(2)]);
var state_16357__$1 = state_16357;
var statearr_16379_18747 = state_16357__$1;
(statearr_16379_18747[(2)] = inst_16347);

(statearr_16379_18747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (9))){
var state_16357__$1 = state_16357;
var statearr_16380_18748 = state_16357__$1;
(statearr_16380_18748[(2)] = null);

(statearr_16380_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (5))){
var inst_16342 = cljs.core.async.close_BANG_(out);
var state_16357__$1 = state_16357;
var statearr_16381_18749 = state_16357__$1;
(statearr_16381_18749[(2)] = inst_16342);

(statearr_16381_18749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (10))){
var inst_16350 = (state_16357[(2)]);
var state_16357__$1 = (function (){var statearr_16382 = state_16357;
(statearr_16382[(8)] = inst_16350);

return statearr_16382;
})();
var statearr_16383_18750 = state_16357__$1;
(statearr_16383_18750[(2)] = null);

(statearr_16383_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16358 === (8))){
var inst_16339 = (state_16357[(7)]);
var state_16357__$1 = state_16357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16357__$1,(11),out,inst_16339);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16386 = [null,null,null,null,null,null,null,null,null];
(statearr_16386[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16386[(1)] = (1));

return statearr_16386;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16357){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16357);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16390){var ex__13316__auto__ = e16390;
var statearr_16391_18751 = state_16357;
(statearr_16391_18751[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16357[(4)]))){
var statearr_16392_18752 = state_16357;
(statearr_16392_18752[(1)] = cljs.core.first((state_16357[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18753 = state_16357;
state_16357 = G__18753;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16394 = f__13519__auto__();
(statearr_16394[(6)] = c__13518__auto___18740);

return statearr_16394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16399 = arguments.length;
switch (G__16399) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13518__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16465){
var state_val_16466 = (state_16465[(1)]);
if((state_val_16466 === (7))){
var inst_16461 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16471_18757 = state_16465__$1;
(statearr_16471_18757[(2)] = inst_16461);

(statearr_16471_18757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (20))){
var inst_16431 = (state_16465[(7)]);
var inst_16442 = (state_16465[(2)]);
var inst_16443 = cljs.core.next(inst_16431);
var inst_16413 = inst_16443;
var inst_16414 = null;
var inst_16415 = (0);
var inst_16416 = (0);
var state_16465__$1 = (function (){var statearr_16472 = state_16465;
(statearr_16472[(8)] = inst_16442);

(statearr_16472[(9)] = inst_16415);

(statearr_16472[(10)] = inst_16414);

(statearr_16472[(11)] = inst_16413);

(statearr_16472[(12)] = inst_16416);

return statearr_16472;
})();
var statearr_16473_18758 = state_16465__$1;
(statearr_16473_18758[(2)] = null);

(statearr_16473_18758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (1))){
var state_16465__$1 = state_16465;
var statearr_16474_18759 = state_16465__$1;
(statearr_16474_18759[(2)] = null);

(statearr_16474_18759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (4))){
var inst_16402 = (state_16465[(13)]);
var inst_16402__$1 = (state_16465[(2)]);
var inst_16403 = (inst_16402__$1 == null);
var state_16465__$1 = (function (){var statearr_16475 = state_16465;
(statearr_16475[(13)] = inst_16402__$1);

return statearr_16475;
})();
if(cljs.core.truth_(inst_16403)){
var statearr_16476_18760 = state_16465__$1;
(statearr_16476_18760[(1)] = (5));

} else {
var statearr_16477_18761 = state_16465__$1;
(statearr_16477_18761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (15))){
var state_16465__$1 = state_16465;
var statearr_16481_18762 = state_16465__$1;
(statearr_16481_18762[(2)] = null);

(statearr_16481_18762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (21))){
var state_16465__$1 = state_16465;
var statearr_16482_18763 = state_16465__$1;
(statearr_16482_18763[(2)] = null);

(statearr_16482_18763[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (13))){
var inst_16415 = (state_16465[(9)]);
var inst_16414 = (state_16465[(10)]);
var inst_16413 = (state_16465[(11)]);
var inst_16416 = (state_16465[(12)]);
var inst_16424 = (state_16465[(2)]);
var inst_16428 = (inst_16416 + (1));
var tmp16478 = inst_16415;
var tmp16479 = inst_16414;
var tmp16480 = inst_16413;
var inst_16413__$1 = tmp16480;
var inst_16414__$1 = tmp16479;
var inst_16415__$1 = tmp16478;
var inst_16416__$1 = inst_16428;
var state_16465__$1 = (function (){var statearr_16483 = state_16465;
(statearr_16483[(14)] = inst_16424);

(statearr_16483[(9)] = inst_16415__$1);

(statearr_16483[(10)] = inst_16414__$1);

(statearr_16483[(11)] = inst_16413__$1);

(statearr_16483[(12)] = inst_16416__$1);

return statearr_16483;
})();
var statearr_16484_18766 = state_16465__$1;
(statearr_16484_18766[(2)] = null);

(statearr_16484_18766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (22))){
var state_16465__$1 = state_16465;
var statearr_16486_18767 = state_16465__$1;
(statearr_16486_18767[(2)] = null);

(statearr_16486_18767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (6))){
var inst_16402 = (state_16465[(13)]);
var inst_16411 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16402) : f.call(null,inst_16402));
var inst_16412 = cljs.core.seq(inst_16411);
var inst_16413 = inst_16412;
var inst_16414 = null;
var inst_16415 = (0);
var inst_16416 = (0);
var state_16465__$1 = (function (){var statearr_16488 = state_16465;
(statearr_16488[(9)] = inst_16415);

(statearr_16488[(10)] = inst_16414);

(statearr_16488[(11)] = inst_16413);

(statearr_16488[(12)] = inst_16416);

return statearr_16488;
})();
var statearr_16489_18768 = state_16465__$1;
(statearr_16489_18768[(2)] = null);

(statearr_16489_18768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (17))){
var inst_16431 = (state_16465[(7)]);
var inst_16435 = cljs.core.chunk_first(inst_16431);
var inst_16436 = cljs.core.chunk_rest(inst_16431);
var inst_16437 = cljs.core.count(inst_16435);
var inst_16413 = inst_16436;
var inst_16414 = inst_16435;
var inst_16415 = inst_16437;
var inst_16416 = (0);
var state_16465__$1 = (function (){var statearr_16490 = state_16465;
(statearr_16490[(9)] = inst_16415);

(statearr_16490[(10)] = inst_16414);

(statearr_16490[(11)] = inst_16413);

(statearr_16490[(12)] = inst_16416);

return statearr_16490;
})();
var statearr_16491_18774 = state_16465__$1;
(statearr_16491_18774[(2)] = null);

(statearr_16491_18774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (3))){
var inst_16463 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16465__$1,inst_16463);
} else {
if((state_val_16466 === (12))){
var inst_16451 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16495_18777 = state_16465__$1;
(statearr_16495_18777[(2)] = inst_16451);

(statearr_16495_18777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (2))){
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16465__$1,(4),in$);
} else {
if((state_val_16466 === (23))){
var inst_16459 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16496_18778 = state_16465__$1;
(statearr_16496_18778[(2)] = inst_16459);

(statearr_16496_18778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (19))){
var inst_16446 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16497_18779 = state_16465__$1;
(statearr_16497_18779[(2)] = inst_16446);

(statearr_16497_18779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (11))){
var inst_16431 = (state_16465[(7)]);
var inst_16413 = (state_16465[(11)]);
var inst_16431__$1 = cljs.core.seq(inst_16413);
var state_16465__$1 = (function (){var statearr_16498 = state_16465;
(statearr_16498[(7)] = inst_16431__$1);

return statearr_16498;
})();
if(inst_16431__$1){
var statearr_16499_18780 = state_16465__$1;
(statearr_16499_18780[(1)] = (14));

} else {
var statearr_16500_18781 = state_16465__$1;
(statearr_16500_18781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (9))){
var inst_16453 = (state_16465[(2)]);
var inst_16454 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16465__$1 = (function (){var statearr_16501 = state_16465;
(statearr_16501[(15)] = inst_16453);

return statearr_16501;
})();
if(cljs.core.truth_(inst_16454)){
var statearr_16519_18782 = state_16465__$1;
(statearr_16519_18782[(1)] = (21));

} else {
var statearr_16520_18785 = state_16465__$1;
(statearr_16520_18785[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (5))){
var inst_16405 = cljs.core.async.close_BANG_(out);
var state_16465__$1 = state_16465;
var statearr_16521_18790 = state_16465__$1;
(statearr_16521_18790[(2)] = inst_16405);

(statearr_16521_18790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (14))){
var inst_16431 = (state_16465[(7)]);
var inst_16433 = cljs.core.chunked_seq_QMARK_(inst_16431);
var state_16465__$1 = state_16465;
if(inst_16433){
var statearr_16522_18791 = state_16465__$1;
(statearr_16522_18791[(1)] = (17));

} else {
var statearr_16523_18792 = state_16465__$1;
(statearr_16523_18792[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (16))){
var inst_16449 = (state_16465[(2)]);
var state_16465__$1 = state_16465;
var statearr_16525_18793 = state_16465__$1;
(statearr_16525_18793[(2)] = inst_16449);

(statearr_16525_18793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16466 === (10))){
var inst_16414 = (state_16465[(10)]);
var inst_16416 = (state_16465[(12)]);
var inst_16422 = cljs.core._nth(inst_16414,inst_16416);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16465__$1,(13),out,inst_16422);
} else {
if((state_val_16466 === (18))){
var inst_16431 = (state_16465[(7)]);
var inst_16440 = cljs.core.first(inst_16431);
var state_16465__$1 = state_16465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16465__$1,(20),out,inst_16440);
} else {
if((state_val_16466 === (8))){
var inst_16415 = (state_16465[(9)]);
var inst_16416 = (state_16465[(12)]);
var inst_16418 = (inst_16416 < inst_16415);
var inst_16419 = inst_16418;
var state_16465__$1 = state_16465;
if(cljs.core.truth_(inst_16419)){
var statearr_16578_18795 = state_16465__$1;
(statearr_16578_18795[(1)] = (10));

} else {
var statearr_16587_18796 = state_16465__$1;
(statearr_16587_18796[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____0 = (function (){
var statearr_16597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16597[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__);

(statearr_16597[(1)] = (1));

return statearr_16597;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____1 = (function (state_16465){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16465);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16600){var ex__13316__auto__ = e16600;
var statearr_16601_18801 = state_16465;
(statearr_16601_18801[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16465[(4)]))){
var statearr_16606_18804 = state_16465;
(statearr_16606_18804[(1)] = cljs.core.first((state_16465[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18805 = state_16465;
state_16465 = G__18805;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__ = function(state_16465){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____1.call(this,state_16465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13313__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16611 = f__13519__auto__();
(statearr_16611[(6)] = c__13518__auto__);

return statearr_16611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));

return c__13518__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16620 = arguments.length;
switch (G__16620) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16636 = arguments.length;
switch (G__16636) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16641 = arguments.length;
switch (G__16641) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___18839 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16665){
var state_val_16666 = (state_16665[(1)]);
if((state_val_16666 === (7))){
var inst_16660 = (state_16665[(2)]);
var state_16665__$1 = state_16665;
var statearr_16670_18845 = state_16665__$1;
(statearr_16670_18845[(2)] = inst_16660);

(statearr_16670_18845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (1))){
var inst_16642 = null;
var state_16665__$1 = (function (){var statearr_16671 = state_16665;
(statearr_16671[(7)] = inst_16642);

return statearr_16671;
})();
var statearr_16672_18847 = state_16665__$1;
(statearr_16672_18847[(2)] = null);

(statearr_16672_18847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (4))){
var inst_16645 = (state_16665[(8)]);
var inst_16645__$1 = (state_16665[(2)]);
var inst_16646 = (inst_16645__$1 == null);
var inst_16647 = cljs.core.not(inst_16646);
var state_16665__$1 = (function (){var statearr_16673 = state_16665;
(statearr_16673[(8)] = inst_16645__$1);

return statearr_16673;
})();
if(inst_16647){
var statearr_16676_18849 = state_16665__$1;
(statearr_16676_18849[(1)] = (5));

} else {
var statearr_16678_18850 = state_16665__$1;
(statearr_16678_18850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (6))){
var state_16665__$1 = state_16665;
var statearr_16684_18851 = state_16665__$1;
(statearr_16684_18851[(2)] = null);

(statearr_16684_18851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (3))){
var inst_16662 = (state_16665[(2)]);
var inst_16663 = cljs.core.async.close_BANG_(out);
var state_16665__$1 = (function (){var statearr_16688 = state_16665;
(statearr_16688[(9)] = inst_16662);

return statearr_16688;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16665__$1,inst_16663);
} else {
if((state_val_16666 === (2))){
var state_16665__$1 = state_16665;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16665__$1,(4),ch);
} else {
if((state_val_16666 === (11))){
var inst_16645 = (state_16665[(8)]);
var inst_16654 = (state_16665[(2)]);
var inst_16642 = inst_16645;
var state_16665__$1 = (function (){var statearr_16692 = state_16665;
(statearr_16692[(7)] = inst_16642);

(statearr_16692[(10)] = inst_16654);

return statearr_16692;
})();
var statearr_16693_18854 = state_16665__$1;
(statearr_16693_18854[(2)] = null);

(statearr_16693_18854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (9))){
var inst_16645 = (state_16665[(8)]);
var state_16665__$1 = state_16665;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16665__$1,(11),out,inst_16645);
} else {
if((state_val_16666 === (5))){
var inst_16642 = (state_16665[(7)]);
var inst_16645 = (state_16665[(8)]);
var inst_16649 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16645,inst_16642);
var state_16665__$1 = state_16665;
if(inst_16649){
var statearr_16697_18855 = state_16665__$1;
(statearr_16697_18855[(1)] = (8));

} else {
var statearr_16698_19109 = state_16665__$1;
(statearr_16698_19109[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (10))){
var inst_16657 = (state_16665[(2)]);
var state_16665__$1 = state_16665;
var statearr_16699_19110 = state_16665__$1;
(statearr_16699_19110[(2)] = inst_16657);

(statearr_16699_19110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16666 === (8))){
var inst_16642 = (state_16665[(7)]);
var tmp16694 = inst_16642;
var inst_16642__$1 = tmp16694;
var state_16665__$1 = (function (){var statearr_16703 = state_16665;
(statearr_16703[(7)] = inst_16642__$1);

return statearr_16703;
})();
var statearr_16704_19111 = state_16665__$1;
(statearr_16704_19111[(2)] = null);

(statearr_16704_19111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16709 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16709[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16709[(1)] = (1));

return statearr_16709;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16665){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16665);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16710){var ex__13316__auto__ = e16710;
var statearr_16711_19115 = state_16665;
(statearr_16711_19115[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16665[(4)]))){
var statearr_16712_19118 = state_16665;
(statearr_16712_19118[(1)] = cljs.core.first((state_16665[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19119 = state_16665;
state_16665 = G__19119;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16665){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16717 = f__13519__auto__();
(statearr_16717[(6)] = c__13518__auto___18839);

return statearr_16717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16719 = arguments.length;
switch (G__16719) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___19121 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16772){
var state_val_16773 = (state_16772[(1)]);
if((state_val_16773 === (7))){
var inst_16768 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16775_19126 = state_16772__$1;
(statearr_16775_19126[(2)] = inst_16768);

(statearr_16775_19126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (1))){
var inst_16734 = (new Array(n));
var inst_16735 = inst_16734;
var inst_16736 = (0);
var state_16772__$1 = (function (){var statearr_16778 = state_16772;
(statearr_16778[(7)] = inst_16735);

(statearr_16778[(8)] = inst_16736);

return statearr_16778;
})();
var statearr_16779_19127 = state_16772__$1;
(statearr_16779_19127[(2)] = null);

(statearr_16779_19127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (4))){
var inst_16739 = (state_16772[(9)]);
var inst_16739__$1 = (state_16772[(2)]);
var inst_16740 = (inst_16739__$1 == null);
var inst_16741 = cljs.core.not(inst_16740);
var state_16772__$1 = (function (){var statearr_16781 = state_16772;
(statearr_16781[(9)] = inst_16739__$1);

return statearr_16781;
})();
if(inst_16741){
var statearr_16782_19128 = state_16772__$1;
(statearr_16782_19128[(1)] = (5));

} else {
var statearr_16783_19129 = state_16772__$1;
(statearr_16783_19129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (15))){
var inst_16762 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16785_19131 = state_16772__$1;
(statearr_16785_19131[(2)] = inst_16762);

(statearr_16785_19131[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (13))){
var state_16772__$1 = state_16772;
var statearr_16786_19134 = state_16772__$1;
(statearr_16786_19134[(2)] = null);

(statearr_16786_19134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (6))){
var inst_16736 = (state_16772[(8)]);
var inst_16757 = (inst_16736 > (0));
var state_16772__$1 = state_16772;
if(cljs.core.truth_(inst_16757)){
var statearr_16787_19137 = state_16772__$1;
(statearr_16787_19137[(1)] = (12));

} else {
var statearr_16788_19138 = state_16772__$1;
(statearr_16788_19138[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (3))){
var inst_16770 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16772__$1,inst_16770);
} else {
if((state_val_16773 === (12))){
var inst_16735 = (state_16772[(7)]);
var inst_16760 = cljs.core.vec(inst_16735);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(15),out,inst_16760);
} else {
if((state_val_16773 === (2))){
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16772__$1,(4),ch);
} else {
if((state_val_16773 === (11))){
var inst_16751 = (state_16772[(2)]);
var inst_16752 = (new Array(n));
var inst_16735 = inst_16752;
var inst_16736 = (0);
var state_16772__$1 = (function (){var statearr_16791 = state_16772;
(statearr_16791[(7)] = inst_16735);

(statearr_16791[(8)] = inst_16736);

(statearr_16791[(10)] = inst_16751);

return statearr_16791;
})();
var statearr_16795_19140 = state_16772__$1;
(statearr_16795_19140[(2)] = null);

(statearr_16795_19140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (9))){
var inst_16735 = (state_16772[(7)]);
var inst_16749 = cljs.core.vec(inst_16735);
var state_16772__$1 = state_16772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16772__$1,(11),out,inst_16749);
} else {
if((state_val_16773 === (5))){
var inst_16744 = (state_16772[(11)]);
var inst_16735 = (state_16772[(7)]);
var inst_16736 = (state_16772[(8)]);
var inst_16739 = (state_16772[(9)]);
var inst_16743 = (inst_16735[inst_16736] = inst_16739);
var inst_16744__$1 = (inst_16736 + (1));
var inst_16745 = (inst_16744__$1 < n);
var state_16772__$1 = (function (){var statearr_16806 = state_16772;
(statearr_16806[(11)] = inst_16744__$1);

(statearr_16806[(12)] = inst_16743);

return statearr_16806;
})();
if(cljs.core.truth_(inst_16745)){
var statearr_16807_19142 = state_16772__$1;
(statearr_16807_19142[(1)] = (8));

} else {
var statearr_16811_19143 = state_16772__$1;
(statearr_16811_19143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (14))){
var inst_16765 = (state_16772[(2)]);
var inst_16766 = cljs.core.async.close_BANG_(out);
var state_16772__$1 = (function (){var statearr_16813 = state_16772;
(statearr_16813[(13)] = inst_16765);

return statearr_16813;
})();
var statearr_16814_19146 = state_16772__$1;
(statearr_16814_19146[(2)] = inst_16766);

(statearr_16814_19146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (10))){
var inst_16755 = (state_16772[(2)]);
var state_16772__$1 = state_16772;
var statearr_16815_19147 = state_16772__$1;
(statearr_16815_19147[(2)] = inst_16755);

(statearr_16815_19147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16773 === (8))){
var inst_16744 = (state_16772[(11)]);
var inst_16735 = (state_16772[(7)]);
var tmp16812 = inst_16735;
var inst_16735__$1 = tmp16812;
var inst_16736 = inst_16744;
var state_16772__$1 = (function (){var statearr_16816 = state_16772;
(statearr_16816[(7)] = inst_16735__$1);

(statearr_16816[(8)] = inst_16736);

return statearr_16816;
})();
var statearr_16817_19149 = state_16772__$1;
(statearr_16817_19149[(2)] = null);

(statearr_16817_19149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16818[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16818[(1)] = (1));

return statearr_16818;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16772){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16772);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16819){var ex__13316__auto__ = e16819;
var statearr_16820_19150 = state_16772;
(statearr_16820_19150[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16772[(4)]))){
var statearr_16821_19151 = state_16772;
(statearr_16821_19151[(1)] = cljs.core.first((state_16772[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19152 = state_16772;
state_16772 = G__19152;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16824 = f__13519__auto__();
(statearr_16824[(6)] = c__13518__auto___19121);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16829 = arguments.length;
switch (G__16829) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13518__auto___19154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13519__auto__ = (function (){var switch__13312__auto__ = (function (state_16895){
var state_val_16896 = (state_16895[(1)]);
if((state_val_16896 === (7))){
var inst_16885 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
var statearr_16904_19283 = state_16895__$1;
(statearr_16904_19283[(2)] = inst_16885);

(statearr_16904_19283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (1))){
var inst_16832 = [];
var inst_16836 = inst_16832;
var inst_16837 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16895__$1 = (function (){var statearr_16908 = state_16895;
(statearr_16908[(7)] = inst_16836);

(statearr_16908[(8)] = inst_16837);

return statearr_16908;
})();
var statearr_16909_19401 = state_16895__$1;
(statearr_16909_19401[(2)] = null);

(statearr_16909_19401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (4))){
var inst_16840 = (state_16895[(9)]);
var inst_16840__$1 = (state_16895[(2)]);
var inst_16845 = (inst_16840__$1 == null);
var inst_16846 = cljs.core.not(inst_16845);
var state_16895__$1 = (function (){var statearr_16910 = state_16895;
(statearr_16910[(9)] = inst_16840__$1);

return statearr_16910;
})();
if(inst_16846){
var statearr_16911_19402 = state_16895__$1;
(statearr_16911_19402[(1)] = (5));

} else {
var statearr_16912_19403 = state_16895__$1;
(statearr_16912_19403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (15))){
var inst_16836 = (state_16895[(7)]);
var inst_16877 = cljs.core.vec(inst_16836);
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16895__$1,(18),out,inst_16877);
} else {
if((state_val_16896 === (13))){
var inst_16872 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
var statearr_16922_19404 = state_16895__$1;
(statearr_16922_19404[(2)] = inst_16872);

(statearr_16922_19404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (6))){
var inst_16836 = (state_16895[(7)]);
var inst_16874 = inst_16836.length;
var inst_16875 = (inst_16874 > (0));
var state_16895__$1 = state_16895;
if(cljs.core.truth_(inst_16875)){
var statearr_16935_19406 = state_16895__$1;
(statearr_16935_19406[(1)] = (15));

} else {
var statearr_16936_19408 = state_16895__$1;
(statearr_16936_19408[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (17))){
var inst_16882 = (state_16895[(2)]);
var inst_16883 = cljs.core.async.close_BANG_(out);
var state_16895__$1 = (function (){var statearr_16944 = state_16895;
(statearr_16944[(10)] = inst_16882);

return statearr_16944;
})();
var statearr_16945_19410 = state_16895__$1;
(statearr_16945_19410[(2)] = inst_16883);

(statearr_16945_19410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (3))){
var inst_16887 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16895__$1,inst_16887);
} else {
if((state_val_16896 === (12))){
var inst_16836 = (state_16895[(7)]);
var inst_16865 = cljs.core.vec(inst_16836);
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16895__$1,(14),out,inst_16865);
} else {
if((state_val_16896 === (2))){
var state_16895__$1 = state_16895;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16895__$1,(4),ch);
} else {
if((state_val_16896 === (11))){
var inst_16851 = (state_16895[(11)]);
var inst_16840 = (state_16895[(9)]);
var inst_16836 = (state_16895[(7)]);
var inst_16860 = inst_16836.push(inst_16840);
var tmp16946 = inst_16836;
var inst_16836__$1 = tmp16946;
var inst_16837 = inst_16851;
var state_16895__$1 = (function (){var statearr_16949 = state_16895;
(statearr_16949[(12)] = inst_16860);

(statearr_16949[(7)] = inst_16836__$1);

(statearr_16949[(8)] = inst_16837);

return statearr_16949;
})();
var statearr_16950_19414 = state_16895__$1;
(statearr_16950_19414[(2)] = null);

(statearr_16950_19414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (9))){
var inst_16837 = (state_16895[(8)]);
var inst_16855 = cljs.core.keyword_identical_QMARK_(inst_16837,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16895__$1 = state_16895;
var statearr_16953_19418 = state_16895__$1;
(statearr_16953_19418[(2)] = inst_16855);

(statearr_16953_19418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (5))){
var inst_16851 = (state_16895[(11)]);
var inst_16852 = (state_16895[(13)]);
var inst_16840 = (state_16895[(9)]);
var inst_16837 = (state_16895[(8)]);
var inst_16851__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16840) : f.call(null,inst_16840));
var inst_16852__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16851__$1,inst_16837);
var state_16895__$1 = (function (){var statearr_16954 = state_16895;
(statearr_16954[(11)] = inst_16851__$1);

(statearr_16954[(13)] = inst_16852__$1);

return statearr_16954;
})();
if(inst_16852__$1){
var statearr_16955_19419 = state_16895__$1;
(statearr_16955_19419[(1)] = (8));

} else {
var statearr_16956_19420 = state_16895__$1;
(statearr_16956_19420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (14))){
var inst_16851 = (state_16895[(11)]);
var inst_16840 = (state_16895[(9)]);
var inst_16867 = (state_16895[(2)]);
var inst_16868 = [];
var inst_16869 = inst_16868.push(inst_16840);
var inst_16836 = inst_16868;
var inst_16837 = inst_16851;
var state_16895__$1 = (function (){var statearr_16957 = state_16895;
(statearr_16957[(7)] = inst_16836);

(statearr_16957[(14)] = inst_16867);

(statearr_16957[(8)] = inst_16837);

(statearr_16957[(15)] = inst_16869);

return statearr_16957;
})();
var statearr_16958_19422 = state_16895__$1;
(statearr_16958_19422[(2)] = null);

(statearr_16958_19422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (16))){
var state_16895__$1 = state_16895;
var statearr_16964_19424 = state_16895__$1;
(statearr_16964_19424[(2)] = null);

(statearr_16964_19424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (10))){
var inst_16857 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
if(cljs.core.truth_(inst_16857)){
var statearr_16965_19425 = state_16895__$1;
(statearr_16965_19425[(1)] = (11));

} else {
var statearr_16969_19426 = state_16895__$1;
(statearr_16969_19426[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (18))){
var inst_16879 = (state_16895[(2)]);
var state_16895__$1 = state_16895;
var statearr_16972_19427 = state_16895__$1;
(statearr_16972_19427[(2)] = inst_16879);

(statearr_16972_19427[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16896 === (8))){
var inst_16852 = (state_16895[(13)]);
var state_16895__$1 = state_16895;
var statearr_16973_19428 = state_16895__$1;
(statearr_16973_19428[(2)] = inst_16852);

(statearr_16973_19428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13313__auto__ = null;
var cljs$core$async$state_machine__13313__auto____0 = (function (){
var statearr_16974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16974[(0)] = cljs$core$async$state_machine__13313__auto__);

(statearr_16974[(1)] = (1));

return statearr_16974;
});
var cljs$core$async$state_machine__13313__auto____1 = (function (state_16895){
while(true){
var ret_value__13314__auto__ = (function (){try{while(true){
var result__13315__auto__ = switch__13312__auto__(state_16895);
if(cljs.core.keyword_identical_QMARK_(result__13315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13315__auto__;
}
break;
}
}catch (e16978){var ex__13316__auto__ = e16978;
var statearr_16979_19429 = state_16895;
(statearr_16979_19429[(2)] = ex__13316__auto__);


if(cljs.core.seq((state_16895[(4)]))){
var statearr_16980_19430 = state_16895;
(statearr_16980_19430[(1)] = cljs.core.first((state_16895[(4)])));

} else {
throw ex__13316__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19431 = state_16895;
state_16895 = G__19431;
continue;
} else {
return ret_value__13314__auto__;
}
break;
}
});
cljs$core$async$state_machine__13313__auto__ = function(state_16895){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13313__auto____1.call(this,state_16895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13313__auto____0;
cljs$core$async$state_machine__13313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13313__auto____1;
return cljs$core$async$state_machine__13313__auto__;
})()
})();
var state__13520__auto__ = (function (){var statearr_16983 = f__13519__auto__();
(statearr_16983[(6)] = c__13518__auto___19154);

return statearr_16983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13520__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
