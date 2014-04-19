Bot.register("Zach's Bot", function(game, player, move) {
  move(game.board.safe_directions(game.me)[0]);
});
