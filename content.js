function iterateMessage(agent, time) {
  setTimeout(function(){
    agent.animate();
    var items = ['Hey, iar stai pe facebook?', 'Poate totusi la lucru?', 'Eu stiu unde locuesti..', 'Nu pune like-uri!', 'Mai bine citesti o carte', 'Pe twitter ai intrat azi?']
    var item = items[Math.floor(Math.random()*items.length)];
    agent.speak(item);

    setTimeout(function(){
        iterateMessage(agent, time);
        }, time);
  }, time);
}


clippy.load('Clippy', function(agent) {
    agent.moveTo(50,100);
    agent.show();
    iterateMessage(agent, 7000);
});
