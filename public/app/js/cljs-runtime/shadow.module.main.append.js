
shadow.cljs.devtools.client.env.module_loaded('main');

try { tictactoe.app.init(); } catch (e) { console.error("An error occurred when calling (tictactoe.app/init)"); throw(e); }