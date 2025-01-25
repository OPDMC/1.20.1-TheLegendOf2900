ServerEvents.recipes((event) => {
    event.recipes.create.compacting('minecraft:nether_gold_ore', ['minecraft:netherrack', 'minecraft:raw_gold_block']);
    event.recipes.create.compacting('minecraft:nether_quartz_ore', ['minecraft:netherrack', 'minecraft:quartz_block']);
    
    event.recipes.create.mixing([
        Item.of('minecraft:red_nether_bricks'),
        Item.of('alexscaves:biome_treat', '{CaveBiome:"minecraft:nether_wastes"}').withChance(0.004),
        Item.of('alexscaves:biome_treat', '{CaveBiome:"minecraft:warped_forest"}').withChance(0.004),
        Item.of('alexscaves:biome_treat', '{CaveBiome:"minecraft:crimson_forest"}').withChance(0.004),
        Item.of('alexscaves:biome_treat', '{CaveBiome:"regions_unexplored:blackstone_basin"}').withChance(0.01),
        Item.of('alexscaves:biome_treat', '{CaveBiome:"minecraft:soul_sand_valley"}').withChance(0.01),
    ], ['8x minecraft:netherrack', 'alexscaves:biome_treat']);

    event.blasting(
        "regions_unexplored:cobalt_nylium",
        "minecraft:warped_nylium"
    );
    
    event.remove({id:"alexscaves:conversion_crucible"});
    event.recipes.create
    .sequenced_assembly(
      "alexscaves:conversion_crucible",
      "minecraft:cauldron",
      [
        event.recipes.createDeploying("minecraft:cauldron", [
          "minecraft:cauldron",
          "alexscaves:radiant_essence",
        ]),
        event.recipes.create.filling("minecraft:cauldron", [
          Fluid.of("molten_metals:molten_gold", 1000),
          "minecraft:cauldron",
        ]),
        event.recipes.create.filling("minecraft:cauldron", [
          Fluid.of("molten_metals:molten_gold", 1000),
          "minecraft:cauldron",
        ]),
        event.recipes.create.filling("minecraft:cauldron", [
          Fluid.of("molten_metals:molten_gold", 1000),
          "minecraft:cauldron",
        ]),
        event.recipes.create.filling("minecraft:cauldron", [
          Fluid.of("molten_metals:molten_gold", 1000),
          "minecraft:cauldron",
        ]),
        event.recipes.create.filling("minecraft:cauldron", [
          Fluid.of("molten_metals:molten_gold", 1000),
          "minecraft:cauldron",
        ])
      ]
    )
    .transitionalItem("minecraft:cauldron")
    .loops(1);

  event.recipes.create.mixing([Fluid.of('create:chocolate', 1000)], 'alexscaves:block_of_chocolate').heated();
  event.recipes.create.compacting('alexscaves:block_of_chocolate', '4x create:bar_of_chocolate').heated();
  event.remove({id:"quark:tools/crafting/rune_duplication"});
  event.recipes.create.filling('quark:smithing_template_rune', [Fluid.of('alexscaves:purple_soda', 250), 'minecraft:netherite_upgrade_smithing_template']);

  event.recipes.create.crushing(["6x alexscaves:peppermint_powder", Item.of("2x alexscaves:peppermint_powder").withChance(0.4)], "#survial_island:peppermint_powder_made")
  event.recipes.create.crushing(["2x alexscaves:peppermint_powder", Item.of("alexscaves:peppermint_powder").withChance(0.5)], "alexscaves:sharpened_candy_cane")
  event.recipes.create.crushing(["2x alexscaves:peppermint_powder", Item.of("alexscaves:peppermint_powder").withChance(0.25)], "alexscaves:candy_cane")
});