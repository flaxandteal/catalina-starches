(function(){
    function applyPref(el){
        try{
            var pref = el.getAttribute('data-palette');
            if(pref !== 'auto') return;
            var isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            var chosen = isDark ? 'dark' : 'default';
            el.classList.remove('auto','default','dark','dark-alt');
            el.classList.add(chosen);
        }catch(e){/* ignore in old browsers */}
    }
    function init(){
        var nodes = document.querySelectorAll('[data-palette="auto"]');
        nodes.forEach(applyPref);
        if(window.matchMedia){
            var mq = window.matchMedia('(prefers-color-scheme: dark)');
            var listener = function(){ nodes.forEach(applyPref); };
            if(mq.addEventListener) mq.addEventListener('change', listener);
            else if(mq.addListener) mq.addListener(listener);
        }
    }
    if(document.readyState === 'loading'){
        document.addEventListener('DOMContentLoaded', init);
    }else{
        init();
    }
})();
