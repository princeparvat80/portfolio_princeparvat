function KLGetQueryParam(param, url) {
	var paramValue = '';
	var urlVal = url || document.location.href || '';
	var a = urlVal.split('#')[0] || '';
	var b = a.split('?')[1] || '';
	var vars = b.split('&');
	param = param.toLowerCase();
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]).toLowerCase() == param) {
			try {
				return decodeURIComponent(pair[1]);
			} catch (err) {
				return pair[1];
			}
		}
	}
}

function KLSetCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		expires = '; expires=' + date.toGMTString();
	}
	document.cookie = name + '=' + value + expires + '; path=/; domain=' + _satellite.getVar('cookieDomain') + ';';
}

function KLRemoveUrlParameter(url, parameter) {
	if (typeof url == 'string' && url != '') {
		var urlparts = url.split('?');   
		if (urlparts.length >= 2) {
			var prefix;
			var pars = urlparts[1].split(/[&;]/g);
			for (var i = pars.length; i-- > 0;) {
				prefix = pars[i].split(/[=;]/g)[0];
				if (prefix == parameter) {
					pars.splice(i, 1);
				}
			}
			url = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
			return url;
		} else {
			return url;
		}
	} else {
		return '';
	}
}

console.log('Functions are ready');
// set functions globally
window.KLGetQueryParam = KLGetQueryParam;
window.KLSetCookie = KLSetCookie;
window.KLRemoveUrlParameter = KLRemoveUrlParameter;
console.log('there is campaign ' + _satellite.getVar('campaign'));
console.log('adobe presettings is ' + Date.now());