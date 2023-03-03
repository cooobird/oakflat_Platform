onEvent('item.registry',event => {
	event.create('create_star').displayName('创造之星').maxStackSize(64);
	event.create('material_tar').displayName('物质之星').maxStackSize(64);
	event.create('saw_blade').displayName('锯片').maxStackSize(64);
	event.create('dragonsteel_billet').displayName('龙钢钢坯').maxStackSize(64);
})
 