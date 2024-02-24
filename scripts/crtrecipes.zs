import mods.farmersdelight.CuttingBoard;


//添加鳕鱼块及鲑鱼块切片配方
<recipetype:farmersdelight:cutting>.addRecipe("cutting_salmon_log",<item:architects_palette:salmon_log>,
[<item:minecraft:salmon> * 4],<tag:items:farmersdelight:tools/knives>, "minecraft:block.gravel.break");
<recipetype:farmersdelight:cutting>.addRecipe("cutting_cod_log",<item:architects_palette:cod_log>,
[<item:minecraft:cod> * 4],<tag:items:farmersdelight:tools/knives>, "minecraft:block.gravel.break");

