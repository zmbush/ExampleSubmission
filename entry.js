a.syntax.error;

B ot.register("BreakdancingTrees", function(game, player, move) {
  move(game.board.safe_directions(game.me)[0]);
});
