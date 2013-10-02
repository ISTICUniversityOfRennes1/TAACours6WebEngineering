/**
 * @fichier accordion.js
 * @version 1.0.0.0
 * @auteur  Stéphane RIO
 * @email   stephane.rio@univ-rennes1.fr
 * @date    05.06.2006
*/

/**
 *
*/
function autoOpenPanel( panelId )
{
	if ( document.getElementById )
	{
		panelStyle = document.getElementById( panelId ).style;
		if ( panelStyle.display == "none" )
		{
			panelStyle.display = "block";
		}
	}
}

/**
 *
*/
function hideAllPanel()
{
	var divElements = document.getElementsByTagName( "div" );
	for ( var i = 0; i < divElements.length; i++ )
	{
		var currentDivElement = divElements[ i ];
		if ( currentDivElement.className == "accordion" )
		{
			var contentElements = currentDivElement.getElementsByTagName( "div" );
			for ( var j = 0; j < contentElements.length; j++ )
			{
				var currentContentElement = contentElements[ j ];
				if ( currentContentElement.className == "content" )
				{
					currentContentElement.style.display = "none";
				}
			}
		}
	}
}

/**
 *
*/
function showAllPanel()
{
	var divElements = document.getElementsByTagName( "div" );
	for ( var i = 0; i < divElements.length; i++ )
	{
		var currentDivElement = divElements[ i ];
		if ( currentDivElement.className == "accordion" )
		{
			var contentElements = currentDivElement.getElementsByTagName( "div" );
			for ( var j = 0; j < contentElements.length; j++ )
			{
				var currentContentElement = contentElements[ j ];
				if ( currentContentElement.className == "content" )
				{
					currentContentElement.style.display = "block";
				}
			}
		}
	}
}

/**
 *
*/
function showPanel( panelId )
{
	if ( document.getElementById )
	{
		panelStyle = document.getElementById( panelId ).style;
		if ( panelStyle.display == "block" )
		{
			panelStyle.display = "none";
		}
		else
		{
			panelStyle.display = "block";
		}
	}
}
