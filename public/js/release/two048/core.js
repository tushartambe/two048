// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('two048.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
two048.core.initial_board = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(2),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(0),(0),(0)], null)], null);
if((typeof two048 !== 'undefined') && (typeof two048.core !== 'undefined') && (typeof two048.core.board !== 'undefined')){
} else {
two048.core.board = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(two048.core.initial_board);
}
two048.core.add_valid_adjacents = (function two048$core$add_valid_adjacents(nums){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__25995_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$1(cljs.core._PLUS_),p1__25995_SHARP_);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__25996_SHARP_){
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),p1__25996_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,nums)], 0))));
});
two048.core.process_left = (function two048$core$process_left(row){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((4),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.zero_QMARK_),two048.core.add_valid_adjacents(row)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1((0))));
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
two048.core.find_index_to_replace = (function two048$core$find_index_to_replace(board){
return cljs.core.rand_nth(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__25998_SHARP_,p2__25997_SHARP_){
if((p2__25997_SHARP_ === (0))){
return p1__25998_SHARP_;
} else {
return null;
}
}),cljs.core.flatten(board)));
});
two048.core.get_new_board = (function two048$core$get_new_board(board){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((4),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.flatten(board)),two048.core.find_index_to_replace(board),(2))));
});
two048.core.move = (function two048$core$move(f,board){
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$class,"page",cljs.core.cst$kw$autoFocus,(1),cljs.core.cst$kw$tabIndex,(1),cljs.core.cst$kw$on_DASH_key_DASH_down,(function (p1__25999_SHARP_){
var G__26000 = p1__25999_SHARP_.which;
switch (G__26000) {
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"400px"], null)], null),"two-048"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"board"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(two048.core.render_row,cljs.core.deref(two048.core.board))], null)], null);
});
two048.core.mount_root = (function two048$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [two048.core.home_page], null),document.getElementById("app"));
});
two048.core.init_BANG_ = (function two048$core$init_BANG_(){
return two048.core.mount_root();
});
