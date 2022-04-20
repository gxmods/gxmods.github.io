// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "GX MODS - Home", "GX MODS  Welcome to my site. Here you can find various modifications of programs, applications and operating systems.   by Gexoty  Home   ", "");
   this[database_length++] = new SearchPage("news.html", "GX MODS - News", "GX MODS  04/20/2022 Website redesign. Bug fixes. Made a mobile version of the site.  04/19/2022 Site creation and hosting. The first product, Xubuntu GX, has been added.   by Gexoty  News   ", "");
   this[database_length++] = new SearchPage("products.html", "GX MODS - Products", "GX MODS  Xubuntu GX - Modified Xubuntu 20.04 LTS  by Gexoty  Products   ", "");
   this[database_length++] = new SearchPage("about.html", "GX MODS - About", "GX MODS  by Gexoty  About   ", "");
   this[database_length++] = new SearchPage("xubuntu-gx.html", "GX MODS - Xubuntu GX", "GX MODS  Xubuntu GX - Modified Xubuntu 20.04 LTS by Gexoty for free use  Changes on Test Build 1   1. Latest updates from 04/18/2022 2. Removed  Transmission, Parole. 3. Installed  neofetch, vlc, git, wget, curl, mcedit, openjdk-8-jdk 4. The network manager is configured for import .ovpn file 5. Installed  wine, winetricks 6. Updated LibreOffice and add russian traslate for LibreOffice 7. Installed NotePadqq 8. Preinstalled qBiTorrent, grub-customizer 9. Other updates...  Thanks for using my little linux distribution.  by Gexoty  Xubuntu GX   ", "");
   return this;
}
