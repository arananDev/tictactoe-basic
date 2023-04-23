goog.provide('tictactoe.ai');
tictactoe.ai.utility = new cljs.core.PersistentArrayMap(null, 3, ["O",(-1),"X",(1),"draw",(0)], null);
tictactoe.ai.max_value = (function tictactoe$ai$max_value(board){
var v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000));
if(cljs.core.truth_(tictactoe.game.win_QMARK_(board))){
var G__13553 = tictactoe.game.win_QMARK_(board);
return (tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1(G__13553) : tictactoe.ai.utility.call(null,G__13553));
} else {
var seq__13555_13601 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__13556_13602 = null;
var count__13557_13603 = (0);
var i__13558_13604 = (0);
while(true){
if((i__13558_13604 < count__13557_13603)){
var action_13605 = chunk__13556_13602.cljs$core$IIndexed$_nth$arity$2(null,i__13558_13604);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__13562 = tictactoe.game.play_move(board,action_13605,"O");
return (tictactoe.ai.min_value.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.min_value.cljs$core$IFn$_invoke$arity$1(G__13562) : tictactoe.ai.min_value.call(null,G__13562));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__13606 = seq__13555_13601;
var G__13607 = chunk__13556_13602;
var G__13608 = count__13557_13603;
var G__13609 = (i__13558_13604 + (1));
seq__13555_13601 = G__13606;
chunk__13556_13602 = G__13607;
count__13557_13603 = G__13608;
i__13558_13604 = G__13609;
continue;
} else {
var temp__5804__auto___13610 = cljs.core.seq(seq__13555_13601);
if(temp__5804__auto___13610){
var seq__13555_13611__$1 = temp__5804__auto___13610;
if(cljs.core.chunked_seq_QMARK_(seq__13555_13611__$1)){
var c__5568__auto___13612 = cljs.core.chunk_first(seq__13555_13611__$1);
var G__13613 = cljs.core.chunk_rest(seq__13555_13611__$1);
var G__13614 = c__5568__auto___13612;
var G__13615 = cljs.core.count(c__5568__auto___13612);
var G__13616 = (0);
seq__13555_13601 = G__13613;
chunk__13556_13602 = G__13614;
count__13557_13603 = G__13615;
i__13558_13604 = G__13616;
continue;
} else {
var action_13617 = cljs.core.first(seq__13555_13611__$1);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__13563 = tictactoe.game.play_move(board,action_13617,"O");
return (tictactoe.ai.min_value.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.min_value.cljs$core$IFn$_invoke$arity$1(G__13563) : tictactoe.ai.min_value.call(null,G__13563));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__13618 = cljs.core.next(seq__13555_13611__$1);
var G__13619 = null;
var G__13620 = (0);
var G__13621 = (0);
seq__13555_13601 = G__13618;
chunk__13556_13602 = G__13619;
count__13557_13603 = G__13620;
i__13558_13604 = G__13621;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(v);
}
});
tictactoe.ai.min_value = (function tictactoe$ai$min_value(board){
var v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1000));
if(cljs.core.truth_(tictactoe.game.win_QMARK_(board))){
var G__13564 = tictactoe.game.win_QMARK_(board);
return (tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1(G__13564) : tictactoe.ai.utility.call(null,G__13564));
} else {
var seq__13565_13622 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__13566_13623 = null;
var count__13567_13624 = (0);
var i__13568_13625 = (0);
while(true){
if((i__13568_13625 < count__13567_13624)){
var action_13626 = chunk__13566_13623.cljs$core$IIndexed$_nth$arity$2(null,i__13568_13625);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tictactoe.game.play_move(board,action_13626,"X")], 0));

cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = tictactoe.ai.max_value(tictactoe.game.play_move(board,action_13626,"X"));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__13627 = seq__13565_13622;
var G__13628 = chunk__13566_13623;
var G__13629 = count__13567_13624;
var G__13630 = (i__13568_13625 + (1));
seq__13565_13622 = G__13627;
chunk__13566_13623 = G__13628;
count__13567_13624 = G__13629;
i__13568_13625 = G__13630;
continue;
} else {
var temp__5804__auto___13631 = cljs.core.seq(seq__13565_13622);
if(temp__5804__auto___13631){
var seq__13565_13632__$1 = temp__5804__auto___13631;
if(cljs.core.chunked_seq_QMARK_(seq__13565_13632__$1)){
var c__5568__auto___13633 = cljs.core.chunk_first(seq__13565_13632__$1);
var G__13634 = cljs.core.chunk_rest(seq__13565_13632__$1);
var G__13635 = c__5568__auto___13633;
var G__13636 = cljs.core.count(c__5568__auto___13633);
var G__13637 = (0);
seq__13565_13622 = G__13634;
chunk__13566_13623 = G__13635;
count__13567_13624 = G__13636;
i__13568_13625 = G__13637;
continue;
} else {
var action_13638 = cljs.core.first(seq__13565_13632__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tictactoe.game.play_move(board,action_13638,"X")], 0));

cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = tictactoe.ai.max_value(tictactoe.game.play_move(board,action_13638,"X"));
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__13639 = cljs.core.next(seq__13565_13632__$1);
var G__13640 = null;
var G__13641 = (0);
var G__13642 = (0);
seq__13565_13622 = G__13639;
chunk__13566_13623 = G__13640;
count__13567_13624 = G__13641;
i__13568_13625 = G__13642;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(v);
}
});
tictactoe.ai.ai_to_win = (function tictactoe$ai$ai_to_win(board,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"X")){
var v = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-1000));
if(cljs.core.truth_(tictactoe.game.win_QMARK_(board))){
var G__13569 = tictactoe.game.win_QMARK_(board);
return (tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1(G__13569) : tictactoe.ai.utility.call(null,G__13569));
} else {
var seq__13570_13643 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__13571_13644 = null;
var count__13572_13645 = (0);
var i__13573_13646 = (0);
while(true){
if((i__13573_13646 < count__13572_13645)){
var action_13647 = chunk__13571_13644.cljs$core$IIndexed$_nth$arity$2(null,i__13573_13646);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__13578 = tictactoe.game.play_move(board,action_13647,"O");
var G__13579 = "O";
return (tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__13578,G__13579) : tictactoe.ai.ai_to_win.call(null,G__13578,G__13579));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__13648 = seq__13570_13643;
var G__13649 = chunk__13571_13644;
var G__13650 = count__13572_13645;
var G__13651 = (i__13573_13646 + (1));
seq__13570_13643 = G__13648;
chunk__13571_13644 = G__13649;
count__13572_13645 = G__13650;
i__13573_13646 = G__13651;
continue;
} else {
var temp__5804__auto___13652 = cljs.core.seq(seq__13570_13643);
if(temp__5804__auto___13652){
var seq__13570_13653__$1 = temp__5804__auto___13652;
if(cljs.core.chunked_seq_QMARK_(seq__13570_13653__$1)){
var c__5568__auto___13654 = cljs.core.chunk_first(seq__13570_13653__$1);
var G__13655 = cljs.core.chunk_rest(seq__13570_13653__$1);
var G__13656 = c__5568__auto___13654;
var G__13657 = cljs.core.count(c__5568__auto___13654);
var G__13658 = (0);
seq__13570_13643 = G__13655;
chunk__13571_13644 = G__13656;
count__13572_13645 = G__13657;
i__13573_13646 = G__13658;
continue;
} else {
var action_13659 = cljs.core.first(seq__13570_13653__$1);
cljs.core.reset_BANG_(v,(function (){var x__5130__auto__ = cljs.core.deref(v);
var y__5131__auto__ = (function (){var G__13580 = tictactoe.game.play_move(board,action_13659,"O");
var G__13581 = "O";
return (tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__13580,G__13581) : tictactoe.ai.ai_to_win.call(null,G__13580,G__13581));
})();
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})());


var G__13660 = cljs.core.next(seq__13570_13653__$1);
var G__13661 = null;
var G__13662 = (0);
var G__13663 = (0);
seq__13570_13643 = G__13660;
chunk__13571_13644 = G__13661;
count__13572_13645 = G__13662;
i__13573_13646 = G__13663;
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
var G__13582 = tictactoe.game.win_QMARK_(board);
return (tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1 ? tictactoe.ai.utility.cljs$core$IFn$_invoke$arity$1(G__13582) : tictactoe.ai.utility.call(null,G__13582));
} else {
var seq__13583_13664 = cljs.core.seq(tictactoe.game.actions(board));
var chunk__13584_13665 = null;
var count__13585_13666 = (0);
var i__13586_13667 = (0);
while(true){
if((i__13586_13667 < count__13585_13666)){
var action_13668 = chunk__13584_13665.cljs$core$IIndexed$_nth$arity$2(null,i__13586_13667);
cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = (function (){var G__13591 = tictactoe.game.play_move(board,action_13668,"X");
var G__13592 = "X";
return (tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__13591,G__13592) : tictactoe.ai.ai_to_win.call(null,G__13591,G__13592));
})();
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__13669 = seq__13583_13664;
var G__13670 = chunk__13584_13665;
var G__13671 = count__13585_13666;
var G__13672 = (i__13586_13667 + (1));
seq__13583_13664 = G__13669;
chunk__13584_13665 = G__13670;
count__13585_13666 = G__13671;
i__13586_13667 = G__13672;
continue;
} else {
var temp__5804__auto___13673 = cljs.core.seq(seq__13583_13664);
if(temp__5804__auto___13673){
var seq__13583_13674__$1 = temp__5804__auto___13673;
if(cljs.core.chunked_seq_QMARK_(seq__13583_13674__$1)){
var c__5568__auto___13675 = cljs.core.chunk_first(seq__13583_13674__$1);
var G__13676 = cljs.core.chunk_rest(seq__13583_13674__$1);
var G__13677 = c__5568__auto___13675;
var G__13678 = cljs.core.count(c__5568__auto___13675);
var G__13679 = (0);
seq__13583_13664 = G__13676;
chunk__13584_13665 = G__13677;
count__13585_13666 = G__13678;
i__13586_13667 = G__13679;
continue;
} else {
var action_13680 = cljs.core.first(seq__13583_13674__$1);
cljs.core.reset_BANG_(v,(function (){var x__5133__auto__ = cljs.core.deref(v);
var y__5134__auto__ = (function (){var G__13593 = tictactoe.game.play_move(board,action_13680,"X");
var G__13594 = "X";
return (tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2 ? tictactoe.ai.ai_to_win.cljs$core$IFn$_invoke$arity$2(G__13593,G__13594) : tictactoe.ai.ai_to_win.call(null,G__13593,G__13594));
})();
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());


var G__13681 = cljs.core.next(seq__13583_13674__$1);
var G__13682 = null;
var G__13683 = (0);
var G__13684 = (0);
seq__13583_13664 = G__13681;
chunk__13584_13665 = G__13682;
count__13585_13666 = G__13683;
i__13586_13667 = G__13684;
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
tictactoe.ai.ai_to_win(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","O","X"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null)], null),"X");
tictactoe.ai.chooser = (function tictactoe$ai$chooser(options,player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"X")){
var max_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(options)));
return cljs.core.rand_nth(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13595_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_value,cljs.core.second(p1__13595_SHARP_));
}),options)));
} else {
var min_value = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.concat.cljs$core$IFn$_invoke$arity$1(options)));
return cljs.core.rand_nth(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13596_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(min_value,cljs.core.second(p1__13596_SHARP_));
}),options)));
}
});
tictactoe.ai.ai_to_choose = (function tictactoe$ai$ai_to_choose(board,player){
return tictactoe.ai.chooser((function (){var iter__5523__auto__ = (function tictactoe$ai$ai_to_choose_$_iter__13597(s__13598){
return (new cljs.core.LazySeq(null,(function (){
var s__13598__$1 = s__13598;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__13598__$1);
if(temp__5804__auto__){
var s__13598__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13598__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__13598__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__13600 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__13599 = (0);
while(true){
if((i__13599 < size__5522__auto__)){
var action = cljs.core._nth(c__5521__auto__,i__13599);
cljs.core.chunk_append(b__13600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,tictactoe.ai.ai_to_win(tictactoe.game.play_move(board,action,player),player)], null));

var G__13685 = (i__13599 + (1));
i__13599 = G__13685;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),tictactoe$ai$ai_to_choose_$_iter__13597(cljs.core.chunk_rest(s__13598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13600),null);
}
} else {
var action = cljs.core.first(s__13598__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [action,tictactoe.ai.ai_to_win(tictactoe.game.play_move(board,action,player),player)], null),tictactoe$ai$ai_to_choose_$_iter__13597(cljs.core.rest(s__13598__$2)));
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

//# sourceMappingURL=tictactoe.ai.js.map
