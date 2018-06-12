<?php
	$dynamicApp = getenv('DYNAMIC_APP');
	$staticApp   = getenv('STATIC_APP');
?>
<VirtualHost *:80>
	ServerName demo.res.ch
	
	ProxyPass '/api/countries/' 'http://<?php print "$dynamicApp"?>/'
	ProxyPassReverse '/api/countries/' 'http:://<?php print "$dynamicApp"?>/'
	
	ProxyPass '/' 'http://<?php print "$staticApp"?>/'
	ProxyPassReverse '/' 'http://<?php print "$staticApp"?>/'
</VirtualHost>

<?php print "hello"?>
