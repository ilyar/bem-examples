modules.require(['vow'], function(vow) {
    window.Vow = vow;
    // TODO важно учесть, что Vow запровайдится только на следующий тик!
});