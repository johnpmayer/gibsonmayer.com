// Thanks to javascript-array.com

var timeout    = 500;
var closetimer = null;
var ddmenuitem = null;

// Open hidden layer
function mopen(id)
{
  // Cancel close timer
  mcancelclosetime();

  // Close old layer
  if(ddmenuitem)
    {
      ddmenuitem.style.visibility = 'hidden';
    }

  // Get new layer and show it
  ddmenuitem = document.getElementById(id);
  ddmenuitem.style.visibility = 'visible';
}

// Close showed layer
function mclose()
{
  if(ddmenuitem)
    {
      ddmenuitem.style.visibility = 'hidden';
    }
}

// Start closetimer
function mclosetime()
{
  closetimer = window.setTimeout(mclose, timeout);
}

// Cancel closetimer
function mcancelclosetime()
{
  if(closetimer)
    {
      window.clearTimeout(closetimer);
      closetimer = null;
    }
}
