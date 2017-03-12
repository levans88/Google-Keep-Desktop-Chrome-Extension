# Google-Keep-Desktop-Chrome-Extension
Chrome Extension for Google Keep to make better use of screen space on desktops.


This is some really messy test code... I was attempting to cleanup the Google Keep layout via Chrome extension to fit more notes on the screen in a uniform format (better use of space for desktop).


Formatting of notes by hiding specific divs was successful but vertical spacing is wrong afterward. Spacing is fixed by focus() on corner checkmarks on scroll() by:  (".Q0hgme-LgbsSe.Q0hgme-Bz112c-LgbsSe.IZ65Hb-NGme3c.VIpgJd-LgbsSe").focus();... HOWEVER, this introduces an infinite scroll/focus bug...


It would be much better if I could simulate clicking outside the window and then back on the document or body as this causes Keep to run some code that adjusts the whole layout automatically.


For example, if you click on the address bar, then back on the body, the spacing fixes itself.


In Chrome developer tools -> Sources -> "Event Listener Breakpoints", it looks like the automatic adjustment is caused by:


focus to Window

focus to document

DOMFocusIn to body


Sadly, calling .focus() on those elements doesn't seem to matter unless you click outside the window first, and I also can't trigger DOMFocusIn as far as I know currently.