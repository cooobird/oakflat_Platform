onEvent('item.registry',event => {
	event.create('create_star').displayName('创造之星').maxStackSize(64);
	event.create('material_tar').displayName('物质之星').maxStackSize(64);
})
