// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('two048.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
two048.core.empty_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null)], null);
two048.core.find_index_to_replace = (function two048$core$find_index_to_replace(board){
return cljs.core.rand_nth(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__23139_SHARP_,p2__23138_SHARP_){
if((p2__23138_SHARP_ === (0))){
return p1__23139_SHARP_;
} else {
return null;
}
}),cljs.core.flatten(board)));
});
two048.core.get_new_board = (function two048$core$get_new_board(board){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(board)),two048.core.find_index_to_replace(board),cljs.core.rand_nth(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(4)], null)))));
});
two048.core.initial_board = (function two048$core$initial_board(){
return two048.core.get_new_board(two048.core.get_new_board(two048.core.empty_board));
});
if((typeof two048 !== 'undefined') && (typeof two048.core !== 'undefined') && (typeof two048.core.board !== 'undefined')){
} else {
two048.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(two048.core.initial_board());
}
two048.core.add_valid_adjacents = (function two048$core$add_valid_adjacents(nums){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23140_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_),p1__23140_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__23141_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),p1__23141_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,nums)], 0))));
});
two048.core.process_left = (function two048$core$process_left(row){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(two048.core.add_valid_adjacents(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,row)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
});
two048.core.move_left = (function two048$core$move_left(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.process_left,board);
});
two048.core.process_right = (function two048$core$process_right(row){
return cljs.core.reverse(two048.core.process_left(cljs.core.reverse(row)));
});
two048.core.move_right = (function two048$core$move_right(board){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.process_right,board);
});
two048.core.move_down = (function two048$core$move_down(board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.process_right,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,board)));
});
two048.core.move_up = (function two048$core$move_up(board){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.process_left,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,board)));
});
two048.core.is_winner_QMARK_ = (function two048$core$is_winner_QMARK_(board){
var G__23143 = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(2048),null], null), null),cljs.core.flatten(cljs.core.deref(board)));
var fexpr__23142 = cljs.core.complement(cljs.core.nil_QMARK_);
return (fexpr__23142.cljs$core$IFn$_invoke$arity$1 ? fexpr__23142.cljs$core$IFn$_invoke$arity$1(G__23143) : fexpr__23142.call(null,G__23143));
});
two048.core.reset = (function two048$core$reset(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(two048.core.board,two048.core.initial_board);
});
two048.core.move = (function two048$core$move(f,board){
if(cljs.core.truth_(two048.core.is_winner_QMARK_(board))){
confirm("\uD83C\uDF1FYou Won The Game!\u2728");

two048.core.reset();
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(board,f);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(board,two048.core.get_new_board);
});
two048.core.colors = cljs.core.PersistentHashMap.fromArrays([(128),(4),(512),(32),(256),(1024),(64),(2),(16),(8)],["#ffdb58","#ffffe0","#ffc40c","#f0ead6","#e4d96f","#ffff00","#f0e68c","#fefefa","#f5f5dc","#fff8dc"]);
two048.core.createDiv = (function two048$core$createDiv(element){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"element",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,cljs.core.get.cljs$core$IFn$_invoke$arity$2(two048.core.colors,element)], null)], null),(((element === (0)))?"":element)], null);
});
two048.core.render_row = (function two048$core$render_row(row){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"row"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.createDiv,row)], null);
});
two048.core.home_page = (function two048$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"page",cljs.core.cst$kw$autoFocus,true,cljs.core.cst$kw$tabIndex,(1),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (p1__23144_SHARP_){
var G__23145 = p1__23144_SHARP_.which;
switch (G__23145) {
case (37):
return two048.core.move(two048.core.move_left,two048.core.board);

break;
case (38):
return two048.core.move(two048.core.move_up,two048.core.board);

break;
case (39):
return two048.core.move(two048.core.move_right,two048.core.board);

break;
case (40):
return two048.core.move(two048.core.move_down,two048.core.board);

break;
default:
return null;

}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"header-and-reset"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"two-048"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$class,"reset",cljs.core.cst$kw$value,"\u27F3",cljs.core.cst$kw$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$1(two048.core.reset)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"board"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.render_row,cljs.core.deref(two048.core.board))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"controls"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"up"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$value,"\u21E7",cljs.core.cst$kw$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(two048.core.move,two048.core.move_up,two048.core.board)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"down-controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$value,"\u21E6",cljs.core.cst$kw$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(two048.core.move,two048.core.move_left,two048.core.board)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$value,"\u21E9",cljs.core.cst$kw$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(two048.core.move,two048.core.move_down,two048.core.board)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$button,cljs.core.cst$kw$value,"\u21E8",cljs.core.cst$kw$onClick,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(two048.core.move,two048.core.move_right,two048.core.board)], null)], null)], null)], null)], null);
});
two048.core.mount_root = (function two048$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [two048.core.home_page], null),document.getElementById("app"));
});
two048.core.init_BANG_ = (function two048$core$init_BANG_(){
return two048.core.mount_root();
});
