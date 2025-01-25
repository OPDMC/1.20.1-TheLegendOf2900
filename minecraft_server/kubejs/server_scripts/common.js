ServerEvents.recipes((event) => {
  event.remove({id:"createbigcannons:big_cartridge_sheet"})
  event.remove("createlowheated:basic_burner");
  event.shaped("createlowheated:basic_burner", ["AGA", " A "], {
    A: "create:andesite_alloy",
    G: "minecraft:hay_block",
  });
  event.recipes.create.haunting(
    "minecraft:wither_skeleton_skull",
    "minecraft:skeleton_skull"
  );
  event.remove("create:crushing/nether_gold_ore");
  event.remove("create:crushing/nether_quartz_ore");
  event.remove("createaddition:mixing/netherrack");

  event.recipes.create.haunting(
    "minecraft:warped_nylium",
    "minecraft:crimson_nylium"
  );

  event.recipes.create.compacting("minecraft:ghast_tear", [
    "minecraft:twisting_vines",
    "minecraft:weeping_vines",
  ]);

  event.remove("functionalstorage:ender_drawer");

  event.remove("irons_spellbooks:divine_pearl");
  event.blasting("irons_spellbooks:divine_pearl", "alexscaves:pearl");

  event.shapeless("kubejs:rough_diamond_block", ["9x kubejs:rough_diamond"]);
  event.shapeless("9x kubejs:rough_diamond", "kubejs:rough_diamond_block");
  event.recipes.create.sandpaper_polishing(
    "minecraft:diamond",
    "kubejs:rough_diamond"
  );
  event.recipes.create.crushing(
    "createaddition:diamond_grit",
    "kubejs:rough_diamond"
  );

  event.recipes.create.sandpaper_polishing(
    ["minecraft:lapis_lazuli"],
    "kubejs:rough_lazurite"
  );
  event.recipes.create.crushing(
    [
      "9x kubejs:lapis_lazuli_shard",
      Item.of("createaddition:electrum_nugget").withChance(0.1),
    ],
    "kubejs:rough_lazurite"
  );
  event.remove({ id: "minecraft:blue_dye" });
  event.shapeless("minecraft:lapis_lazuli", ["9x kubejs:lapis_lazuli_shard"]);
  event.shapeless("9x kubejs:lapis_lazuli_shard", "minecraft:lapis_lazuli");

  event.recipes.create.pressing("kubejs:lapis_sheet", "minecraft:lapis_lazuli");

  event.recipes.create.compacting("irons_spellbooks:blank_rune", [
    "6x alexscaves:moth_dust",
    "alexscaves:polymer_plate",
  ]);

  event.recipes.create.crushing(
    Item.of("minecraft:coal").withChance(0.4),
    "#create:stone_types/scorchia"
  );

  event.remove({
    id: "create:industrial_iron_block_from_iron_ingots_stonecutting",
  });
  event.remove({ id: "createdeco:compacting/industrial_iron_ingot" });

  //event.shapeless('minecraft:warped_nylium', ['minecraft:netherrack','5x minecraft:warped_roots'])
  //event.shapeless('minecraft:crimson_nylium', ['minecraft:netherrack','5x minecraft:crimson_roots'])
  event.remove({ id: "create:crafting/tree_fertilizer" });
  event.remove({ id: "create:crafting/appliances/tree_fertilizer" });

  event.shaped("minecraft:bundle", ["SRS", "R R", "RRR"], {
    S: {
      item: "minecraft:string",
    },
    R: {
      item: "minecraft:rabbit_hide",
    },
  });

  event.shaped("minecraft:bundle", ["SRS"], {
    S: {
      item: "minecraft:string",
    },
    R: {
      item: "minecraft:leather",
    },
  });

  event.recipes.create.filling('create:electron_tube', [Fluid.of("molten_metals:molten_iron", 90), 'create:polished_rose_quartz'])
  event.recipes.create.filling('create:fluid_tank', [Fluid.of("molten_metals:molten_copper", 180), 'minecraft:barrel'])
  event.recipes.create.filling('create_fluid:multi_fluid_tank', [Fluid.of("molten_metals:molten_brass", 180), 'minecraft:barrel'])
  
  event.recipes.create.filling('create:brass_casing', [Fluid.of("molten_metals:molten_brass", 60), 'create:andesite_casing'])
  event.recipes.create.filling('create:copper_casing', [Fluid.of("molten_metals:molten_copper", 60), 'create:andesite_casing'])

  event.recipes.create.mixing('create:andesite_alloy_block', [Fluid.of("molten_metals:molten_iron", 90), '6x minecraft:andesite'])

  event.recipes.create.filling('kubejs:brass_tube', [Fluid.of("molten_metals:molten_brass", 90), 'create:electron_tube'])
  event.shaped(
    Item.of('kubejs:brass_tube'),
    [
        "P",
        "I",
        "B"
    ],
    {
      P: 'create:polished_rose_quartz',
      I: 'create:iron_sheet',
      B: 'create:brass_sheet',
    }
  );
  event.shaped(
    Item.of('kubejs:brass_tube'),
    [
        "E",
        "B"
    ],
    {
      E: 'create:electron_tube',
      B: 'create:brass_sheet',
    }
  );

  event.shapeless('create:brass_tunnel', ['kubejs:brass_tube', 'create:andesite_tunnel'])
  event.shapeless('create:brass_funnel', ['kubejs:brass_tube', 'create:andesite_funnel'])
  event.shapeless('create:smart_fluid_pipe', ['kubejs:brass_tube', 'create:fluid_pipe'])
  event.shapeless('create:smart_chute', ['kubejs:brass_tube', 'create:chute'])
  event.shapeless('2x create:mechanical_crafter', ['kubejs:brass_tube', 'minecraft:crafting_table'])

  event.shaped(
    Item.of('16x create:metal_bracket'),
    [
        "GAG"
    ],
    {
      G: 'alloyed:steel_ingot',
      A: 'create:andesite_alloy',
    }
  );
  event.shaped(
    Item.of('32x create:metal_girder'),
    [
        "GGG",
        "AAA"
    ],
    {
      G: 'alloyed:steel_sheet',
      A: 'create:andesite_alloy',
    }
  );

  event.recipes.create.haunting(Item.of('hotbath:bath_herb').withChance(0.03), 'minecraft:grass');
});
