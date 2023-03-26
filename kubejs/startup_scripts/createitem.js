onEvent('item.registry',event => {
	event.create('create_star').displayName('创造之星').maxStackSize(64);
	event.create('material_tar').displayName('物质之星').maxStackSize(64);
	event.create('saw_blade').displayName('锯片').maxStackSize(64);
	event.create('dragonsteel_fire_billet').displayName('龙炎钢钢坯').maxStackSize(64);
	event.create('dragonsteel_ice_billet').displayName('龙霜钢钢坯').maxStackSize(64);
	event.create('dragonsteel_lightning_billet').displayName('龙霆钢钢坯').maxStackSize(64);
	event.create('soul_of_dragon_fire').displayName('龙炎之魂').maxStackSize(1);
	event.create('soul_of_dragon_ice').displayName('龙霜之魂').maxStackSize(1);
	event.create('soul_of_dragon_lightning').displayName('龙霆之魂').maxStackSize(1);
	event.create('dragon_soul_pot').displayName('龙魂罐').maxStackSize(1);
	event.create('night_lights').displayName('夜之灯').maxStackSize(1);
})
 