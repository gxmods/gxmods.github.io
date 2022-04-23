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
   this[database_length++] = new SearchPage("index.html", "GX MODS - Home", "GX MODS  Welcome to my website! Here you can find different modifications of applications, programs and operating systems, both from me and from others.  Attention! The author of the site has nothing to do with modifications from other authors! I do not vouch for their performance!  by Gexoty  Home  Test WebSite   ", "");
   this[database_length++] = new SearchPage("news.html", "GX MODS - News", "GX MODS  04/21/2022 Added \"Test WebSite\" - this is test version GX MODS Site.  Bug fixes. Other minor changes...  04/20/2022 Transition to HTML5. Bug fixes. New products added  1. Minecraft RePack 1.16.4 2. VirtualBox 5.2.44 3. Devel Studio Aero Edition Other minor changes...  04/19/2022 Website redesign. Bug fixes. Made a mobile version of the site.  04/18/2022 Site creation and hosting. The first product, Xubuntu GX, has been added.   by Gexoty  News   ", "");
   this[database_length++] = new SearchPage("products.html", "GX MODS - Products", "GX MODS  Xubuntu GX - Modified Xubuntu 20.04 LTS  by Gexoty  Products  VirtualBox - 5.2.44 for oldest processors  Minecraft RePack 1.16.4  Devel Studio Aero Edition   ", "");
   this[database_length++] = new SearchPage("about.html", "GX MODS - About", "GX MODS  by Gexoty  About   ", "");
   this[database_length++] = new SearchPage("xubuntu-gx.html", "GX MODS - Xubuntu GX", "GX MODS  Xubuntu GX - Modified Xubuntu 20.04 LTS by Gexoty for free use  Changes on Test Build 1   1. Latest updates from 04/18/2022 2. Removed  Transmission, Parole. 3. Installed  neofetch, vlc, git, wget, curl, mcedit, openjdk-8-jdk 4. The network manager is configured for import .ovpn file 5. Installed  wine, winetricks 6. Updated LibreOffice and add russian traslate for LibreOffice 7. Installed NotePadqq 8. Preinstalled qBiTorrent, grub-customizer 9. Other updates...  Thanks for using my little linux distribution.  by Gexoty  Xubuntu GX   ", "");
   this[database_length++] = new SearchPage("virtual-box.html", "GX MODS - VirtualBox", "GX MODS  VirtualBox - 5.2.44  This is the old version of the well-known program for creating virtual machines. The peculiarity of this version is that it can work on a PC, with VT-x virtualization processors  by Gexoty  VirtualBox - 5.2.44   ", "");
   this[database_length++] = new SearchPage("minecraft-repack.html", "GX MODS - Minecraft RePack 1.16.4", "GX MODS  What kind of repack?  This repack contains Minecraft 1.16.4. Fully tuned. In its current state, it can run on 2 nuclear processors with a frequency of 1.8 GHz and 2 GB of RAM. On average, it produces 30-40 FPS. There is inside. 1.16.4  Common, Forge, Optifine, ForgeOptifine. Each of them is configured to work as smoothly as possible. Thank you for using my repack! Repack author  Gexoty  by Gexoty  Minecraft RePack 1.16.4   ", "");
   this[database_length++] = new SearchPage("develstudio.html", "GX MODS - Devel Studio Aero Edition", "GX MODS  What is it?  This is moded IDE \"PHP Devel Studio 3.0\" for programming exe apps, on php5+  This mode is BEST!!!   by Gexoty  Devel Studio Aero Edition   ", "");
   this[database_length++] = new SearchPage("index-test.html", "GX MODS test - Home", "GX MODS  by Gexoty  Home  WARNING!!!  The test version WebSite  Back to normal WebSite  -   ", "");
   return this;
}
