define(["../core","./var/rnumnonpx","./var/rmargin","./var/getStyles","../selector"],function(e,t,n,r){function i(i,a,o){var s,u,l,c,d=i.style;return o=o||r(i),o&&(c=o.getPropertyValue(a)||o[a]),o&&(""!==c||e.contains(i.ownerDocument,i)||(c=e.style(i,a)),t.test(c)&&n.test(a)&&(s=d.width,u=d.minWidth,l=d.maxWidth,d.minWidth=d.maxWidth=d.width=c,c=o.width,d.width=s,d.minWidth=u,d.maxWidth=l)),void 0!==c?c+"":c}return i});