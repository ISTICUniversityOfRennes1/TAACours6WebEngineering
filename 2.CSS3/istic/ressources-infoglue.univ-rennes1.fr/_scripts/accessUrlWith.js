/**
 * @fichier accessUrlWith.js
 * @version 1.0.0.0
 * @auteur  Linda Ruault ...
 * @email   Linda.ruault@univ-rennes1.fr
 * @date    04.02.2008
*/

/**
 * fonction utilise dans l annuaire est l acces direct 
*/
function accessUrlWith( object )
{
     var url = object.options[ object.selectedIndex ].value;
     if ( url != '' && url != '#' ){
	 window.open( url );
     }
}

function accessUrlInWindowWith( object )
{
     var url = object.options[ object.selectedIndex ].value;
     if ( url != '' && url != '#' ){
         window.location.href=url;
     }
}
