goog.provide('tictactoe.game');
tictactoe.game.utility = new cljs.core.PersistentArrayMap(null, 3, ["O",(-1),"X",(1),"draw",(0)], null);
tictactoe.game.play_move = (function tictactoe$game$play_move(board,move,player){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,move),"X")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,move),"O")))){
return board;
} else {
return cljs.core.assoc_in(board,move,player);
}
});
tictactoe.game.win_QMARK_ = (function tictactoe$game$win_QMARK_(board){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("X",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], 0))))))))))))))))){
return "X";
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], 0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic("O",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], 0))))))))))))))))){
return "O";
} else {
if(cljs.core.not(cljs.core.some((function (p1__11609_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",p1__11609_SHARP_);
}),cljs.core.flatten(board)))){
return "draw";
} else {
return null;
}
}
}
});
tictactoe.game.actions = (function tictactoe$game$actions(board){
var iter__5523__auto__ = (function tictactoe$game$actions_$_iter__11610(s__11611){
return (new cljs.core.LazySeq(null,(function (){
var s__11611__$1 = s__11611;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11611__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var i = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__11611__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function tictactoe$game$actions_$_iter__11610_$_iter__11612(s__11613){
return (new cljs.core.LazySeq(null,((function (s__11611__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__11613__$1 = s__11613;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__11613__$1);
if(temp__5804__auto____$1){
var s__11613__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__11613__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11613__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11615 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11614 = (0);
while(true){
if((i__11614 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__11614);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append(b__11615,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__11648 = (i__11614 + (1));
i__11614 = G__11648;
continue;
} else {
var G__11649 = (i__11614 + (1));
i__11614 = G__11649;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11615),tictactoe$game$actions_$_iter__11610_$_iter__11612(cljs.core.chunk_rest(s__11613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11615),null);
}
} else {
var j = cljs.core.first(s__11613__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),tictactoe$game$actions_$_iter__11610_$_iter__11612(cljs.core.rest(s__11613__$2)));
} else {
var G__11650 = cljs.core.rest(s__11613__$2);
s__11613__$1 = G__11650;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__11611__$1,i,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__11611__$1,i,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,tictactoe$game$actions_$_iter__11610(cljs.core.rest(s__11611__$1)));
} else {
var G__11651 = cljs.core.rest(s__11611__$1);
s__11611__$1 = G__11651;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((3)));
});
cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","max-value","tictactoe.game/max-value",-541207727,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,(-1000),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","win?","tictactoe.game/win?",571284171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","utility","tictactoe.game/utility",-982440508,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","win?","tictactoe.game/win?",571284171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","action","tictactoe.game/action",-94878243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","actions","tictactoe.game/actions",1712498427,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","min-value","tictactoe.game/min-value",-798854030,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","play-move","tictactoe.game/play-move",95302081,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","action","tictactoe.game/action",-94878243,null),null,(1),null)),(new cljs.core.List(null,"O",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","min-value","tictactoe.game/min-value",-798854030,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,(1000),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","win?","tictactoe.game/win?",571284171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","utility","tictactoe.game/utility",-982440508,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","win?","tictactoe.game/win?",571284171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","doseq","cljs.core/doseq",-169320766,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","action","tictactoe.game/action",-94878243,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","actions","tictactoe.game/actions",1712498427,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","play-move","tictactoe.game/play-move",95302081,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","action","tictactoe.game/action",-94878243,null),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reset!","cljs.core/reset!",657404621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","max-value","tictactoe.game/max-value",-541207727,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","play-move","tictactoe.game/play-move",95302081,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","board","tictactoe.game/board",-1152661756,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","action","tictactoe.game/action",-94878243,null),null,(1),null)),(new cljs.core.List(null,"X",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("tictactoe.game","v","tictactoe.game/v",-1211705468,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
tictactoe.game.ai_to_win = (function tictactoe$game$ai_to_win(board,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"X")){
var v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000));
if(cljs.core.truth_(tictactoe.game.win_QMARK_(board))){
var G__11616 = tictactoe.game.win_QMARK_(board);
return (tictactoe.game.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.game.utility.cljs$core$IFn$_invoke$arity$1(G__11616) : tictactoe.game.utility.call(null,G__11616));
} else {
var seq__11617_11652 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__11618_11653 = null;
var count__11619_11654 = (0);
var i__11620_11655 = (0);
while(true){
if((i__11620_11655 < count__11619_11654)){
var action_11656 = chunk__11618_11653.cljs$core$IIndexed$_nth$arity$2(null,i__11620_11655);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__11625 = tictactoe.game.play_move(board,action_11656,"O");
var G__11626 = "O";
return (tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__11625,G__11626) : tictactoe.game.ai_to_win.call(null,G__11625,G__11626));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__11657 = seq__11617_11652;
var G__11658 = chunk__11618_11653;
var G__11659 = count__11619_11654;
var G__11660 = (i__11620_11655 + (1));
seq__11617_11652 = G__11657;
chunk__11618_11653 = G__11658;
count__11619_11654 = G__11659;
i__11620_11655 = G__11660;
continue;
} else {
var temp__5804__auto___11661 = cljs.core.seq(seq__11617_11652);
if(temp__5804__auto___11661){
var seq__11617_11662__$1 = temp__5804__auto___11661;
if(cljs.core.chunked_seq_QMARK_(seq__11617_11662__$1)){
var c__5568__auto___11663 = cljs.core.chunk_first(seq__11617_11662__$1);
var G__11664 = cljs.core.chunk_rest(seq__11617_11662__$1);
var G__11665 = c__5568__auto___11663;
var G__11666 = cljs.core.count(c__5568__auto___11663);
var G__11667 = (0);
seq__11617_11652 = G__11664;
chunk__11618_11653 = G__11665;
count__11619_11654 = G__11666;
i__11620_11655 = G__11667;
continue;
} else {
var action_11668 = cljs.core.first(seq__11617_11662__$1);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__11627 = tictactoe.game.play_move(board,action_11668,"O");
var G__11628 = "O";
return (tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__11627,G__11628) : tictactoe.game.ai_to_win.call(null,G__11627,G__11628));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__11669 = cljs.core.next(seq__11617_11662__$1);
var G__11670 = null;
var G__11671 = (0);
var G__11672 = (0);
seq__11617_11652 = G__11669;
chunk__11618_11653 = G__11670;
count__11619_11654 = G__11671;
i__11620_11655 = G__11672;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(v);
}
} else {
var v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
if(cljs.core.truth_(tictactoe.game.win_QMARK_(board))){
var G__11629 = tictactoe.game.win_QMARK_(board);
return (tictactoe.game.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.game.utility.cljs$core$IFn$_invoke$arity$1(G__11629) : tictactoe.game.utility.call(null,G__11629));
} else {
var seq__11630_11673 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__11631_11674 = null;
var count__11632_11675 = (0);
var i__11633_11676 = (0);
while(true){
if((i__11633_11676 < count__11632_11675)){
var action_11677 = chunk__11631_11674.cljs$core$IIndexed$_nth$arity$2(null,i__11633_11676);
cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = (function (){var G__11638 = tictactoe.game.play_move(board,action_11677,"X");
var G__11639 = "X";
return (tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__11638,G__11639) : tictactoe.game.ai_to_win.call(null,G__11638,G__11639));
})();
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__11678 = seq__11630_11673;
var G__11679 = chunk__11631_11674;
var G__11680 = count__11632_11675;
var G__11681 = (i__11633_11676 + (1));
seq__11630_11673 = G__11678;
chunk__11631_11674 = G__11679;
count__11632_11675 = G__11680;
i__11633_11676 = G__11681;
continue;
} else {
var temp__5804__auto___11682 = cljs.core.seq(seq__11630_11673);
if(temp__5804__auto___11682){
var seq__11630_11683__$1 = temp__5804__auto___11682;
if(cljs.core.chunked_seq_QMARK_(seq__11630_11683__$1)){
var c__5568__auto___11684 = cljs.core.chunk_first(seq__11630_11683__$1);
var G__11685 = cljs.core.chunk_rest(seq__11630_11683__$1);
var G__11686 = c__5568__auto___11684;
var G__11687 = cljs.core.count(c__5568__auto___11684);
var G__11688 = (0);
seq__11630_11673 = G__11685;
chunk__11631_11674 = G__11686;
count__11632_11675 = G__11687;
i__11633_11676 = G__11688;
continue;
} else {
var action_11689 = cljs.core.first(seq__11630_11683__$1);
cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = (function (){var G__11640 = tictactoe.game.play_move(board,action_11689,"X");
var G__11641 = "X";
return (tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.game.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__11640,G__11641) : tictactoe.game.ai_to_win.call(null,G__11640,G__11641));
})();
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__11690 = cljs.core.next(seq__11630_11683__$1);
var G__11691 = null;
var G__11692 = (0);
var G__11693 = (0);
seq__11630_11673 = G__11690;
chunk__11631_11674 = G__11691;
count__11632_11675 = G__11692;
i__11633_11676 = G__11693;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(v);
}
}
});
tictactoe.game.chooser = (function tictactoe$game$chooser(options,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"X")){
var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(options)));
return cljs.core.rand_nth(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11642_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_value,cljs.core.second(p1__11642_SHARP_));
}),options)));
} else {
var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(options)));
return cljs.core.rand_nth(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11643_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_value,cljs.core.second(p1__11643_SHARP_));
}),options)));
}
});
tictactoe.game.ai_to_choose = (function tictactoe$game$ai_to_choose(board,player){
return tictactoe.game.chooser((function (){var iter__5523__auto__ = (function tictactoe$game$ai_to_choose_$_iter__11644(s__11645){
return (new cljs.core.LazySeq(null,(function (){
var s__11645__$1 = s__11645;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__11645__$1);
if(temp__5804__auto__){
var s__11645__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11645__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__11645__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__11647 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__11646 = (0);
while(true){
if((i__11646 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__11646);
cljs.core.chunk_append(b__11647,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,tictactoe.game.ai_to_win(tictactoe.game.play_move(board,action,player),player)], null));

var G__11694 = (i__11646 + (1));
i__11646 = G__11694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11647),tictactoe$game$ai_to_choose_$_iter__11644(cljs.core.chunk_rest(s__11645__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11647),null);
}
} else {
var action = cljs.core.first(s__11645__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,tictactoe.game.ai_to_win(tictactoe.game.play_move(board,action,player),player)], null),tictactoe$game$ai_to_choose_$_iter__11644(cljs.core.rest(s__11645__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(tictactoe.game.actions(board));
})(),player);
});

//# sourceMappingURL=tictactoe.game.js.map
