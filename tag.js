function getWebsiteID () {
    return document.querySelector('script[src="//ecdn.analysis.fi/static/js/fab.js"]') !== null ? parseInt(document.querySelector('script[src="//ecdn.analysis.fi/static/js/fab.js"]').id.slice(3)) : 0;
}

;(function(o) {
    var w=window.top,a='apdAdmin',ft=w.document.getElementsByTagName('head')[0],
    l=w.location.href,d=w.document;w.apd_options=o;
    if(l.indexOf('disable_fi')!=-1) { console.error("'disable_fi=1' was detected in the URL. All fi_client.js functionality is disabled for the current page view."); return; }
    var fiab=d.createElement('script'); fiab.type = 'text/javascript';
    fiab.src=o.scheme+'ecdn.analysis.fi/static/js/fab.js';fiab.id='fi-'+o.websiteId;
    ft.appendChild(fiab, ft);if(l.indexOf(a)!=-1) w.localStorage[a]=1; var aM = w.localStorage[a]==1, fi=d.createElement('script');
    fi.type='text/javascript'; fi.async=true; if(aM) fi['data-cfasync']='false';
    fi.src=o.scheme+(aM?'cdn':'ecdn') + '.firstimpression.io/' + (aM ? 'fi.js?id='+o.websiteId : 'fi_client.js');
    ft.appendChild(fi);
})({
    'websiteId': getWebsiteID(),
    'scheme':    '//'
});