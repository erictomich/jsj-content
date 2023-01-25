/*
 Milonic DHTML Website Navigation Menu - Version 3.4
 Written by Andy Woolley - Copyright 2002 (c) Milonic Solutions Limited. All Rights Reserved.
 Please visit http://www.milonic.co.uk/menu or e-mail menu3@milonic.com for more information.

 The Free use of this menu is only available to Non-Profit, Educational & Personal web sites.
 Commercial and Corporate licenses  are available for use on all other web sites & Intranets.
 All Copyright notices MUST remain in place at ALL times and, please keep us informed of your
 intentions to use the menu and send us your URL.
*/


//The following line is critical for menu operation, and MUST APPEAR ONLY ONCE. If you have more than one menu_array.js file rem out this line in subsequent files
menunum=0;menus=new Array();_d=document;function addmenu(){menunum++;menus[menunum]=menu;}function dumpmenus(){mt="<script language=javascript>";for(a=1;a<menus.length;a++){mt+=" menu"+a+"=menus["+a+"];"}mt+="<\/script>";_d.write(mt)}
//Please leave the above line intact. The above also needs to be enabled if it not already enabled unless this file is part of a multi pack.



////////////////////////////////////
// Editable properties START here //
////////////////////////////////////

// Special effect string for IE5.5 or above please visit http://www.milonic.co.uk/menu/filters_sample.php for more filters
if(navigator.appVersion.indexOf("MSIE 6.0")>0)
{
	effect = "Fade(duration=0.2);Alpha(style=0,opacity=88);Shadow(color='#777777', Direction=135, Strength=5)"
}
else
{
	effect = "Shadow(color='#777777', Direction=135, Strength=5)" // Stop IE5.5 bug when using more than one filter
}


timegap=500			// The time delay for menus to remain visible
followspeed=5		// Follow Scrolling speed
followrate=40		// Follow Scrolling Rate
suboffset_top=10;	// Sub menu offset Top position
suboffset_left=10;	// Sub menu offset Left position

style1=[			// style1 is an array of properties. You can have as many property arrays as you need. This means that menus can have their own style.
"navy",				// Mouse Off Font Color
"ccccff",			// Mouse Off Background Color
"#FFFF99",			// Mouse On Font Color
"#000000",			// Mouse On Background Color
"#FF0000",			// Menu Border Color
10,					// Font Size in pixels
"normal",			// Font Style (italic or normal)
"bold",				// Font Weight (bold or normal)
"Verdana, Arial",	// Font Name
4,					// Menu Item Padding
"",		// Sub Menu Image (Leave this blank if not needed)
,					// 3D Border & Separator bar
"66ffff",			// 3D High Color
"000099",			// 3D Low Color
"Purple",			// Current Page Item Font Color (leave this blank to disable)
"pink",				// Current Page Item Background Color (leave this blank to disable)
"",		// Top Bar image (Leave this blank to disable)
"ffffff",			// Menu Header Font Color (Leave blank if headers are not needed)
"000099",			// Menu Header Background Color (Leave blank if headers are not needed)
"navy",			// Menu Item Separator Color
]


addmenu(menu=[		// This is the array that contains your menu properties and details
"mainmenu",			// Menu Name - This is needed in order for the menu to be called
0,					// Menu Top - The Top position of the menu in pixels
0,				// Menu Left - The Left position of the menu in pixels
,					// Menu Width - Menus width in pixels
1,					// Menu Border Width
"center",					// Screen Position - here you can use "center;left;right;middle;top;bottom" or a combination of "center:middle"
style1,				// Properties Array - this is set higher up, as above
1,					// Always Visible - allows the menu item to be visible at all time (1=on/0=off)
"left",				// Alignment - sets the menu elements text alignment, values valid here are: left, right or center
,				// Filter - Text variable for setting transitional effects on menu activation - see above for more info
,					// Follow Scrolling - Tells the menu item to follow the user down the screen (visible at all times) (1=on/0=off)
1, 					// Horizontal Menu - Tells the menu to become horizontal instead of top to bottom style (1=on/0=off)
,					// Keep Alive - Keeps the menu visible until the user moves over another menu or clicks elsewhere on the page (1=on/0=off)
,					// Position of TOP sub image left:center:right
,					// Set the Overall Width of Horizontal Menu to 100% and height to the specified amount (Leave blank to disable)
,					// Right To Left - Used in Hebrew for example. (1=on/0=off)
,					// Open the Menus OnClick - leave blank for OnMouseover (1=on/0=off)
,					// ID of the div you want to hide on MouseOver (useful for hiding form elements)
,					// Background image for menu when BGColor set to transparent.
,					// Scrollable Menu
,					// Reserved for future use

,"Jin&nbsp;Shin&nbsp;Jyutsu&nbsp;&nbsp;&nbsp;","show-menu=jsj",,"Jin Shin Jyutsu",1
,"Fluxos&nbsp;da&nbsp;Trindade&nbsp;&nbsp;&nbsp;","show-menu=ft",,"Fluxos da Trindade",1
,"Trava&nbsp;de&nbsp;Segurança&nbsp;&nbsp;&nbsp;&nbsp;","show-menu=tse",,"Trava de Segurança",1
,"Fluxos&nbsp;dos&nbsp;Órgãos&nbsp;&nbsp;&nbsp;","show-menu=fo",,"Fluxos dos Órgãos",1
,"Zeladoras&nbsp;diárias&nbsp;&nbsp;&nbsp;&nbsp;","show-menu=zd",,"Zeladoras diárias",1
,"Os&nbsp;dedos&nbsp;&nbsp;&nbsp;&nbsp;","show-menu=ded",,"Os dedos",1
,"Sintomas&nbsp;e&nbsp;TSE&nbsp;&nbsp;&nbsp;&nbsp;","show-menu=sin",,"Sintomas e TSE",1
,"Localizar&nbsp;palavra&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","show-menu=lp",,"Localizar palavra",1
,"<img src=home.gif border=0>","index.html",,"Início",1

])

addmenu(menu=["jsj",
,,130,1,"",style1,,"left",effect,,,,,,,,,,,,
,"Conceitos básicos","fundamentos.html",,"Conceitos básicos",1
,"Profundidades", "profundidades.html",,"Profundidades",1
,"As Atitudes", "atitudes2.html",,"As Atitudes",1
,"Fluxos de Energia", "fluxos.html",,"Fluxos de Energia",1
,"Travas", "tse.html",,"Travas",1
,"Respirações", "respiracao.html",,"Respirações",1

])
addmenu(menu=["ft",
,,130,1,"",style1,,"left",effect,,,,,,,,,,,,
,"Central Principal","trindadecp.html",,"Central Principal",1
,"Fluxos Supervisores","trindadefs.html",,"Fluxos Supervisores",1
,"Fluxos Mediadores","trindadefm.html",,"Fluxos Mediadores",1

])
addmenu(menu=["tse",
,,180,1,"",style1,,"left",effect,,,,,,,,,,,,
,"O que é?","tse.html",,"O que é?",1
,"TSE e as Profundidades","26tseoqs.html",,"TSE e as Profundidades",1
,"Como abrir as TSE","26tseca.html",,"Como abrir as TSE",1
,"Oráculo das Trava de Segurança de Energia - TSE","oraculo2.html",,"Oráculo das Trava de Segurança de Energia - TSE",1
,"A Energia Vital para o seu Dia","tsedia.html",,"A Energia Vital para o seu Dia",1
,"Perguntas e Respostas","perguntas.html",,"Perguntas e Respostas",1

])
addmenu(menu=["fo",
,,130,1,"",style1,,"left",effect,,,,,,,,,,,,
,"O que são?","orgaosoqs.html",,"O que são?",1
,"Como equilibrar","orgaosce.html",,"Como equilibrar",1


])
addmenu(menu=["zd",
,,130,1,"",style1,,"left",effect,,,,,,,,,,,,
,"O que são?","zeladorasoqs.html",,"O que são?",1
,"Como revitalizar","zeladorascr.html",,"Como revitalizar",1

])

addmenu(menu=["ded",
,,160,1,"",style1,,"left",effect,,,,,,,,,,,,
,"Os Oito Mudras","8mudras.html",,"Os Oito Mudras",1
,"Elo entre as mãos e os pés","elomp.html",,"Elo entre as mãos e os pés",1

])
addmenu(menu=["sin",
,,130,1,"",style1,,"left",effect,,,,,,,,,,,,
,"Sintomas do corpo","corpo.html",,"Sintomas do corpo",1
,"Sintomas da mente","mente.html",,"Sintomas da mente",1
,"Sintomas espírituais","espirito.html",,"Sintomas espírituais",1





])
addmenu(menu=["lp",
,,120,1,"",style1,,"left",effect,,,,,,,,,,,,
,"Localizar palavra","buscas.html",,"Localizar palavra",1



])
dumpmenus()