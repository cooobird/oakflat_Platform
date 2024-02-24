/// <reference path="./globals.d.ts" />
declare function onEvent(name: "recipes", handler: (event: Internal.RecipeEventJS) => void);
declare function onEvent(name: "entity.spawned", handler: (event: Internal.EntitySpawnedEventJS) => void);
declare function onEvent(name: "player.inventory.changed", handler: (event: Internal.InventoryChangedEventJS) => void);
declare function onEvent(name: "player.tick", handler: (event: Internal.SimplePlayerEventJS) => void);
declare function onEvent(name: "item.tags", handler: (event: Internal.TagEventJS) => void);
declare function onEvent(name: "lootjs", handler: (event: Internal.LootModificationEventJS) => void);
declare function onEvent(name: "item.registry", handler: (event: Internal.ItemRegistryEventJS) => void);
declare function onEvent(name: "tags.items", handler: (event: Internal.TagEventJS) => void);
declare function onEvent(name: "block.registry", handler: (event: Internal.BlockRegistryEventJS) => void);
declare function onEvent(name: "jei.hide.items", handler: (event: Internal.HideJEIEventJS) => void);
