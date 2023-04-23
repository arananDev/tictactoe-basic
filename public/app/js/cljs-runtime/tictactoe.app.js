goog.provide('tictactoe.app');
tictactoe.app.playing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
tictactoe.app.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","",""], null)], null));
tictactoe.app.options_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true);
tictactoe.app.player = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
tictactoe.app.handleOptions = (function tictactoe$app$handleOptions(option){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(option,"O")){
cljs.core.reset_BANG_(tictactoe.app.options_QMARK_,false);

cljs.core.reset_BANG_(tictactoe.app.playing_QMARK_,true);

return cljs.core.reset_BANG_(tictactoe.app.player,"O");
} else {
cljs.core.reset_BANG_(tictactoe.app.options_QMARK_,false);

cljs.core.reset_BANG_(tictactoe.app.playing_QMARK_,true);

return cljs.core.reset_BANG_(tictactoe.app.player,"X");
}
});
tictactoe.app.change_player = (function tictactoe$app$change_player(player){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(player,"X")){
return "O";
} else {
return "X";
}
});
tictactoe.app.playFn = (function tictactoe$app$playFn(index){
var new_board = tictactoe.game.play_move(cljs.core.deref(tictactoe.app.board),index,cljs.core.deref(tictactoe.app.player));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_board,cljs.core.deref(tictactoe.app.player))){
return alert("Already a piece in this position");
} else {
if(cljs.core.truth_(tictactoe.game.win_QMARK_(new_board))){
cljs.core.reset_BANG_(tictactoe.app.board,new_board);

cljs.core.reset_BANG_(tictactoe.app.playing_QMARK_,false);

return alert([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tictactoe.app.player))," Won!"].join(''));
} else {
cljs.core.reset_BANG_(tictactoe.app.board,new_board);

return cljs.core.reset_BANG_(tictactoe.app.player,tictactoe.app.change_player(cljs.core.deref(tictactoe.app.player)));
}
}
});
tictactoe.app.GameBoard = (function tictactoe$app$GameBoard(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(2)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null))], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(1)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.playing_QMARK_),true))?"cell":"disabledCell"),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.playFn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null));
})], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tictactoe.app.board),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(2)], null))], null)], null)], null);
});
tictactoe.app.Application = (function tictactoe$app$Application(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(tictactoe.app.options_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"What player goes first?"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.handleOptions("O");
}),new cljs.core.Keyword(null,"class","class",-2030961996),"select-button"], null),"O"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return tictactoe.app.handleOptions("X");
}),new cljs.core.Keyword(null,"class","class",-2030961996),"select-button"], null),"X"], null)], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Refresh page to reset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tictactoe.app.player)),"'s turn"].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.app.GameBoard], null)], null))], null);
});
tictactoe.app.init = (function tictactoe$app$init(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tictactoe.app.Application], null),document.getElementById("app"));
});

//# sourceMappingURL=tictactoe.app.js.map
